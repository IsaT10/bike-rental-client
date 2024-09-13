import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import FormInputField from '@/components/FormInputField'; // Adjust if needed
import { Spinner } from './shared/Icons';
import { useAddCouponMutation } from '@/redux/features/coupon/couponApi';
import { TErrorResponse } from '@/types';

const CouponFormSchema = z.object({
  couponCode: z.string().min(1, 'Coupon code is required.'),
  discount: z.string().min(1, 'Discount must be at least 10.'),
});

export default function CouponForm({ setOpen }) {
  const form = useForm<z.infer<typeof CouponFormSchema>>({
    resolver: zodResolver(CouponFormSchema),
    defaultValues: {
      couponCode: '',
      discount: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [addCoupon] = useAddCouponMutation();

  async function onSubmit(data: z.infer<typeof CouponFormSchema>) {
    const submitData = {
      couponCode: data.couponCode,
      discount: Number(data.discount),
    };

    const sonnerId = toast.loading('Adding coupon...');
    try {
      const res = await addCoupon(submitData).unwrap();

      console.log({ res });
      toast.success(res?.message, { id: sonnerId });
    } catch (error) {
      const typedError = error as TErrorResponse;

      console.log({ typedError });
      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    } finally {
      setOpen(false);
    }
  }

  return (
    <div className=' flex flex-col justify-center items-center mt-3'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex gap-5'>
            <FormInputField
              name='couponCode'
              placeholder='SUMMER50'
              type='text'
              label='Coupon Code'
            />
            <FormInputField
              name='discount'
              placeholder='40'
              type='text'
              label='Discount (%)'
            />
          </div>

          <Button className='w-full bg-primary-color py-3 mt-8 text-white font-semibold rounded-lg'>
            {isSubmitting ? (
              <Spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              'Add Coupon'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
