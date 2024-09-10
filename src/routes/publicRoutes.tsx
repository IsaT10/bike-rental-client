import Bookings from '@/components/Bookings';
import AboutUs from '@/pages/Public/AboutUs';
import Home from '@/pages/Public/Home';
import BikeDetail from '@/pages/user/BikeDetail';
import BikeListing from '@/pages/user/BikeListing';

export const publicRoutes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'About Us',
    path: '/about',
    element: <AboutUs />,
  },
  {
    name: 'Bike listing',
    path: '/bikes',
    element: <BikeListing />,
  },
  {
    path: '/bikes/:id',
    element: <BikeDetail />,
  },
  {
    path: '/bookings',
    element: <Bookings />,
  },
];
