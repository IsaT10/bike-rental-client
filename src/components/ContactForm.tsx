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
    setTimeout(() => {
      toast.success('Form submit succesfully');
    }, 500);

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
                  className='resize-none'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='bg-primary-color  hover:bg-primary-color/90'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
