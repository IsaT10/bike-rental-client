import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { ReviewForm } from './ReviewForm';

export default function AddReviewModal({
  bikeId,
  rentId,
}: {
  bikeId: string;
  rentId: string;
}) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='flex-1 text-center justify-self-end  text-primary-color border border-primary-color  text-sm font-medium py-2.5 rounded-lg'>
          Review
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <ReviewForm setOpen={setOpen} bikeId={bikeId} rentId={rentId} />
      </DialogContent>
    </Dialog>
  );
}
