import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { Button } from './ui/button';
import CouponForm from './CouponForm';

export default function AddCouponModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Add New Coupon</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Add Coupon</DialogTitle>
          <DialogDescription>
            Add coupon here. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <CouponForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
