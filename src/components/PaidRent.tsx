import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { TRental } from '@/types';
import moment from 'moment';
import AddReviewModal from './AddReviewModal';

export default function PaidRent({ item }: { item: TRental }) {
  const { data } = useSingleBikeQuery(item.bikeId);
  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  return (
    <div className='bg-white dark:bg-stone-700 text-sm dark:text-stone-100 dark:border-stone-950   hover:bg-stone-50 items-center px-6  py-5  flex justify-between'>
      <p className='flex-1'>
        {data?.data?.brand} <span className='mx-1 '></span> {data?.data?.model}
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
      {!item.isReviewed ? (
        <AddReviewModal bikeId={item.bikeId} rentId={item._id} />
      ) : (
        <p className='flex-1'>Review Submitted</p>
      )}
    </div>
  );
}
