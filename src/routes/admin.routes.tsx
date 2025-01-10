import {
  Bike,
  Coupon,
  Dashboard,
  Handshake,
  Review,
  Transaction,
  Users,
} from '@/components/shared/Icons';
import AddBike from '@/pages/admin/AddBike';
import AdminBikeManagement from '@/pages/admin/AdminBikeManagement';
import AdminOverview from '@/pages/admin/AdminOverview';
import AdminReviewManagement from '@/pages/admin/AdminReviewManagement';
import AdminUserManagement from '@/pages/admin/AdminUserManagement';
import CouponManage from '@/pages/admin/CouponManage';
import PaidRentals from '@/pages/admin/PaidRentals';
import UnpaidRentals from '@/pages/admin/UnpaidRentals';
import Transactions from '@/pages/user/Transactions';
import UserProfile from '@/pages/user/UserProfile';
import OngoingRentals from '@/pages/admin/OngoingRentals';
import CancelledRentals from '@/pages/admin/CancelledRentals';

export const adminPaths = [
  {
    icon: Dashboard,
    name: 'Dashboard',
    path: 'overview',
    element: <AdminOverview />,
  },
  {
    icon: Bike,
    name: 'Bikes',
    children: [
      {
        name: 'Add Bike',
        path: 'add-bike',
        element: <AddBike />,
      },
      {
        name: 'All Bikes',
        path: 'all-bikes',
        element: <AdminBikeManagement />,
      },
    ],
  },
  {
    icon: Handshake,
    name: 'Rentals',
    children: [
      // {
      //   name: 'Rental List',
      //   path: 'all-rentals',
      //   element: <Rentals />,
      // },
      {
        name: 'Ongoing List',
        path: 'ongoing-rentals',
        element: <OngoingRentals />,
      },
      {
        name: 'Paid List',
        path: 'paid-rentals',
        element: <PaidRentals />,
      },
      {
        name: 'Unpaid List',
        path: 'unpaid-rentals',
        element: <UnpaidRentals />,
      },
      {
        name: 'Cancelled List',
        path: 'cancelled-rentals',
        element: <CancelledRentals />,
      },
    ],
  },

  {
    icon: Users,
    name: 'Users',
    path: 'all-user',
    element: <AdminUserManagement />,
  },
  {
    icon: Review,
    name: 'Reviews',
    path: 'all-review',
    element: <AdminReviewManagement />,
  },
  {
    path: 'profile',
    element: <UserProfile />,
  },

  {
    icon: Transaction,
    name: 'Transaction',
    path: 'all-transactions',
    element: <Transactions />,
  },
  {
    icon: Coupon,
    name: 'Coupon List',
    path: 'all-coupon',
    element: <CouponManage />,
  },
];
