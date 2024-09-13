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

  console.log({ advancedPayment });

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
      console.log('[PaymentMethod]', paymentMethod);

      // Proceed with payment confirmation
      const response = await fetch(
        'http://localhost:3000/create-payment-intent',
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

      console.log(response);

      const { clientSecret } = await response.json();

      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        console.log('Payment failed:', confirmError.message);
      } else if (paymentIntent.status === 'succeeded') {
        if (advancedPayment! > 100) {
          await changeStatus(bikeId).unwrap();
          toast.success('Payment success', { id: sonnerId });
          navigate('/dashboard/my-rental');

          return;
        }
        try {
          await rentBike({ advancedPayment, bikeId, startTime }).unwrap();
          toast.success('Payment success', { id: sonnerId });
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
        className='bg-stone-700 w-[600px]  mx-auto '
        style={{
          padding: '3rem',
        }}
      >
        <h4 className='text-stone-100 text-2xl font-semibold uppercase'></h4>
        <p className='mb-10 text-white text-xl font-semibold'></p>
        <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
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
