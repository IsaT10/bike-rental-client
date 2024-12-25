import DashboardNav from '@/components/shared/DashboardNav';
import Sidebar from '@/components/shared/Sidebar';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex divide-x divide-stone-200 dark:divide-stone-700'>
      <Sidebar />
      <div className='flex-1 bg-stone-100  md:ml-12 900:ml-56 lg:ml-64 min-h-screen dark:bg-stone-950'>
        <Helmet>
          <title>Dashboard | XRIDES</title>
        </Helmet>

        <DashboardNav />
        <div className='pl-16 p-6 md:p-8 lg:p-10'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
