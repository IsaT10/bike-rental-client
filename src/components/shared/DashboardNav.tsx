import avatar from '@/assets/images/avatar.png';
import { useGetProfileQuery } from '@/redux/features/user/userApi';

export default function DashboardNav() {
  const { data } = useGetProfileQuery(undefined);
  const { image, name } = data?.data || {};
  return (
    <div className='bg-stone-200 py-2.5 pr-4 text-black'>
      <div className='flex  gap-3 items-center justify-end '>
        <img src={image || avatar} alt='' className='size-10 rounded-full' />
        <p className='text-lg  text-center justify-items-center'>{name}</p>
      </div>
    </div>
  );
}
