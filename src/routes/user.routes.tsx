import {
  Dashboard,
  Handshake,
  Review,
  Transaction,
} from '@/components/shared/Icons';
import CancelBooking from '@/pages/user/CancelBooking';
import MyRentals from '@/pages/user/MyRentals';
import MyReviews from '@/pages/user/MyReviews';
import Transactions from '@/pages/user/Transactions';
import UserOverview from '@/pages/user/UserOverview';
import UserProfile from '@/pages/user/UserProfile';

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
      {
        name: 'My Rental',
        path: 'my-rental',
        element: <MyRentals />,
      },
      {
        name: 'Cancel Booking',
        path: 'cancle-booking',
        element: <CancelBooking />,
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
