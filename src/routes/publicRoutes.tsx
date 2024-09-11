import Bookings from '@/components/Bookings';
import Home from '@/pages/Home/Home';
import AboutUs from '@/pages/Public/AboutUs';
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
