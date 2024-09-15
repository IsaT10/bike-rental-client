import { useGetProfileQuery } from '@/redux/features/user/userApi';
import EditProfileModal from '@/components/EditProfileModal';
import GridLoader from 'react-spinners/GridLoader';

export default function UserProfile() {
  const { data, error, isLoading } = useGetProfileQuery(undefined);

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
      <div className='h-[calc(100vh-150px)] flex justify-center items-center text-red-600 font-semibold text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  const { role, name, email, phone, address } = data.data;

  return (
    <div>
      <div className='p-5 md:p-7 lg:p-10 xl:p-14 bg-[#97A253] rounded-2xl lg:rounded-3xl shadow-lg'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white'>
          Welcome , {name}!
        </h1>
        <p className='text-sm md:text-base xl:text-lg font- text-white mt-4 xl:mt-8 lg:w-[80%]  '>
          {role === 'admin'
            ? "Let's manage the platform and ensure everything runs smoothly."
            : 'Update your profile and preferences to make your upcoming rental experience smoother and more personalized. Let’s get you on the road!'}
        </p>
      </div>
      <div className=''>
        <div className='relative p-5 md:p-7  xl:p-14 lg:p-10 rounded-2xl lg:rounded-3xl lg:w-[70%] xl:w-1/2 border border-stone-300 dark:border-stone-700 mt-10 grid xs:grid-cols-2 justify-between gap-y-8 xs:gap-y-14'>
          <div>
            <p className='font-semibold dark:text-stone-200'>Name</p>
            <p className='text-stone-500 dark:text-stone-400'>{name}</p>
          </div>
          <div>
            <p className='font-semibold dark:text-stone-200'>Email</p>
            <p className='text-stone-500 dark:text-stone-400'>{email}</p>
          </div>
          <div>
            <p className='font-semibold dark:text-stone-200'>Phone</p>
            <p className='text-stone-500 dark:text-stone-400'>{phone}</p>
          </div>
          <div>
            <p className='font-semibold dark:text-stone-200'>Address</p>
            <p className='text-stone-500 dark:text-stone-400'>{address}</p>
          </div>

          <EditProfileModal profileData={{ name, email, phone, address }} />
        </div>
      </div>
    </div>
  );
}
