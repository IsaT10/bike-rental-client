/* eslint-disable @typescript-eslint/no-unused-vars */
import { TRental } from '@/types';
import moment from 'moment';

export default function CancelBookingListItem({ rent }: { rent: TRental }) {
  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  return (
    <div className='text-sm py-5 hover:bg-stone-50 px-5 md:px-10 dark:bg-stone-700 dark:text-stone-200 border-b border-b-stone-300 dark:border-stone-950 flex justify-between items-center'>
      <span className='flex-1 '>
        {rent.bikeId.brand}
        <span className='mx-1 '></span> {rent.bikeId.model}
      </span>
      <p className='flex-1 text-center'>{formateDate(rent.startTime)}</p>
      <span className='flex-1 font-semibold text-stone-600 dark:text-stone-200 text-center'>
        Cancelled
      </span>
    </div>
  );
}
