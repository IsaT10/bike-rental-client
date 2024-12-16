import { MonthlyActivity } from '@/components/MonthlyActivity';
import { MonthlyEarning } from '@/components/MonthlyEarning';
import RentalListItem from '@/components/RentalListItem';
import { useGetAllUserRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';
import GridLoader from 'react-spinners/GridLoader';

export default function AdminOverview() {
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
    <div className='grid grid-cols-12 gap-6 '>
      <div className='col-span-4'>
        <div className='bg-[#64d1c454] h-full flex flex-col items-center justify-center p-5 rounded-lg'>
          <p className='text-[#2A9D90] font-bold text-4xl  text-center'>
            <span className=''>Welcome Back !</span>{' '}
            <span className='block mt-6 '>Rakib</span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 flex-1 col-span-8'>
        <div className='p-5 rounded-lg bg-white '>
          <p className='font-semibold text-stone-600 mb-2'>Total Bikes</p>
          <span className='text-2xl font-bold'>15</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Active Rentals</p>
          <span className='text-2xl font-bold'>3</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Revenue</p>
          <span className='text-2xl font-bold'>$2500</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Today's Revenue</p>
          <span className='text-2xl font-bold'>$2500</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Users</p>
          <span className='text-2xl font-bold'>22</span>
        </div>

        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Coupons</p>
          <span className='text-2xl font-bold'>4</span>
        </div>
      </div>

      <div className='col-span-8'>
        <MonthlyActivity />
      </div>

      <div className='bg-white p-6 h-min col-span-4'>
        <p className='text-xl font-semibold'>Monthly Earning</p>
        <p className='text-stone-700 pt-4'>This Month</p>
        <div className='flex items-center '>
          <div className='w-[150px]'>
            <p>$20,000</p>
            <p>asdasd das dsad sadsa dasdas dasdas</p>
          </div>
          <div>
            <MonthlyEarning />
          </div>
        </div>
      </div>

      <div className='col-span-12'>
        <h2 className='text-xl font-semibold mb-6 mt-10'>Latest Rents</h2>
        <div className='bg-primary-color items-center text-xs sm:text-sm lg:text-base px-6 lg:px-10 py-3 font-semibold text-white rounded-t-lg flex justify-between border-b border-b-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-950'>
          <p className='flex-[2]'>Brand Name</p>
          <p className='flex-[2]'>Start Time</p>
          <p className='flex-[2]'>Return Time</p>
          <p className='flex-1'>Action</p>
        </div>
        <div className=' flex flex-col '>
          {rentalData?.data?.slice(0, 5).map((item: TRental) => (
            <RentalListItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
