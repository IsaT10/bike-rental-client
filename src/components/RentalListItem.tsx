import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import moment from 'moment';
import { useReturnBikeMutation } from '@/redux/features/rental/rentalApi';
import { toast } from 'sonner';

export default function RentalListItem({ item }) {
  const { data } = useSingleBikeQuery(item.bikeId);
  const [calculateRent] = useReturnBikeMutation();

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  const handleCalculate = async () => {
    const sonnerId = toast.loading('Calculating...');
    try {
      await calculateRent(item._id).unwrap();

      toast.success('Bike returned successfully.', { id: sonnerId });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: sonnerId });
    }
  };

  return (
    <div className='bg-stone-50 duration-150 text-xs sm:text-sm lg:text-base border-b border-b-stone-200 hover:bg-stone-100 items-center px-6 lg:px-10 py-8 gap-4 text-stone-600  flex justify-between'>
      <p className='flex-[2]'>{data?.data?.brand}</p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>

      <p className='flex-[2]'>
        {item?.returnTime ? formateDate(item?.returnTime) : ''}
      </p>

      {!item.isReturned ? (
        <button
          onClick={handleCalculate}
          className='px-4 md:px-8 py-2 text-xs sm:text-sm bg-primary-color text-white lg:mr-6 rounded-[10px] md:rounded-[14px]   font-semibold duration-200 '
        >
          Calculate
        </button>
      ) : (
        <div className='flex-1'></div>
      )}
    </div>
  );
}
