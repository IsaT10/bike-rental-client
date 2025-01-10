import { BikeForm } from '@/components/BikeForm';

export default function AddBike() {
  return (
    <div>
      <h2 className='text-xl font-semibold text-stone-800 mb-8'>
        Add new bike
      </h2>
      <BikeForm />
    </div>
  );
}
