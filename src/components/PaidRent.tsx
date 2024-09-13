import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { TRental } from '@/types';
import moment from 'moment';

export default function PaidRent({
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
    <div>
      <div className='bg-stone-50 lg:text-base text-xs sm:text-sm hover:bg-stone-100 items-center px-4 lg:px-6 py-5 text-stone-600 rounded-b-lg flex gap-4 justify-between'>
        <p className='flex-1'>{data?.data?.brand}</p>
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

        {!isPaid && (
          <button
            // to='/payment'

            onClick={handelPayButton}
            className='flex-1 text-center justify-self-end bg-secondary-color text-white  text-sm font-semibold py-2 rounded-lg'
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
}
