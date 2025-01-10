import CommonPagination from '@/components/CommonPagination';
import RentalListItem from '@/components/RentalListItem';
import { useGetAllUserRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function UnpaidRentals() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const limit = 10;
  const {
    data: rentalData,
    error,
    isLoading,
  } = useGetAllUserRentalQuery([
    { name: 'isReturned', value: 'true' },
    { name: 'isPaid', value: 'false' },
    { name: 'sort', value: '-startTime' },
    { name: 'page', value: currentPage },
    { name: 'limit', value: limit },
  ]);

  const totalPages = Math.ceil(rentalData?.meta?.total / limit);

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
      <h2 className='text-xl font-semibold mb-6'>Unpaid Rentals</h2>
      <div className='bg-primary-color text-white items-center text-xs sm:text-sm  px-6 lg:px-10 py-3 font-semibold border-stone-300 rounded-t-lg flex justify-between  dark:bg-stone-800 dark:text-stone-200 dark:border-stone-950 '>
        <p className='flex-[2]'>Brand Name</p>
        <p className='flex-[2]'>Start Time</p>
        <p className='flex-[2]'>Return Time</p>
        <p className='flex-1'>Action</p>
      </div>

      <div className=' flex flex-col border border-stone-300 mb-10 rounded-b-lg'>
        {rentalData?.data?.map((item: TRental) => (
          <RentalListItem key={item._id} item={item} />
        ))}
      </div>

      <CommonPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
