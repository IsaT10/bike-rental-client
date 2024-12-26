import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useSignupMutation } from '@/redux/features/auth/authApi'; // Adjust accordingly if you have a register API
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';
import { TErrorResponse, TUser } from '@/types';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Google } from '@/components/shared/Icons';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';
import { decodedToken } from '@/utils/decodedToken';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';
import { Helmet } from 'react-helmet-async';

// Zod schema for validation
const signupSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Provide a valid email.'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.'),
  // // .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
  // // .regex(/\d/, 'Password must contain at least one number.')
  // // .regex(
  // //   /[@$!%*?&]/,
  // //   'Password must contain at least one special character.'
  // // ),
  // phone: z
  //   .string({ required_error: 'Phone number is required' })
  //   .min(10, 'Phone must be at least 10 digits.'),
  // address: z
  //   .string({ required_error: 'Address is required' })
  //   .min(5, { message: 'Address must be at least 5 characters.' }),
});

export default function Signup() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const navigate = useNavigate();
  const { loginWithGoogle } = useGoogleLogin();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      // name: 'User12',
      // email: 'userApolsdlo@gmail.com',
      // password: 'SecureP@ssw0rd',
      // phone: '12345678901',
      // address: '123 Main St, Anytown',
    },
  });

  const [register] = useSignupMutation();

  async function onSubmit(data: z.infer<typeof signupSchema>) {
    console.log(data);

    const formData = new FormData();

    formData.append('data', JSON.stringify({ ...data }));

    if (imageFile) {
      formData.append('image', imageFile);
    }
    const sonnerId = toast.loading('Register...');
    try {
      const res = await register(formData).unwrap();
      const token = res.data.accessToken;
      const user = decodedToken(token) as TUser;
      dispatch(setUser({ user, token }));
      toast.success('Registration complete successfully.', { id: sonnerId });
      const from = location.state?.from?.pathname || '/';
      navigate(from);

      // toast.success('Registration successful. Now login with new account.', {
      //   id: sonnerId,
      // });
      // navigate(`/login`);
    } catch (error) {
      const typedError = error as TErrorResponse;

      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center dark:bg-stone-950'>
      <Helmet>
        <title>Signup | XRIDES</title>
      </Helmet>
      {/* <Link to='/' className='absolute top-10 left-10 flex gap-2 items-center'>
        <LeftArrow />{' '}
        <span className='font-medium text-primary-color'>Return home</span>
      </Link> */}

      <div className='flex justify-between  w-full'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mx-auto rounded-[30px] self-center gap-6  border-primary-color py-10  pb-10  px-6 md:px-8 lg:px-12 w-[92%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[37%] flex flex-col h-max dark:bg-secondary-color '
          >
            <h2 className='text-3xl lg:text-4xl leading-none font-bold mb-2 lg:mb-4 '>
              Sign up
            </h2>

            <FormInputField
              name='name'
              placeholder='Your Name'
              type='text'
              label='Name'
            />
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
              <Label className='dark:text-stone-200'>Profile Image</Label>
              <label
                className='flex rounded-[18px] text-sm w-full cursor-pointer py-3 pl-5 text-stone-500  border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400'
                htmlFor='image'
              >
                {imageFile?.name ? imageFile?.name : 'Upload Image'}
              </label>
              <input
                multiple
                className='hidden'
                type='file'
                id='image'
                name='image'
                onChange={(e) => setImageFile(e.target.files![0])}
              />
            </div>
            {/* <FormInputField
            name='phone'
            placeholder='12345678901'
            type='text'
            label='Phone'
          />
          <FormInputField
            name='address'
            placeholder='123 Main St, Anytown'
            type='text'
            label='Address'
          /> */}

            <button
              className='self-center mt-2 w-full px-8 disabled:cursor-not-allowed disabled:opacity-55 duration-200 py-2.5 lg:py-3 font-medium rounded-lg bg-primary-color text-white md:text-base text-sm'
              type='submit'
            >
              Sign up
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
              className='w-full flex items-center justify-center gap-5 py-2.5  border-2 border-primary-color rounded-lg font-medium text-stone-800'
            >
              <Google />
              <span>Continue with Google</span>
            </button>
          </form>
        </Form>
        <div className='relative min-h-screen w-[50%] hidden md:block ban '>
          <div className='bg-black/50 p-8 rounded-2xl h-[90%] lg:h-[85%] w-[90%]  lg:w-[80%] mx-auto absolute inset-0 m-auto  backdrop-blur-md flex flex-col justify-between text-white'>
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
              <p className='text-sm lg:text-base'>Hello Friend! </p>
              <p className='lg:text-3xl text-2xl leading-6 lg:leading-normal xl:text-4xl lg:w-[90%] xl:w-[80%] my-2'>
                Join the Ride! Start your journey with us today.
              </p>
              <p className='text-sm mt-3'>
                Access your account to rent bikes, track bookings, and more.
              </p>
            </div>
            <div>
              <p className='text-lg'>Already have an account?</p>
              <Link to='/login' className='text-lg font-semibold'>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
