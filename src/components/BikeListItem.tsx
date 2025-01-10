/* eslint-disable @typescript-eslint/no-unused-vars */
import { TBike } from '@/types';
import ThreeDotButton from './ThreeDotButton';
import { useDeleteBikeMutation } from '@/redux/features/bikes/bikesApi';
import { toast } from 'sonner';
import EditBikeModal from './EditBikeModal';

export default function BikeListItem({ bike }: { bike: TBike }) {
  const [deleteBike] = useDeleteBikeMutation();

  // const navigate = useNavigate();

  // const handleEditBike = () => {
  //   navigate('/admin/dashboard/add-bike', { state: { bike } }); // Pass bike data as state
  // };
  const handleDeleteBike = async () => {
    const sonnerId = toast.loading('Deleting...');
    try {
      await deleteBike(bike._id);
      toast.success('Bike deleted successfully', { id: sonnerId });
    } catch (error) {
      toast.error('Something went wrong. Try again later!', { id: sonnerId });
    }
  };

  return (
    <div className='text-sm py-5 hover:bg-stone-50 px-5 md:px-10 dark:bg-stone-700 dark:text-stone-200 border-b border-b-stone-300 dark:border-stone-950 flex justify-between items-center'>
      <span className='flex-1 '>{bike.brand}</span>
      <span className='flex-1 font-semibold text-stone-600 dark:text-stone-200 text-center'>
        {bike.isAvailable ? 'Available' : 'Unavailable'}
      </span>
      <span className='flex-1 font-semibold text-stone-600 dark:text-stone-200 text-center'>
        $ {bike.pricePerHour}
      </span>
      <span className='flex-1 text-center'>
        {/* <button onClick={handleEditBike}>Edit</button> */}

        <ThreeDotButton
          handleDelete={handleDeleteBike}
          itemType='bike'
          EditModal={EditBikeModal}
          item={bike}
        />
      </span>
    </div>
  );
}
