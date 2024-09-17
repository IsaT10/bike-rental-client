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
  return (
    <div className='relative justify-self-center flex flex-col  items-center'>
      <img className='mb-4 h-[250px]' src={bike.image} alt='' />
      <p className='text-2xl font-semibold dark:text-stone-100'>{bike.brand}</p>
      <p className='text-lg font-semibold text-primary-color mb-4'>
        $ {bike.pricePerHour} / Hours
      </p>
      <Link to={`/bike/${bike._id}`}>
        <button className='px-8 py-2.5 font-medium rounded-[20px] dark:text-stone-200 dark:border-stone-600 border dark:hover:bg-primary-color duration-200 border-stone-900'>
          Details
        </button>
      </Link>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {location.pathname === '/bikes' ? (
              <button
                onClick={handleCompare}
                className='absolute top-0 right-0 bg-primary-color p-1.5 rounded-full'
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
