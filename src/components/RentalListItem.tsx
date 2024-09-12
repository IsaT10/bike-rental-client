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
    <div className='bg-stone-50 duration-150 border-b border-b-stone-200 hover:bg-stone-100 items-center px-6 py-8 text-stone-600  flex justify-between'>
      <p className='flex-[2]'>{data?.data?.name}</p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>

      <p className='flex-[2]'>
        {item?.returnTime ? formateDate(item?.returnTime) : ''}
      </p>

      {!item.isReturned ? (
        <button
          onClick={handleCalculate}
          className='flex-1 justify-self-end bg-secondary-color text-white  text-sm font-semibold py-2 rounded-lg'
        >
          Calculate
        </button>
      ) : (
        <div className='flex-1'></div>
      )}
    </div>
  );
}
