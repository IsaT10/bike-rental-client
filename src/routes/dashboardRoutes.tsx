import AdminBikeManagement from '@/pages/admin/AdminBikeManagement';
import MyRentals from '@/pages/user/MyRentals';
import AdminUserManagement from '@/pages/admin/AdminUserManagement';
import AdminRoute from './AdminRoute';
import UserProfile from '@/pages/user/UserProfile';
import ReturnAndBilling from '@/pages/admin/ReturnAndBilling';
import CouponManage from '@/pages/admin/CouponManage';
import AdminOverview from '@/pages/admin/AdminOverview';

export const dashboardRoutes = [
  // Routes accessible to both users and admins

  {
    name: 'Dashboard',
    path: 'overview',
    element: (
      <AdminRoute>
        <AdminOverview />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Profile',
    path: 'profile',
    element: <UserProfile />,
    roles: ['user', 'admin'], // Both users and admins can access
  },
  // {
  //   name: 'Bike Listing',
  //   path: 'bike-listing',
  //   element: <BikeListing />,
  //   roles: ['user', 'admin'],
  // },

  // Routes only for users
  {
    name: 'My Rental',
    path: 'my-rental',
    element: <MyRentals />,
    roles: ['user'],
  },

  // Routes only for admins

  {
    name: 'Bike Manage',
    path: 'bike-management',
    element: (
      <AdminRoute>
        <AdminBikeManagement />
      </AdminRoute>
    ),
    roles: ['admin'],
  },

  {
    name: 'User Manage',
    path: 'users',
    element: (
      <AdminRoute>
        <AdminUserManagement />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Return & Billing',
    path: 'return-&-billing',
    element: (
      <AdminRoute>
        <ReturnAndBilling />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Coupon Manage',
    path: 'coupon-manage',
    element: (
      <AdminRoute>
        <CouponManage />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
];
