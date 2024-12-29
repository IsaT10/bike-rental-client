/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDeleteReviewMutation } from '@/redux/features/review/reviewApi';
import { TReview } from '@/types';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash } from 'lucide-react';
import Star from './Star';

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
    <div className=''>
      <div className='flex gap-3 bg-white p-6 rounded-xl md:w-[90%]  xl:w-[80%]'>
        <img src={review.bikeId.image} className='size-16 rounded-lg' alt='' />
        <div>
          <p className='flex-1 font-semibold mb-2  sm:text-lg'>
            {review?.bikeId?.brand}{' '}
            <span className='ml-1'>{review?.bikeId?.model}</span>
          </p>
          <Star rating={review.rating} />
          <p className='text-sm mt-2 text-stone-700'>{review.review}</p>
        </div>
      </div>

      <div className='flex-[.5] text-center'>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button>
              <Trash />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteReview}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
