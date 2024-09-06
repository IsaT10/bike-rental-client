import AdminBikeManagement from '@/pages/admin/AdminBikeManagement';
import BikeListing from '@/pages/user/BikeListing';
import MyRentals from '@/pages/user/MyRentals';
import AdminUserManagement from '@/pages/admin/AdminUserManagement';
import AdminRoute from './AdminRoute';
import UserProfile from '@/pages/user/UserProfile';

export const dashboardRoutes = [
  {
    name: 'Profile',
    path: 'dashboard',
    element: <UserProfile />,
  },
  {
    name: 'Bike Listing',
    path: 'bike-listing',
    element: <BikeListing />,
  },
  {
    name: 'My Rental',
    path: 'my-rental',
    element: <MyRentals />,
  },
  {
    name: 'Bike Manage',
    path: 'bike-management',
    element: (
      <AdminRoute>
        <AdminBikeManagement />
      </AdminRoute>
    ),
  },
  {
    name: 'User Manage',
    path: 'users',
    element: (
      <AdminRoute>
        <AdminUserManagement />
      </AdminRoute>
    ),
  },
];
