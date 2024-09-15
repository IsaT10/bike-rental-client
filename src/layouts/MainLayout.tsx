import Footer from '@/components/shared/Footer';
import Nav from '@/components/shared/Nav';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Nav />
      <div className='min-h-screen bg-white dark:bg-stone-950'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
