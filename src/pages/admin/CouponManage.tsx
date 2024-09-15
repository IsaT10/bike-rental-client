import AddCouponModal from '@/components/AddCouponModal';
import CouponItem from '@/components/CouponItem';
import { useGetAllCouponsQuery } from '@/redux/features/coupon/couponApi';
import GridLoader from 'react-spinners/GridLoader';

export default function CouponManage() {
  const {
    data: couponData,
    error,
    isLoading,
  } = useGetAllCouponsQuery(undefined);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <GridLoader
          color='#97A253'
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );

  if (error)
    return (
      <div className='h-screen flex justify-center items-center text-red-600 font-semibold text-center sm:text-xl md:text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  console.log(couponData?.data);
  return (
    <div>
      <AddCouponModal />
      <div className='border border-stone-200 text-xs sm:text-sm font-semibold rounded-b-none text-stone-800 rounded-lg py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center mt-10 bg-stone-100 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700'>
        <span className='flex-1 lg:ml-6'>Coupon Code</span>
        <span className='flex-1  text-center'>Discount</span>
        <span className='flex-1 text-center'>Status</span>
        <span className='flex-1 text-center'>Actions</span>
      </div>

      <div className='rounded-lg border border-t-0 rounded-t-none dark:border-stone-700 border-stone-200 divide-y dark:divide-stone-950 divide-stone-200 mb-10'>
        {couponData?.data?.map((item) => (
          <CouponItem key={item._id} coupon={item} />
        ))}
      </div>
    </div>
  );
}
