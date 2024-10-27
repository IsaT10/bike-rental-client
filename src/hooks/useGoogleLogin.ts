import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { signInWithPopup } from 'firebase/auth';
import { setUser } from '@/redux/features/auth/authSlice';
import { TErrorResponse, TUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { auth, provider } from '@/config/firebase';
import { decodedToken } from '@/utils/decodedToken';
import { useGoogleLoginMutation } from '@/redux/features/auth/authApi';

export const useGoogleLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [googleLogin] = useGoogleLoginMutation();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const googleUser = result.user;

      const data = {
        name: googleUser.displayName,
        email: googleUser.email,
        image: googleUser.photoURL,
      };

      const res = await googleLogin(data).unwrap();
      const token = res.data.accessToken;
      const user = decodedToken(token) as TUser;

      dispatch(setUser({ user, token }));
      toast.success('Successfully logged in.');

      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      console.error(error);
      const typedError = error as TErrorResponse;
      if (typedError?.data?.message) {
        toast.error(typedError.data.message);
      }
    }
  };

  return { loginWithGoogle };
};
