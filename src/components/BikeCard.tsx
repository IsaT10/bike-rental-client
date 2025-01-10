import { Link, useLocation } from 'react-router-dom';
import { TBike } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Compare } from './shared/Icons';
import {
  getCompareListFromLocalStorage,
  setCompareListInLocalStorage,
} from '@/utils/localstorageCompare';
import Star from './Star';
type TBikeCardPros = {
  bike: TBike;
  onCompare?: (bike: TBike) => void;
};

export default function BikeCard({ bike, onCompare }: TBikeCardPros) {
  const handleCompare = () => {
    const currentCompareList = getCompareListFromLocalStorage();
    const updatedCompareList = [...currentCompareList, bike];
    setCompareListInLocalStorage(updatedCompareList);
    if (onCompare) {
      onCompare(bike); // Notify parent about the change
    }
  };
  const location = useLocation();

  const totalRatings = bike.reviews?.reduce(
    (sum, rating) => sum + rating.rating,
    0
  );
  const averageRating = totalRatings / bike.reviews.length;

  return (
    <div className='relative py-10 px-6 rounded-xl border bg-white border-stone-300 hover:scale-105 hover:shadow-xl duration-300 justify-self-center flex flex-col'>
      <img
        className='mb-4 lg:h-[220px] xl:h-[250px] object-contain'
        src={bike.image}
        alt=''
      />
      <div className='flex justify-between items-center'>
        <p className='text-xl uppercase font-bold dark:text-stone-100'>
          {bike.brand}
        </p>
        {averageRating > 1 ? <Star rating={averageRating} /> : ''}
      </div>

      <div className='flex justify-between'>
        <p className='text-sm font-medium dark:text-stone-400  text-stone-500'>
          Model : {bike.model}
        </p>
        <p className='text-sm font-semibold dark:text-stone-400  text-stone-500'>
          {bike.isAvailable ? (
            <span className='text-green-500 animate-pulse'>Available</span>
          ) : (
            <span className='text-red-500'>Booked</span>
          )}
        </p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <p className='text-2xl font-bold text-primary-color'>
          ${bike.pricePerHour}{' '}
          <span className='text-lg text-stone-400 font-normal'>/ hour</span>
        </p>

        <Link to={`/bike/${bike._id}`}>
          <button className='px-6 pt-1.5 pb-2 text-sm bg-primary-color text-white hover:text-white duration-200 font-medium rounded-md  dark:border-stone-600  dark:hover:bg-primary-color '>
            View
          </button>
        </Link>
      </div>

      {bike?.tag ? (
        <p className='text-xs pb-1 pt-0.5 absolute top-5  left-5 font-medium bg-[#64d1c431] px-3 rounded-full text-primary-color'>
          {bike?.tag}
        </p>
      ) : (
        ''
      )}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {location.pathname === '/bikes' ? (
              <button
                onClick={handleCompare}
                className='absolute top-3 right-3 bg-primary-color p-1.5 rounded-full'
              >
                <Compare className='size-4' color='white' />
              </button>
            ) : (
              ''
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to compare</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
