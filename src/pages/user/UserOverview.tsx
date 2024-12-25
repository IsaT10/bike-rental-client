import { useGetProfileQuery } from '@/redux/features/user/userApi';

export default function UserOverview() {
  const { data } = useGetProfileQuery(undefined);
  const { name } = data?.data || {};
  return (
    <div className='grid grid-cols-12 gap-6 '>
      <div className='col-span-4'>
        <div className='bg-[#64d1c454] h-full flex flex-col items-center justify-center p-5 rounded-lg'>
          <p className='text-[#2A9D90] font-bold text-4xl  text-center'>
            <span className=''>Welcome Back !</span>{' '}
            <span className='block mt-6 '>{name}</span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 flex-1 col-span-8'>
        <div className='p-5 rounded-lg bg-white '>
          <p className='font-semibold text-stone-600 mb-2'>
            Total Rental (Hours)
          </p>
          <span className='text-2xl font-bold'>80</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>
            Longest Ride (Hours)
          </p>
          <span className='text-2xl font-bold'>9</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>
            Average Duration (Hours)
          </p>
          <span className='text-2xl font-bold'>4.5</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Total Spent</p>
          <span className='text-2xl font-bold'>$2790</span>
        </div>
        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Total Bike Rent</p>
          <span className='text-2xl font-bold'>4</span>
        </div>

        <div className='p-5 rounded-lg bg-white '>
          <p className='text-stone-600 mb-2 font-semibold'>Coupons</p>
          <span className='text-2xl font-bold'>4</span>
        </div>
      </div>
    </div>
  );
}
