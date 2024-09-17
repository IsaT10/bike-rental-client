import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BikeForm } from './BikeForm';
import React from 'react';

export default function AddBikeModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='px-8 disabled:cursor-not-allowed disabled:opacity-55  duration-200 py-2.5 font-medium rounded-md  border border-stone-300 dark:border-stone-700 dark:text-stone-200 md:text-base text-sm whitespace-nowrap'>
          Add New Bike
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>Add Bike</DialogTitle>
          <DialogDescription>
            Add your bike here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <BikeForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
