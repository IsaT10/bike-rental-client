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
import { Google, LeftArrow } from '@/components/shared/Icons';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';
import { decodedToken } from '@/utils/decodedToken';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';

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
      <Link to='/' className='absolute top-10 left-10 flex gap-2 items-center'>
        <LeftArrow />{' '}
        <span className='font-medium text-primary-color'>Return home</span>
      </Link>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto rounded-[30px] gap-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-primary-color py-6 lg:py-10 px-6 sm:px-12 w-[90%] xs:w-[500px] flex flex-col dark:bg-secondary-color'
        >
          <h2 className='text-center text-2xl font-bold mb-4 text-primary-color'>
            Signup
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

          <div>
            <p className='dark:text-stone-200 text-sm'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-primary-color hover:underline duration-200'
              >
                Login
              </Link>
            </p>

            <button
              className='self-center mt-2 w-full px-8 disabled:cursor-not-allowed disabled:opacity-55 duration-200 py-3 font-medium rounded-[17px] bg-primary-color text-white md:text-base text-sm'
              type='submit'
            >
              Register
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
