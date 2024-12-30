import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { ReviewForm } from './ReviewForm';
import { TReview } from '@/types';

export default function EditReviewModal({ item }: { item: TReview }) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-stone-100 transition-colors focus:bg-accent focus:text-accent-foreground cursor-pointer data-[disabled]:opacity-50 w-full'>
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <ReviewForm isUpdate={true} review={item} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
