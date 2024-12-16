import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex divide-x divide-stone-200 dark:divide-stone-700'>
      <Sidebar />
      <div className='flex-1 bg-stone-100 pl-16 p-6 md:p-8 lg:p-10 md:ml-12 900:ml-56 lg:ml-64 min-h-screen dark:bg-stone-950'>
        <Outlet />
      </div>
    </div>
  );
}
