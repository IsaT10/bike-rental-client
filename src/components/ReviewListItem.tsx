/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDeleteReviewMutation } from '@/redux/features/review/reviewApi';
import { TReview } from '@/types';
import { toast } from 'sonner';
import Star from './Star';
import ThreeDotButton from './ThreeDotButton';
import EditReviewModal from './EditReviewModal';

export default function ReviewListItem({ review }: { review: TReview }) {
  const [deleteReview] = useDeleteReviewMutation();
  const handleDeleteReview = async () => {
    const sonnerId = toast.loading('Deleting...');
    try {
      await deleteReview(review._id);
      toast.success('Review deleted successfully', { id: sonnerId });
    } catch (error) {
      toast.error('Something went wrong. Try again later!', { id: sonnerId });
    }
  };

  return (
    <div className='flex gap-3 bg-white p-6 rounded-xl  mb-5'>
      <img src={review.bikeId.image} className='size-16 rounded-lg' alt='' />
      <div>
        <p className='flex-1 font-semibold mb-2  sm:text-lg'>
          {review?.bikeId?.brand}{' '}
          <span className='ml-1'>{review?.bikeId?.model}</span>
        </p>
        <Star rating={review.rating} />
        <p className='text-sm mt-2 text-stone-700'>{review.review}</p>
      </div>
      <div className='ml-auto'>
        <ThreeDotButton
          handleDelete={handleDeleteReview}
          itemType='review'
          EditModal={EditReviewModal}
          item={review}
        />
      </div>
    </div>
  );
}
