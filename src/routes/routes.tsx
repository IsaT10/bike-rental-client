import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import { routesGenerator } from '@/utils/routerGenerator';
import { publicRoutes } from './publicRoutes';
import Login from '@/pages/Public/Login';
import BookingSuccess from '@/pages/Public/BookingSuccess';
import Signup from '@/pages/Public/Signup';
import ErrorPage from '@/components/shared/ErrorPage';
import Payment from '@/pages/payment/Payment/Payment';
import { adminPaths } from './admin.routes';
import { userPaths } from './user.routes';

const CreateAppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: routesGenerator(publicRoutes),
    },

    {
      path: '/user/dashboard',
      errorElement: <ErrorPage />,
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: routesGenerator(userPaths),
    },
    {
      path: '/admin/dashboard',
      errorElement: <ErrorPage />,
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: routesGenerator(adminPaths),
    },

    {
      path: '/login',
      element: <Login />,
    },

    {
      path: '/payment',
      element: (
        <PrivateRoute>
          <Payment />
        </PrivateRoute>
      ),
    },
    {
      path: '/signup',
      element: <Signup />,
    },

    {
      path: '/booking-complete',
      element: (
        <PrivateRoute>
          <BookingSuccess />
        </PrivateRoute>
      ),
    },
  ]);
};

export default CreateAppRouter;
