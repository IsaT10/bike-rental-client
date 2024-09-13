import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex divide-x divide-stone-200'>
      <Sidebar />
      <div className='flex-1 pl-16 p-6 md:p-8 lg:p-10 md:ml-12 900:ml-56 lg:ml-64 h-screen'>
        <Outlet />
      </div>
    </div>
  );
}
