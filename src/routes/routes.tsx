import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import { routesGenerator } from '@/utils/routerGenerator';
import { publicRoutes } from './publicRoutes';
import { dashboardRoutes } from './dashboardRoutes';
import Login from '@/pages/Public/Login';
import { useAppSelector } from '@/redux/hooks'; // Import your custom hook

const CreateAppRouter = () => {
  const { user } = useAppSelector((state) => state.auth); // Get user from Redux store

  return createBrowserRouter([
    {
      path: '/',
      errorElement: <>nai vai</>,
      element: <MainLayout />,
      children: routesGenerator(publicRoutes),
    },
    {
      path: '/dashboard',
      errorElement: <>nai vai</>,
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '',
          element: <Navigate to='profile' replace />,
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
  ]);
};

export default CreateAppRouter;
