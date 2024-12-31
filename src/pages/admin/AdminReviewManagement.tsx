import CommonPagination from '@/components/CommonPagination';
import ReviewListItem from '@/components/ReviewListItem';
import { useGetAllReviewByAdminQuery } from '@/redux/features/review/reviewApi';
import { TReview } from '@/types';
import { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function AdminReviewManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const { data, error, isLoading } = useGetAllReviewByAdminQuery([
    { name: 'page', value: currentPage },
    { name: 'limit', value: limit },
  ]);

  const totalPages = Math.ceil(data?.meta?.total / limit);

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
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-6'>Rating & review</h2>

      {data?.data?.length ? (
        <div className='md:w-[90%]  xl:w-[80%]'>
          {data?.data?.map((review: TReview) => (
            <ReviewListItem key={review._id} review={review} />
          ))}

          <div className='mt-10'>
            {data?.meta?.total < 5 && currentPage === totalPages ? null : (
              <CommonPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      ) : (
        <h3 className='h-[70vh] text-stone-600 flex flex-col items-center justify-center text-lg font-  dark:text-stone-100'>
          There are no review yet
        </h3>
      )}
    </div>
  );
}
