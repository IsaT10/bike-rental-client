import ReviewListItem from '@/components/ReviewListItem';
import { useGetAllReviewQuery } from '@/redux/features/review/reviewApi';
import { TReview } from '@/types';
import GridLoader from 'react-spinners/GridLoader';

export default function MyReviews() {
  const { data, error, isLoading } = useGetAllReviewQuery(undefined);
  console.log(data);

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
      {' '}
      <div className='border border-stone-200 font-semibold rounded-b-none dark:border-stone-700  text-xs text-white md:text-sm rounded-lg py-3 md:py-4 px-6 md:px-10 flex justify-between items-center mt-2 bg-primary-color dark:bg-stone-800 dark:text-stone-200'>
        <span className='flex-1 md:ml-6'>Review Message</span>
        <span className='flex-[.5]  text-center'>Rating</span>
        <span className='flex-[.5] text-center'>Actions</span>
      </div>
      <div className='rounded-lg border border-t-0 dark:border-stone-700 rounded-t-none border-stone-300 divide-y bg-white divide-stone-300 dark:divide-stone-950 mb-10'>
        {data?.data?.map((review: TReview) => (
          <ReviewListItem key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
}
