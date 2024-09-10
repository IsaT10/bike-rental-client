import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
// import AuthorizationModal from '@/components/shared/AuthorizationModal';
// import ExpiredSessionModal from '@/components/shared/ExpiredSessionModal';
import { Close } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const currentTime = Math.floor(Date.now() / 1000);
  const isTokenExpired = currentTime > (user?.exp || 0);

  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [showExpiredModal, setShowExpiredModal] = React.useState(false);

  const handleAuthModalClose = () => {
    setShowAuthModal(false);
    navigate(-1);
  };

  // const handleExpiredModalClose = () => {
  //   setShowExpiredModal(false);
  //   navigate('/login');
  // };

  React.useEffect(() => {
    if (!token) {
      setShowAuthModal(true); // Show modal when user is not authenticated
    } else if (isTokenExpired) {
      setShowExpiredModal(true);
    }
  }, [token, isTokenExpired]);

  if (!token)
    return (
      <div className='fixed inset-0 bg-stone-900/50 flex items-center justify-center'>
        <div
          className={`text-center bg-white w-[500px] p-6 relative rounded shadow-lg transition-transform duration-500 ease-out ${
            showAuthModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <h2 className='text-lg font-bold mb-4'>Access Restricted</h2>
          <p className='mb-4'>
            You need to log in to access this feature. Please log in or sign up
            to continue.
          </p>
          <span
            onClick={handleAuthModalClose}
            className='absolute top-2 right-2 cursor-pointer'
          >
            <Close />
          </span>
          <div className='flex justify-center gap-4'>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button variant='outline' onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </div>
          <p className='mt-4 text-sm text-gray-600'>
            Don't have an account? Create one now to enjoy all the features.
          </p>
        </div>
      </div>
    );

  if (isTokenExpired)
    return (
      <div className='fixed inset-0 bg-stone-900/50 flex items-center justify-center'>
        <div
          className={`text-center space-y-5 bg-white w-[500px] p-5 sm:px-10 sm:py-10 relative rounded shadow-lg transition-transform duration-500 ease-out ${
            showExpiredModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <h2 className='text-lg font-bold mb-4'>Your session has expired</h2>
          <p className='mb-4'>Please log in again to continue using the app.</p>
          <span
            onClick={handleAuthModalClose}
            className='absolute -top-2.5 right-2 cursor-pointer'
          >
            <Close />
          </span>
          <div className='flex justify-center gap-4'>
            <Button onClick={() => navigate('/login')}>Login</Button>
            {/* <Button variant='outline' onClick={() => navigate('/signup')}>
              Sign Up
            </Button> */}
          </div>
        </div>
      </div>
    );

  return (
    <>
      {/* <AuthorizationModal
        showModal={showAuthModal}
        onClose={handleAuthModalClose}
      />
      <ExpiredSessionModal
        showModal={showExpiredModal}
        onClose={handleExpiredModalClose}
      /> */}
      {!token || isTokenExpired ? null : children}
    </>
  );
};

export default PrivateRoute;
