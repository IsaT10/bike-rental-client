import { useUpdateCouponMutation } from '@/redux/features/coupon/couponApi';
import { TErrorResponse } from '@/types';
import { toast } from 'sonner';

export default function CouponItem({ coupon }) {
  const [updateStatus] = useUpdateCouponMutation();

  const handleStatus = async () => {
    const sonnerId = toast.loading('Status changing...');
    try {
      const res = await updateStatus({
        id: coupon._id,
        data: { isActive: !coupon.isActive },
      }).unwrap();

      toast.success(res?.message, { id: sonnerId });
    } catch (error) {
      const typedError = error as TErrorResponse;

      console.log({ typedError });
      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    }
  };
  return (
    <div className='py-5 px-4 dark:bg-stone-700 dark:text-stone-100 md:px-6 lg:px-10 text-xs sm:text-sm flex gap-4 justify-between items-center'>
      <span className='flex-1 lg:ml-6'>{coupon.couponCode}</span>
      <span className='flex-1 text-center'>{coupon.discount}</span>
      <span className='flex-1 font-semibold  text-center'>
        {coupon.isActive ? (
          <span className='text-green-500 '>Active</span>
        ) : (
          <span className='text-red-500 '>In-active</span>
        )}
      </span>

      <span className='flex-1 text-center'>
        <button
          onClick={handleStatus}
          className='flex-1 px-8 text-center justify-self-end bg-primary-color text-white  text-sm font-semibold py-2 rounded-lg'
        >
          Change Status
        </button>
      </span>
    </div>
  );
}
