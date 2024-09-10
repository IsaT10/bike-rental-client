import FormInputField from '@/components/FormInputField';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from './ui/button';
import { useUpdateProfileMutation } from '@/redux/features/user/userApi';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Edit } from './shared/Icons';
import React from 'react';

const profileUpdateSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type TEditProfileModalProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export default function EditProfileModal({
  profileData,
}: {
  profileData: TEditProfileModalProps;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const { name, email, phone, address } = profileData;
  const form = useForm<z.infer<typeof profileUpdateSchema>>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      name,
      email,
      phone,
      address,
    },
  });

  const [updateProfile] = useUpdateProfileMutation();

  async function onSubmit(data: z.infer<typeof profileUpdateSchema>) {
    const sonnerId = toast.loading('Updating...');

    try {
      const res = await updateProfile(data).unwrap();
      console.log(res);

      toast.success('Update profile successfully.', { id: sonnerId });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { id: sonnerId });
    } finally {
      setOpen(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='absolute top-5 right-5'>
          <Edit />
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click update when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=''>
              <div className='grid grid-cols-2 gap-y-8 gap-x-6'>
                <FormInputField name='name' type='text' label='Name' />
                <FormInputField name='email' type='text' label='Email' />
                <FormInputField name='phone' type='text' label='Phone' />
                <FormInputField name='address' type='text' label='Address' />
              </div>

              <Button className='self-center mt-10' type='submit'>
                Update
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
