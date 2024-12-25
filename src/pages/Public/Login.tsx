import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodedToken } from '@/utils/decodedToken';
import { TErrorResponse, TUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';
import { Google, LeftArrow } from '@/components/shared/Icons';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';
import { Helmet } from 'react-helmet-async';

const FormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Provide a valid email.'),
  password: z.string({ required_error: 'Password is required' }).min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

const USER_CREDENTIALS = { email: 'user@gmail.com', password: '1234user' };
const ADMIN_CREDENTIALS = {
  email: 'admin@gmail.com',
  password: '1234admin',
};

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithGoogle } = useGoogleLogin();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // email: 'rakib@gmail.com',
      // password: '12345678',
      // email: '',
      // password: '',
      // email: 'john@example.com',
      // password: 'password123',
    },
  });

  const [login] = useLoginMutation();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const sonnerId = toast.loading('Loging in...');
    try {
      const res = await login(data).unwrap();
      const token = res.data.accessToken;
      const user = decodedToken(token) as TUser;
      dispatch(setUser({ user, token }));
      toast.success('Logged in.', { id: sonnerId });
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      console.log(error);
      const typedError = error as TErrorResponse;

      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    }
  }

  const setDemoCredentials = (credentials: {
    email: string;
    password: string;
  }) => {
    form.setValue('email', credentials.email);
    form.setValue('password', credentials.password);
  };

  return (
    <div className='min-h-screen  relative flex flex-col justify-center items-center dark:bg-stone-950'>
      <Helmet>
        <title>Login | XRIDES</title>
      </Helmet>
      <Link to='/' className='absolute top-10 left-10 flex gap-2 items-center'>
        <LeftArrow />{' '}
        <span className='font-medium text-primary-color'>Return home</span>
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto rounded-[30px] gap-6 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-primary-color py-10 md:py-16 px-6 sm:px-12 w-[90%] xs:w-[500px] flex flex-col  dark:bg-secondary-color'
        >
          <h2 className='text-center text-2xl font-bold mb- text-primary-color'>
            Login
          </h2>

          <div className='flex flex-col items-center'>
            <p className='font-medium text-lg mb-3'>Demo credentials</p>
            <div>
              <button
                className='bg-primary-color py-1 mr-4 rounded-full text-sm px-4 font-medium text-white'
                onClick={() => setDemoCredentials(USER_CREDENTIALS)}
                type='button'
              >
                User Credential
              </button>
              <button
                className='bg-primary-color py-1  rounded-full text-sm px-4 font-medium text-white'
                onClick={() => setDemoCredentials(ADMIN_CREDENTIALS)}
                type='button'
              >
                Admin Credential
              </button>
            </div>
          </div>

          <FormInputField
            name='email'
            placeholder='example@gmail.com'
            type='text'
            label='Email'
          />
          <FormInputField
            name='password'
            placeholder='password'
            type='password'
            label='Password'
          />

          <div>
            <p className='dark:text-stone-200 text-sm'>
              Don't have any account?{' '}
              <Link
                to='/signup'
                className='text-primary-color hover:underline font-semibold duration-200'
              >
                Signup
              </Link>
            </p>

            <button
              className='self-center mt-2 w-full px-8   disabled:cursor-not-allowed disabled:opacity-55  duration-200 py-3 font-medium rounded-[17px]  bg-primary-color text-white md:text-base text-sm '
              type='submit'
            >
              Login
            </button>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <p>Or login with</p>
            <button type='button' onClick={loginWithGoogle}>
              <Google />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
