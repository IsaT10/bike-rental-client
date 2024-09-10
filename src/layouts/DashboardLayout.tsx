import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex divide-x divide-stone-200'>
      <Sidebar />
      <div className='flex-1 p-10  h-screen'>
        <Outlet />
      </div>
    </div>
  );
}
