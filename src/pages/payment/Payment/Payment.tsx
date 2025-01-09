import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Payment.css';
import PaymentForm from '../PaymentForm';

export default function Payment() {
  const publishable_key = import.meta.env.VITE_PUBLISHABLE_KEY;

  const stripePromise = loadStripe(publishable_key);
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

// import React, { useState } from 'react';
// import { toast } from 'sonner';

// export default function Payment() {
//   const [serviceDetails, setServiceDetails] = useState({
//     description: '',
//     amount: 0,
//   });

//   const handleCheckout = async () => {
//     if (!serviceDetails.description || !serviceDetails.amount) {
//       toast.error('Please provide service details and amount.');
//       return;
//     }

//     try {
//       toast.loading('Redirecting to payment...', { id: 'checkout' });

//       const response = await fetch(
//         'http://localhost:3000/api/payments/create-checkout-session',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             description: serviceDetails.description,
//             amount: serviceDetails.amount,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to create checkout session');
//       }
//       const { data: url } = await response.json();

//       if (url) {
//         window.location.href = url; // Redirect to Stripe Checkout page
//       } else {
//         toast.error('Failed to initiate payment.', { id: 'checkout' });
//       }
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//       toast.error('Something went wrong. Please try again!', {
//         id: 'checkout',
//       });
//     }
//   };

//   return (
//     <div className='h-screen flex flex-col items-center justify-center'>
//       <h1 className='text-2xl font-bold mb-4'>Checkout Payment</h1>
//       <input
//         type='text'
//         placeholder='Service Description'
//         value={serviceDetails.description}
//         onChange={(e) =>
//           setServiceDetails({ ...serviceDetails, description: e.target.value })
//         }
//         className='border mb-4 p-2'
//       />
//       <input
//         type='number'
//         placeholder='Amount (USD)'
//         value={serviceDetails.amount}
//         onChange={(e) =>
//           setServiceDetails({ ...serviceDetails, amount: +e.target.value })
//         }
//         className='border mb-4 p-2'
//       />
//       <button
//         onClick={handleCheckout}
//         className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// }
