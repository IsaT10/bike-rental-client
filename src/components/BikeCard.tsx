import { Link } from 'react-router-dom';
import img2 from '../assets/images/bike3.jpeg';
import { TBike } from '@/types';

export default function BikeCard({ bike }: { bike: TBike }) {
  return (
    <div className='justify-self-center flex flex-col  items-center'>
      <img className='mb-4' src={img2} alt='' />
      <p className='text-2xl font-semibold dark:text-stone-100'>{bike.brand}</p>
      <p className='text-lg font-semibold text-primary-color mb-4'>
        $ {bike.pricePerHour} / Hours
      </p>
      <Link to={`/bike/${bike._id}`}>
        <button className='px-8 py-2.5 font-medium rounded-[20px] dark:text-stone-200 dark:border-stone-600 border dark:hover:bg-primary-color duration-200 border-stone-900'>
          Details
        </button>
      </Link>
    </div>
  );
}
