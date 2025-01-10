import BookedRent from '@/components/BookedRent';
import CommonPagination from '@/components/CommonPagination';
import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';
import { TRental } from '@/types';
import { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function UserBookedRentals() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isReturned', value: 'false' },
    { name: 'sort', value: '-startTime' },
    { name: 'page', value: currentPage },
    { name: 'limit', value: limit },
  ]);

  const totalPages = Math.ceil(data?.meta?.total / limit);
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
      <h2 className='text-xl font-semibold mb-6'>Booked Rentals</h2>
      {data?.data?.length ? (
        <>
          <div className='bg-primary-color text-white dark:bg-stone-800 items-center  text-sm px-4 lg:px-6 py-3 font-semibold dark:text-stone-200 dark:border-stone-950  flex justify-between border-b border-b-stone-200 rounded-t-lg '>
            <p className='flex-1 ml-10'>Brand Name</p>
            <p className='flex-1'>Start Time</p>
            <p className='flex-1 text-center'>Advanced Payment</p>
            <p className='flex-1 text-center'>Action</p>
          </div>
          <div className='rounded-lg bg-white border border-stone-300 border-t-0 rounded-t-none dark:border-stone-700  divide-y dark:divide-stone-950 divide-stone-300 mb-10'>
            {data?.data?.map((item: TRental) => (
              <BookedRent key={item._id} item={item} />
            ))}
          </div>

          {data?.meta?.total > 10 ? (
            <CommonPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        <h3 className='h-[70vh] text-stone-600 flex flex-col items-center justify-center text-lg  dark:text-stone-100'>
          There are no cancellations yet
        </h3>
      )}
    </div>
  );
}
