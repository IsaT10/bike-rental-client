import DashboardLayout from '@/layouts/DashboardLayout';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import { routesGenerator } from '@/utils/routerGenerator';

import Login from '@/pages/Public/Login';
import { publicRoutes } from './publicRoutes';
import { dashboardRoutes } from './dashboardRoutes';

export const router = createBrowserRouter([
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
    children: routesGenerator(dashboardRoutes),
  },

  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
]);
