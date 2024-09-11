import { Spinner } from '@/components/shared/Icons';
import UserListItem from '@/components/UserListItem';
import { useGetAllUserQuery } from '@/redux/features/user/userApi';
import { TUserProfile } from '@/types';

export default function AdminUserManagement() {
  const { data: userData, error, isLoading } = useGetAllUserQuery(undefined);
  console.log(userData);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-150px)] flex justify-center items-center'>
        <Spinner className='h-10 w-10' />
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
      <div className='border border-stone-200 font-semibold rounded-b-none text-stone-800 text-sm rounded-lg py-4 px-6 md:px-10 flex justify-between items-center mt-10 bg-stone-100'>
        <span className='flex-1 md:ml-6'>Name</span>
        <span className='flex-1  text-center'>Email</span>
        <span className='flex-1 text-center'>Role</span>
        <span className='flex-[.5] text-center'>Actions</span>
      </div>

      <div className='rounded-lg border border-t-0 rounded-t-none border-stone-200 divide-y divide-stone-200 mb-10'>
        {userData?.data?.map((el: TUserProfile, idx: number) => (
          <UserListItem key={idx} user={el} />
        ))}
      </div>
    </div>
  );
}
