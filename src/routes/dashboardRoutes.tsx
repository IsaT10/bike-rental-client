import AdminBikeManagement from '@/pages/admin/AdminBikeManagement';
import MyRentals from '@/pages/user/MyRentals';
import AdminUserManagement from '@/pages/admin/AdminUserManagement';
import AdminRoute from './AdminRoute';
import CouponManage from '@/pages/admin/CouponManage';
import AdminOverview from '@/pages/admin/AdminOverview';
import UserOverview from '@/pages/user/UserOverview';
import MyReviews from '@/pages/user/MyReviews';
import CancelBooking from '@/pages/user/CancelBooking';
import CancelBookingForAdmin from '@/pages/admin/CancelBookingFroAdmin';
import UserProfile from '@/pages/user/UserProfile';
import Rentals from '@/pages/admin/Rentals';
import AdminReviewManagement from '@/pages/admin/AdminReviewManagement';
import Transactions from '@/pages/user/Transactions';

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
    name: 'Dashboard',
    path: 'overview',
    element: <UserOverview />,
    roles: ['user'],
  },
  {
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
  {
    name: 'Cancel Booking',
    path: 'cancle-booking',
    element: <CancelBooking />,
    roles: ['user'],
  },
  {
    name: 'My Reviews',
    path: 'my-reviews',
    element: <MyReviews />,
    roles: ['user'],
  },

  // Routes only for admins

  {
    name: 'Bikes',
    path: 'bike-management',
    element: (
      <AdminRoute>
        <AdminBikeManagement />
      </AdminRoute>
    ),
    roles: ['admin'],
  },

  {
    name: 'Users',
    path: 'users',
    element: (
      <AdminRoute>
        <AdminUserManagement />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Rentals',
    path: 'rentals',
    element: (
      <AdminRoute>
        <Rentals />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Cancelled Booking',
    path: 'all-cancelled-booking',
    element: (
      <AdminRoute>
        <CancelBookingForAdmin />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Reviews',
    path: 'all-reviews',
    element: (
      <AdminRoute>
        <AdminReviewManagement />
      </AdminRoute>
    ),
    roles: ['admin'],
  },
  {
    name: 'Transactions',
    path: 'transactions',
    element: <Transactions />,
    roles: ['user', 'admin'],
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
