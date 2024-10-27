import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useAppSelector } from '@/redux/hooks';
import {
  useChangePaymentStatusMutation,
  useRentBikeMutation,
} from '@/redux/features/rental/rentalApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [rentBike] = useRentBikeMutation();
  const [changeStatus] = useChangePaymentStatusMutation();

  const { advancedPayment, bikeId, startTime } = useAppSelector(
    (state) => state.booking
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const sonnerId = toast.loading('Payment completing...');

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      toast.error('Something went wrong. Please try again!', { id: sonnerId });
    } else {
      // console.log('[PaymentMethod]', paymentMethod);

      // Proceed with payment confirmation
      const response = await fetch(
        'https://bike-rental-pied.vercel.app/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: 100 * 100,
          }),
        }
      );

      const { clientSecret } = await response.json();

      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        console.log('Payment failed:', confirmError.message);
        toast.success('Payment denied', { id: sonnerId });
      } else if (paymentIntent.status === 'succeeded') {
        if (advancedPayment! > 100) {
          await changeStatus(bikeId).unwrap();
          toast.success('Payment complete', { id: sonnerId });
          navigate('/dashboard/my-rental');

          return;
        }
        try {
          await rentBike({ advancedPayment, bikeId, startTime }).unwrap();
          toast.success('Payment complete', { id: sonnerId });
          navigate(`/booking-complete`);
        } catch (error) {
          console.log(error);
          toast.error('Something went wrong!', { id: sonnerId });
        }
      }
    }
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center '>
      <div
        className='bg-white flex justify-between shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-[800px] h-[300px] mx-auto divide-x'
        style={{
          padding: '3rem',
        }}
      >
        <div className='w-[45%]'>
          <p>
            {advancedPayment && advancedPayment > 100 ? 'Rent' : 'Advanced'}{' '}
            Payment
          </p>
          <h4 className=' t text-2xl font-semibold  uppercase'>
            ${advancedPayment ? advancedPayment : 0}
          </h4>

          <p>
            Pay your{' '}
            {advancedPayment && advancedPayment > 100 ? 'rent' : 'advanced'} now
          </p>
        </div>

        <div
          style={{
            width: '55%',
            maxWidth: '500px',
            paddingLeft: '40px',
          }}
        >
          <h4 className='text-lg font-semibold mb-6'>Payment with card</h4>
          {/* Single form here */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'block',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardElement
                className='card'
                options={{
                  style: {
                    base: {
                      backgroundColor: 'white',
                    },
                  },
                }}
              />
              <button className='pay-button' type='submit' disabled={!stripe}>
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
