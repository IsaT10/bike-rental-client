import ReviewListItem from '@/components/ReviewListItem';
import { useGetAllReviewQuery } from '@/redux/features/review/reviewApi';
import { TReview } from '@/types';
import GridLoader from 'react-spinners/GridLoader';

export default function MyReviews() {
  const { data, error, isLoading } = useGetAllReviewQuery(undefined);

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
      {data?.data?.map((review: TReview) => (
        <ReviewListItem key={review._id} review={review} />
      ))}
    </div>
  );
}
