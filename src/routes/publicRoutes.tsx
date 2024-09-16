import Bookings from '@/components/Bookings';
import Home from '@/pages/Home/Home';
import AboutUs from '@/pages/Public/AboutUs';
import BikeDetail from '@/pages/user/BikeDetail';
import BikeListing from '@/pages/user/BikeListing';
import PrivateRoute from './PrivateRoute';
import BikeComparison from '@/pages/user/BikeComparison';

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
    path: '/bikes/compare',
    element: <BikeComparison />,
  },
  {
    path: '/bike/:id',
    element: <BikeDetail />,
  },
  {
    path: '/bookings/:id',
    element: (
      <PrivateRoute>
        <Bookings />
      </PrivateRoute>
    ),
  },
];
