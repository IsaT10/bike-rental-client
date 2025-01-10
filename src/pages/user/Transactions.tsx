import CommonPagination from '@/components/CommonPagination';
import TransactionListItem from '@/components/TransactionListItem';
import { useGetAllPaymentsQuery } from '@/redux/features/payment/paymentApi';
import { TPayment } from '@/types';
import { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { data, error, isFetching } = useGetAllPaymentsQuery([
    { name: 'page', value: currentPage },
    { name: 'limit', value: limit },
  ]);

  const totalPages = Math.ceil(data?.meta?.total / limit);

  if (isFetching)
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
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );
  return (
    <div className=''>
      {data?.data?.length ? (
        <>
          <div className='border border-stone-200 font-semibold rounded-b-none dark:border-stone-700  text-xs text-white md:text-sm rounded-lg py-3 md:py-4 px-6 md:px-10 flex justify-between items-center mt-2 bg-primary-color dark:bg-stone-800 dark:text-stone-200'>
            <span className='flex-1 md:ml-6'>Transaction Id</span>
            <span className='flex-1  text-center'>Name</span>
            <span className='flex-1  text-center'>Email</span>
            <span className='flex-1 text-center'>Amount</span>
            <span className='flex-[.5] text-center'>Status</span>
          </div>
          <div className='rounded-lg border border-t-0 dark:border-stone-700 rounded-t-none border-stone-300 divide-y bg-white divide-stone-300 dark:divide-stone-950 mb-10'>
            {data?.data?.map((el: TPayment, idx: number) => (
              <TransactionListItem key={idx} transaction={el} />
            ))}
          </div>
        </>
      ) : (
        <h3 className='h-[70vh] flex flex-col items-center justify-center text-lg   dark:text-stone-100 text-stone-600'>
          You have no transaction history yet.
        </h3>
      )}

      {data?.meta?.total && data?.meta?.total > 10 ? (
        <CommonPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ''
      )}
    </div>
  );
}
