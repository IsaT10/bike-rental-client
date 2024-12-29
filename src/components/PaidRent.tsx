import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { TRental } from '@/types';
import moment from 'moment';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import { ReviewForm } from './ReviewForm';

export default function PaidRent({ item }: { item: TRental }) {
  const { data } = useSingleBikeQuery(item.bikeId);
  const [open, setOpen] = React.useState<boolean>(false);
  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  return (
    <div className='bg-white dark:bg-stone-700 text-sm dark:text-stone-100 dark:border-stone-950   hover:bg-stone-50 items-center px-6  py-5  flex justify-between'>
      <p className='flex-1'>
        {data?.data?.brand}{' '}
        <span className='px-[1px] mx-1 py-1 bg-stone-400'></span>{' '}
        {data?.data?.model}
      </p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>
      <p className='flex-[2]'>{formateDate(item.returnTime)}</p>

      {item.totalCost < 100 ? (
        <p className='flex-1'>$ {`${item.totalCost}`}</p>
      ) : (
        <p className='flex-1'>
          $ {`${(item.totalCost - item.advancedPayment).toFixed(2)}`}
        </p>
      )}
      {item.totalCost < 100 ? (
        <p className='flex-1'>
          ${' '}
          {`${
            item.totalCost < 100
              ? (item.advancedPayment - item.totalCost).toFixed(2)
              : ''
          }`}
        </p>
      ) : (
        <div className='flex-1'>N/A</div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className='flex-1 text-center justify-self-end  text-primary-color border border-primary-color  text-sm font-medium py-2.5 rounded-lg'>
            Give Review
          </button>
        </DialogTrigger>
        <DialogContent className='md:max-w-[650px]'>
          <ReviewForm setOpen={setOpen} bikeId={item.bikeId} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
