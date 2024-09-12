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
