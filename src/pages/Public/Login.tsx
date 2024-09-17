import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodedToken } from '@/utils/decodedToken';
import { TUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';

const FormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Provide a valid email.'),
  password: z.string({ required_error: 'Password is required' }).min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
      console.log(res);
      const token = res.token;
      console.log(typeof token);
      console.log(token);
      const user = decodedToken(token) as TUser;

      console.log(user);
      dispatch(setUser({ user, token }));
      toast.success('Logged in.', { id: sonnerId });
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: sonnerId });
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center dark:bg-stone-950'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto rounded-[30px] gap-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-primary-color py-6 md:py-20 px-6 sm:px-12 w-[90%] xs:w-[500px] flex flex-col  dark:bg-secondary-color'
        >
          <h2 className='text-center text-2xl font-bold mb- text-primary-color'>
            Login
          </h2>

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
                className='text-primary-color hover:underline duration-200'
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
        </form>
      </Form>
    </div>
  );
}
