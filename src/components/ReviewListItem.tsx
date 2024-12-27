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
    <div className='text-xs hover:bg-stone-50 md:text-sm py-5 px-6 md:px-10 dark:text-stone-100 dark:bg-stone-700  flex gap-4 justify-between items-center'>
      <span className='flex-1 md:ml-6'>{review.review}</span>
      <span className='flex-[.5] text-center'>{review.rating}</span>

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
