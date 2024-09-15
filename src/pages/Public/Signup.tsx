import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useSignupMutation } from '@/redux/features/auth/authApi'; // Adjust accordingly if you have a register API
import { useAppDispatch } from '@/redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';
import { TErrorResponse } from '@/types';

// Zod schema for validation
const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email('Provide a valid email.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/\d/, 'Password must contain at least one number.')
    .regex(
      /[@$!%*?&]/,
      'Password must contain at least one special character.'
    ),
  phone: z.string().min(10, 'Phone must be at least 10 digits.'),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters.' }),
});

export default function Signup() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: 'User12',
      email: 'userApolsdlo@gmail.com',
      password: 'SecureP@ssw0rd',
      phone: '12345678901',
      address: '123 Main St, Anytown',
    },
  });

  const [register] = useSignupMutation();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const sonnerId = toast.loading('Registering...');
    try {
      const res = await register(data).unwrap();
      console.log(res);
      toast.success('Registration successful.', { id: sonnerId });
      navigate(`/login`);
    } catch (error) {
      const typedError = error as TErrorResponse;

      console.log({ typedError });
      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center dark:bg-stone-950'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto rounded-[30px] gap-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-primary-color py-6 lg:py-10 px-6 sm:px-12 w-[90%] xs:w-[500px] flex flex-col dark:bg-secondary-color'
        >
          <h2 className='text-center text-2xl font-bold mb-4 text-primary-color'>
            Register
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
          <FormInputField
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
          />

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
        </form>
      </Form>
    </div>
  );
}
