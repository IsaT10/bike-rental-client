import DashboardLayout from '@/layouts/DashboardLayout';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import MainLayout from '@/layouts/MainLayout';
import { routesGenerator } from '@/utils/routerGenerator';

import { publicRoutes } from './publicRoutes';
import { dashboardRoutes } from './dashboardRoutes';
import Login from '@/pages/Public/Login';

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
    children: [
      {
        path: '', // Default route for `/dashboard`
        element: <Navigate to='profile' replace />,
      },
      ...routesGenerator(dashboardRoutes),
    ],
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
