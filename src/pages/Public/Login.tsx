import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import img from '@/assets/images/login.jpg';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodedToken } from '@/utils/decodedToken';
import { TErrorResponse, TUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';
import { Google } from '@/components/shared/Icons';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

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
  const [showPassword, setShowPassword] = React.useState(false);

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
    <div className='min-h-screen   relative flex flex-col justify-center items-center dark:bg-stone-950'>
      <Helmet>
        <title>Login | XRIDES</title>
      </Helmet>
      {/* <Link to='/' className='absolute top-10 left-10 flex gap-2 items-center'>
        <LeftArrow />{' '}
        <span className='font-medium text-primary-color'>Return home</span>
      </Link> */}
      <div className='flex justify-between  w-full'>
        <div className='relative w-[50%] hidden md:block'>
          <img className='h-screen w-full object-cover' src={img} alt='' />

          <div className='bg-black/50 p-8 rounded-2xl h-[90%] lg:h-[80%] w-[90%]  lg:w-[80%] mx-auto absolute inset-0 m-auto  backdrop-blur-md flex flex-col justify-between text-white'>
            <div>
              <Link
                to='/'
                className='flex items-center w-max px-4 py-1.5 gap-3 bg-white/10 rounded-md backdrop-blur-md'
              >
                <h2 className=' text-xl font-bold tracking-wider text-primary-color'>
                  X<span className='text-white'>RIDES</span>
                </h2>
              </Link>
              <div className='bg-primary-color py-[1px] w-16 my-8'></div>
              <p className='text-sm lg:text-base'>Welcome Back! </p>
              <p className='lg:text-3xl text-2xl leading-6 lg:leading-normal xl:text-4xl lg:w-[90%] xl:w-[80%] my-2'>
                Your next adventure is just a login away.
              </p>
              <p className='text-sm mt-3'>
                Access your account to rent bikes, track bookings, and more.
              </p>
            </div>
            <div>
              <p className='text-lg'>Already have an account?</p>
              <Link to='/signup' className='text-lg font-semibold'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mx-auto rounded-[30px] gap-6 border-primary-color pt-10 md:pb-0 pb-10 md:pt-16 px-6 md:px-8 lg:px-12 w-[92%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex flex-col h-max dark:bg-secondary-color '
          >
            <h2 className='text-4xl font-bold mb- '>Login</h2>

            <div className='flex flex-col '>
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
              type={!showPassword ? 'password' : 'text'}
              label='Password'
            />

            <div className='flex gap-2 items-center'>
              <Checkbox
                id='terms1'
                onCheckedChange={() => setShowPassword(!showPassword)}
              />
              <label
                htmlFor='terms1'
                className='text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Show password
              </label>
            </div>

            <button
              className='self-center mt-2 w-full px-8   disabled:cursor-not-allowed disabled:opacity-55  duration-200 py-3 font-medium rounded-lg  bg-primary-color text-white md:text-base text-sm '
              type='submit'
            >
              Login
            </button>
            <div className='flex flex-col items-center gap-3'>
              <p className='flex items-center gap-3'>
                <span className='p-[.5px] bg-stone-200 w-20'></span>
                <span className='font-medium text-stone-400 leading-none'>
                  or
                </span>
                <span className='p-[.5px] bg-stone-200 w-20'></span>
              </p>
            </div>
            <button
              onClick={loginWithGoogle}
              className='w-full flex items-center justify-center gap-5 py-3 border-2 border-primary-color rounded-lg font-medium text-stone-800'
            >
              <Google />
              <span>Continue with Google</span>
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
