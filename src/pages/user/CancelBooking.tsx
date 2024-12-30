import CancelBookingListItem from '@/components/CancelBookingListItem';
import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';
import GridLoader from 'react-spinners/GridLoader';

export default function CancelBooking() {
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isCanceled', value: 'true' },
  ]);

  console.log(data);
  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center  justify-center'>
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
      <div className='border md:text-base text-sm border-stone-200 font-semibold rounded-b-none text-white   rounded-lg py-3  px-5 md:px-10 flex justify-between items-center mt-10 bg-primary-color dark:bg-stone-800 dark:border-stone-700 dark:text-stone-200'>
        <span className='flex-1  '>Brand</span>
        <span className='flex-1 text-center'>Booking Time</span>
        <span className='flex-1 text-center'></span>
      </div>

      <div className='rounded-lg border border-t-0 rounded-t-none dark:border-stone-700 border-stone-300 bg-white  mb-10'>
        {data?.data?.map((el: TRental, idx: number) => (
          <CancelBookingListItem key={idx} rent={el} />
        ))}
      </div>
    </div>
  );
}
