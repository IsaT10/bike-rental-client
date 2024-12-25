import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';
import GridLoader from 'react-spinners/GridLoader';
import PaidRent from './PaidRent';

export default function UserLatestRentals() {
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isPaid', value: true },
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
    <div>
      <h2 className='text-xl font-semibold mb-6 mt-10'>Latest Rents</h2>
      <>
        <div className='bg-primary-color text-white dark:bg-stone-800 items-center lg:text-base text-sm px-4 lg:px-6 py-2.5 font-semibold dark:text-stone-200 dark:border-stone-950  flex justify-between border-b border-b-stone-200 rounded-t-lg'>
          <p className='flex-1'>Brand Name</p>
          <p className='flex-[2]'>Start Time</p>
          <p className='flex-[2]'>Return Time</p>
          <p className='flex-1'>Total Cost</p>
          <p className='flex-1'>Return Amount</p>
        </div>

        <div className='rounded-lg bg-white border border-stone-300 border-t-0 rounded-t-none dark:border-stone-700  divide-y dark:divide-stone-950 divide-stone-300 mb-10'>
          {data?.data?.map((item: TRental) => (
            <PaidRent key={item._id} item={item} isPaid={true} />
          ))}
        </div>
      </>
    </div>
  );
}
