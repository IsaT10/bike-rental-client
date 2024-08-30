import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  //   const { isAuthenticated } = useAuth();

  const isAuthenticated = true;

  if (!isAuthenticated) {
    // Redirect non-authenticated users to login
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;
