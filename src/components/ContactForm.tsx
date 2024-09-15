import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from './ui/textarea';
import FormInputField from './FormInputField';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  email: z
    .string()
    .min(1, 'Email is required!')
    .email({ message: 'Invalid email address' }),
  message: z.string().min(1, 'Message is required!'),
});

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  function onSubmit() {
    const sonnerId = toast.loading('Sending..');

    setTimeout(() => {
      toast.success('Form submit succesfully', { id: sonnerId });
    }, 2000);

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
        <FormInputField name='name' placeholder='Name' type='text' />
        <FormInputField name='email' placeholder='Email' type='text' />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Message'
                  className='resize-none outline-none border-stone-300 dark:text-stone-100 dark:border-stone-700 rounded-[18px]'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type='submit'
          className='px-10 py-3 sm:text-base bg-primary-color text-white text-sm border mr-6 rounded-[14px] font-semibold duration-200'
        >
          Submit
        </button>
      </form>
    </Form>
  );
}
