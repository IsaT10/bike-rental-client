import UserListItem from '@/components/UserListItem';
import { useGetAllUserQuery } from '@/redux/features/user/userApi';
import { TUserProfile } from '@/types';
import GridLoader from 'react-spinners/GridLoader';

export default function AdminUserManagement() {
  const { data: userData, error, isLoading } = useGetAllUserQuery(undefined);
  console.log(userData);

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
  return (
    <div className=''>
      <div className='border border-stone-200 font-semibold rounded-b-none dark:border-stone-700 text-stone-800 text-xs md:text-sm rounded-lg py-3 md:py-4 px-6 md:px-10 flex justify-between items-center mt-2 bg-stone-100 dark:bg-stone-800 dark:text-stone-200'>
        <span className='flex-1 md:ml-6'>Name</span>
        <span className='flex-1  text-center'>Email</span>
        <span className='flex-1 text-center'>Role</span>
        <span className='flex-[.5] text-center'>Actions</span>
      </div>

      <div className='rounded-lg border border-t-0 dark:border-stone-700 rounded-t-none border-stone-200 divide-y divide-stone-200 dark:divide-stone-950 mb-10'>
        {userData?.data?.map((el: TUserProfile, idx: number) => (
          <UserListItem key={idx} user={el} />
        ))}
      </div>
    </div>
  );
}
