import RentalListItem from '@/components/RentalListItem';
import { useGetAllUserRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';

import GridLoader from 'react-spinners/GridLoader';

export default function ReturnAndBilling() {
  const {
    data: rentalData,
    error,
    isLoading,
  } = useGetAllUserRentalQuery([
    // { name: 'isReturned', value: 'false' },
    { name: 'sort', value: '-startTime' },
  ]);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <GridLoader
          color='#2A9D90'
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );

  if (error)
    return (
      <div className='h-screen flex justify-center items-center text-red-600 font-semibold text-center sm:text-xl md:text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  return (
    <>
      <div className='bg-primary-color text-white items-center text-xs sm:text-sm lg:text-base px-6 lg:px-10 py-3 font-semibold  rounded-t-lg flex justify-between border-b border-b-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-950'>
        <p className='flex-[2]'>Brand Name</p>
        <p className='flex-[2]'>Start Time</p>
        <p className='flex-[2]'>Return Time</p>
        <p className='flex-1'>Action</p>
      </div>

      <div className=' flex flex-col '>
        {rentalData?.data?.map((item: TRental) => (
          <RentalListItem key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
