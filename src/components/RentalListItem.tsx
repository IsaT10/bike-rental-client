import moment from 'moment';
import { useReturnBikeMutation } from '@/redux/features/rental/rentalApi';
import { toast } from 'sonner';
import { TErrorResponse, TRental } from '@/types';

export default function RentalListItem({ item }: { item: TRental }) {
  const [calculateRent] = useReturnBikeMutation();

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  const handleCalculate = async () => {
    const sonnerId = toast.loading('Calculating...');
    try {
      const res = await calculateRent(item._id).unwrap();

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
    <div className='bg-white duration-150 text-xs sm:text-sm  border-b   border-stone-300 dark:border-stone-950 hover:bg-stone-50 items-center px-6 lg:px-10 py-5 gap-4   flex justify-between dark:bg-stone-700 dark:text-stone-200'>
      <p className='flex-[2] py-2'>
        {' '}
        {item.bikeId.brand} <span className='mx-1 '></span> {item.bikeId.model}
      </p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>

      <p className='flex-[2]'>
        {item?.returnTime ? formateDate(item?.returnTime) : ''}
      </p>

      {!item.isReturned ? (
        <button
          onClick={handleCalculate}
          className='px-4 md:px-8 py-2.5 text-xs sm:text-sm bg-primary-color text-white lg:mr-6 rounded-lg   font-medium duration-200 '
        >
          Calculate
        </button>
      ) : (
        <div className='flex-1'></div>
      )}
    </div>
  );
}
