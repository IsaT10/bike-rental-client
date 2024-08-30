import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='flex-1 h-screen bg-red-300'>
        <Outlet />
      </div>
    </div>
  );
}
