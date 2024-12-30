import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { useCancelRentMutation } from '@/redux/features/rental/rentalApi';
import { TErrorResponse, TRental } from '@/types';
import moment from 'moment';
import { toast } from 'sonner';

export default function BookedRent({
  item,
}: {
  item: TRental;
  isPaid?: boolean;
  finalDiscount?: number;
}) {
  const { data } = useSingleBikeQuery(item.bikeId);
  const [cancelRent] = useCancelRentMutation();

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  const handleCancelRent = async () => {
    const sonnerId = toast.loading('Cancling...');

    try {
      const res = await cancelRent(item._id).unwrap();
      toast.success(res?.message, { id: sonnerId });
    } catch (error) {
      const typedError = error as TErrorResponse;

      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    }
  };

  return (
    <div className='bg-white dark:bg-stone-700 text-sm dark:text-stone-100 dark:border-stone-950  hover:bg-stone-100 items-center px-6 py-5   flex justify-between'>
      <p className='flex-1'>
        {data?.data?.brand} <span className='mx-1 '></span> {data?.data?.model}
      </p>
      <p className='flex-1'>{formateDate(item.startTime)}</p>

      {/* <p className='flex-1'>$ {`${item.totalCost - item.advancedPayment}`}</p> */}
      <p className='flex-1 text-center'>$ {`${item.advancedPayment}`}</p>

      <div className='flex-1 text-center'>
        <button
          onClick={handleCancelRent}
          className='px-7 py-2.5 justify-self-end bg-red-600 text-white  text-sm font-medium  rounded-lg'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
