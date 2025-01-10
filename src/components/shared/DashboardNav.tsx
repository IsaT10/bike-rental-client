import avatar from '@/assets/images/avatar.png';
import { logout } from '@/redux/features/auth/authSlice';
import { useGetProfileQuery } from '@/redux/features/user/userApi';
import { useAppDispatch } from '@/redux/hooks';
import { LogOutIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Notification } from './Icons';

export default function DashboardNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = useGetProfileQuery(undefined);
  const { image } = data?.data || {};
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.success('Logged out.');
  };
  return (
    <div className='bg-stone-200 sticky top-0 py-2.5 pr-4 text-black'>
      <div className='flex relative  gap-5 items-center justify-end '>
        <button onClick={() => setShowNotification(!showNotification)}>
          <Notification />
        </button>

        {showNotification ? (
          <div className='bg-white  border-stone-400 rounded-lg z-50 w-[320px] border divide-y divide-stone-300 h-[60vh] justify-center items-center flex flex-col absolute right-3 top-[60px] text-stone-600 text-sm'>
            There are not notification yet.
          </div>
        ) : (
          ''
        )}
        <>
          <img
            onClick={() => setShowDropdown(!showDropdown)}
            src={image || avatar}
            className='size-10 border-4 cursor-pointer border-primary-color rounded-full'
            alt=''
          />
          {showDropdown ? (
            <div className='bg-white rounded-lg z-50 w-[170px] border divide-y divide-stone-300 border-stone-300  flex flex-col absolute right-3 top-[60px]'>
              <Link
                to={`profile`}
                className='px-5 py-3 text-sm font-medium hover:bg-stone-200 duration-300 '
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className='px-5 py-3 w-full hover:bg-stone-200 duration-300 rounded-b-lg text-sm font-medium flex items-center justify-between gap-3'
              >
                Logout <LogOutIcon size={15} strokeWidth={2.5} />
              </button>
            </div>
          ) : (
            ''
          )}
        </>
      </div>
    </div>
  );
}
