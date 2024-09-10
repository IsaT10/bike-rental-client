import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodedToken } from '@/utils/decodedToken';
import { TUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import FormInputField from '@/components/FormInputField';

const FormSchema = z.object({
  email: z.string().email('Provide a valid email.'),
  password: z.string().min(2, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: 'rakib@gmail.com',
      password: '12345678',
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
      navigate(`/`);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: sonnerId });
    }
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mx-auto rounded-[30px] gap-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-primary-color py-20 px-12 w-[500px] flex flex-col '
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
          {/* <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='shadcn' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button className='self-center mt-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
