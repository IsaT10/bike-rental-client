import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (user?.role !== 'admin') {
    // Redirect non-admin users to unauthorized page
    return <Navigate to='/' />;
  }

  return children;
};

export default AdminRoute;
