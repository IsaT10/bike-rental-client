import UserLatestRentals from '@/components/UserLatestRentals';
import { useGetProfileQuery } from '@/redux/features/user/userApi';

export default function UserOverview() {
  const { data } = useGetProfileQuery(undefined);
  const { name } = data?.data || {};

  // const { data, error, isLoading } = useGetAllRentalQuery([
  //   { name: 'isPaid', value: true },
  // ]);
  return (
    <div className='grid grid-cols-12 gap-6 '>
      <div className='col-span-12'>
        <div className='bg-[#64d1c454] h-full flex  items-center justify-between py-14 px-20 rounded-lg'>
          <p className='text-[#2A9D90] font-bold text-4xl  text-center'>
            <span className=''>Welcome Back !</span>{' '}
            <span className='block mt-6 '>{name}</span>
          </p>

          <button className='relative text-lg p-16 rounded-full bg-white text-black font-semibold'>
            <span className='absolute inset-0 flex items-center justify-center'>
              Book Now
            </span>
          </button>
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

      <div className='col-span-4 p-5 rounded-lg bg-white'>
        <p className='text-center font-semibold text-xl'>Top Picks for You</p>
        <img
          className='w-[60%] mx-auto mt-3'
          src='https://i.ibb.co.com/G9f7DVN/bike-4.png'
          alt=''
        />
      </div>

      <div className='col-span-12'>
        <UserLatestRentals />
      </div>
    </div>
  );
}
