import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  //   const { isAuthenticated, user } = useAuth();

  const user = { role: 'admin' };

  const isAuthenticated = true;

  if (!isAuthenticated) {
    // Redirect non-authenticated users to login
    return <Navigate to='/login' />;
  }

  if (user.role !== 'admin') {
    // Redirect non-admin users to unauthorized page
    return <Navigate to='/' />;
  }

  return children;
};

export default AdminRoute;
