import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BikeForm } from './BikeForm';
import { Button } from './ui/button';
import React from 'react';

export default function AddBikeModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Add New Bike</Button>
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
