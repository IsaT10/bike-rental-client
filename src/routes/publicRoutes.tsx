import AboutUs from '@/pages/Public/AboutUs';
import Home from '@/pages/Public/Home';

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
];
