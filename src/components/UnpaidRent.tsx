import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { TRental } from '@/types';
import moment from 'moment';

export default function UnpaidRent({
  item,
  isPaid = false,
}: {
  item: TRental;
  isPaid?: boolean;
}) {
  const { data, isFetching } = useSingleBikeQuery(item.bikeId);

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  return (
    <div className='bg-stone-50 hover:bg-stone-100 items-center px-6 py-5 text-stone-600 rounded-b-lg flex justify-between'>
      <p className='flex-[2]'>{data?.data?.name}</p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>
      <p className='flex-[2]'>{formateDate(item.returnTime)}</p>
      <p className='flex-1'>$ {item.totalCost}</p>

      {!isPaid && (
        <button className='flex-1 justify-self-end bg-secondary-color text-white  text-sm font-semibold py-2 rounded-lg'>
          Pay
        </button>
      )}
    </div>
  );
}
