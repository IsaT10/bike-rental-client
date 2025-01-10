import {
  Dashboard,
  Handshake,
  Review,
  Transaction,
} from '@/components/shared/Icons';
import MyReviews from '@/pages/user/MyReviews';
import Transactions from '@/pages/user/Transactions';
import UserBookedRentals from '@/pages/user/UserBookedRentals';
import UserCancelledRentals from '@/pages/user/UserCancelledRentals';
import UserOverview from '@/pages/user/UserOverview';
import UserPaidRentals from '@/pages/user/UserPaidRentals';
import UserProfile from '@/pages/user/UserProfile';
import UserUnpaidRentals from '@/pages/user/UserUnpaidRentals';

export const userPaths = [
  {
    icon: Dashboard,
    name: 'Dashboard',
    path: 'overview',
    element: <UserOverview />,
  },
  {
    icon: Handshake,
    name: 'My Rentals',
    children: [
      // {
      //   name: 'My Rental',
      //   path: 'my-rental',
      //   element: <MyRentals />,
      // },

      {
        name: 'Paid List',
        path: 'paid-rentals',
        element: <UserPaidRentals />,
      },
      {
        name: 'Booked List',
        path: 'booked-rentals',
        element: <UserBookedRentals />,
      },
      {
        name: 'Unpaid List',
        path: 'unpaid-rentals',
        element: <UserUnpaidRentals />,
      },
      {
        name: 'Cancelled List',
        path: 'cancelled-rentals',
        element: <UserCancelledRentals />,
      },
    ],
  },

  {
    icon: Review,
    name: 'My Reviews',
    path: 'my-reviews',
    element: <MyReviews />,
  },
  {
    path: 'profile',
    element: <UserProfile />,
  },

  {
    icon: Transaction,
    name: 'Transactions',
    path: 'my-transactions',
    element: <Transactions />,
  },
];
