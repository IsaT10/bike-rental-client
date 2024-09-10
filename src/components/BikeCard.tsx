import { Link } from 'react-router-dom';
import img2 from '../assets/images/bike3.jpeg';
import { Button } from './ui/button';

export default function BikeCard({ bike }) {
  console.log(bike);
  return (
    <div className='justify-self-center flex flex-col  items-center'>
      <img className='mb-4' src={img2} alt='' />
      <p className='text-2xl font-semibold '>{bike.name}</p>
      <p className='text-lg font-semibold text-primary-color mb-4'>
        $ {bike.pricePerHour} / hours
      </p>
      <Link to={`/bikes/${bike._id}`}>
        <Button>Details</Button>
      </Link>
    </div>
  );
}
