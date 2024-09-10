import { TBike } from '@/types';
import ThreeDotButton from './ThreeDotButton';
import { useDeleteBikeMutation } from '@/redux/features/bikes/bikesApi';
import { toast } from 'sonner';

export default function BikeListItem({ bike }: { bike: TBike }) {
  const [deleteBike] = useDeleteBikeMutation();
  const handleDeleteBike = async () => {
    const sonnerId = toast.loading('Deleting...');
    try {
      await deleteBike(bike._id);
      toast.success('Bike deleted successfully', { id: sonnerId });
    } catch (error) {
      console.error('Error processing bike:', error);
      toast.error('Something is very wrong. Try again later!', {
        id: sonnerId,
      });
    }
  };
  return (
    <div className='text-sm py-5 px-6 md:px-10 flex justify-between items-center'>
      <span className='flex-1 md:ml-6'>{bike.name}</span>
      <span className='flex-1  text-center'>{bike.brand}</span>
      <span className='flex-1 font-semibold text-stone-600 text-center'>
        {bike.isAvailable ? 'Available' : 'Unavailable'}
      </span>
      <span className='flex-1 font-semibold text-stone-600 text-center'>
        $ {bike.pricePerHour}
      </span>
      <span className='flex-[.5] text-center'>
        <ThreeDotButton handleDeleteBike={handleDeleteBike} bike={bike} />
      </span>
    </div>
  );
}
