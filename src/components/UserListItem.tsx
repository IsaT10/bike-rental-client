import { TUserProfile } from '@/types';
import ThreeDotButton from './ThreeDotButton';
import { toast } from 'sonner';
import {
  useDeleteUserMutation,
  useUserRoleChangeMutation,
} from '@/redux/features/user/userApi';

export default function UserListItem({ user }: { user: TUserProfile }) {
  const [deleteUser] = useDeleteUserMutation();
  const [roleChange] = useUserRoleChangeMutation();

  const handleDeleteUser = async () => {
    const sonnerId = toast.loading('Deleting...');
    try {
      await deleteUser(user._id).unwrap();
      toast.success('User deleted successfully', { id: sonnerId });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Try again later!', { id: sonnerId });
    }
  };
  const handleUserRole = async () => {
    const sonnerId = toast.loading('Role changing...');
    try {
      await roleChange(user._id).unwrap();
      toast.success('Role changed successfully', { id: sonnerId });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Try again later!', { id: sonnerId });
    }
  };

  return (
    <div className='text-sm py-5 px-6 md:px-10 flex justify-between items-center'>
      <span className='flex-1 md:ml-6'>{user.name}</span>
      <span className='flex-1 text-center'>{user.email}</span>
      <span
        className={`flex-1 font-bold text-sm text-center ${
          user?.role === 'admin' ? 'text-green-500' : 'text-orange-500'
        }`}
      >
        {user.role.toUpperCase()}
      </span>
      <span className='flex-[.5] text-center'>
        {/* <ThreeDotUser
          handleDeleteUser={handleDeleteUser}
          handleUserRole={handleUserRole}
        /> */}

        <ThreeDotButton
          handleDelete={handleDeleteUser}
          handleAdmin={handleUserRole}
          itemType='user'
          item={user}
        />
      </span>
    </div>
  );
}
