import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import { routesGenerator } from '@/utils/routerGenerator';
import { publicRoutes } from './publicRoutes';
import { dashboardRoutes } from './dashboardRoutes';
import Login from '@/pages/Public/Login';
import { useAppSelector } from '@/redux/hooks'; // Import your custom hook
import BookingSuccess from '@/pages/Public/BookingSuccess';
import Signup from '@/pages/Public/Signup';
import ErrorPage from '@/components/shared/ErrorPage';
import Payment from '@/pages/payment/Payment/Payment';

const CreateAppRouter = () => {
  const { user } = useAppSelector((state) => state.auth); // Get user from Redux store

  return createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: routesGenerator(publicRoutes),
    },
    {
      path: '/dashboard',
      errorElement: <ErrorPage />,
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '',
          element: <Navigate to='overview' replace />,
        },
        ...routesGenerator(
          dashboardRoutes.filter((route) =>
            route.roles.includes(user?.role || 'user')
          ) // Filter routes by role
        ),
      ],
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
