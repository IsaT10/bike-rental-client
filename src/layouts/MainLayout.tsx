import Footer from '@/components/shared/Footer';
import Nav from '@/components/shared/Nav';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Nav />
      <div className='h-screen pt-24'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}