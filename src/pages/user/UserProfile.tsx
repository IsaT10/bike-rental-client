import React from 'react';
import { useGetProfileQuery } from '@/redux/features/user/userApi';
import EditProfileModal from '@/components/EditProfileModal';

export default function UserProfile() {
  const [open, setOpen] = React.useState<boolean>(false);

  const { data, isLoading } = useGetProfileQuery(undefined);

  if (isLoading) return <p>Loading...</p>;

  const { role, name, email, phone, address } = data.data;

  return (
    <div>
      <div className='p-10 bg-[#97A253] rounded-3xl shadow-lg'>
        <h1 className='text-5xl font-bold text-white'>Welcome , {name}!</h1>
        <p className='text-lg font- text-white mt-8 w-2/3 '>
          {role === 'admin'
            ? "Let's manage the platform and ensure everything runs smoothly."
            : ' Ready for your next ride? Update your profile and preferences to make your upcoming rental experience smoother and more personalized. Let’s get you on the road!'}
        </p>
      </div>
      <div className=''>
        <div className='relative p-10 rounded-3xl w-1/2 border border-stone-300 mt-10 grid grid-cols-2 justify-between gap-y-14'>
          <div>
            <p className='font-semibold'>Name</p>
            <p className='text-stone-500'>{name}</p>
          </div>
          <div>
            <p className='font-semibold'>Email</p>
            <p className='text-stone-500'>{email}</p>
          </div>
          <div>
            <p className='font-semibold'>Phone</p>
            <p className='text-stone-500'>{phone}</p>
          </div>
          <div>
            <p className='font-semibold'>Address</p>
            <p className='text-stone-500'>{address}</p>
          </div>

          <EditProfileModal profileData={{ name, email, phone, address }} />
        </div>
      </div>
    </div>
  );
}
