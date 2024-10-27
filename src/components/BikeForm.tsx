import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import React from 'react';
import FormInputField from './FormInputField';
import { TBike, TErrorResponse } from '@/types';
import { Spinner } from './shared/Icons';
import {
  useAddBikeMutation,
  useUpdateBikeMutation,
} from '@/redux/features/bikes/bikesApi';
import { toast } from 'sonner';

const bikeSchema = z.object({
  description: z.string().min(1, 'Desription is required!'),
  brand: z.string().min(1, 'Brand is required!'),
  pricePerHour: z.string().min(1, 'Price is required!'),
  cc: z.string().min(1, 'CC is required!'),
  year: z.string().min(1, 'Year is required!'),
  model: z.string().min(1, 'Model is required!'),
  image: z.string().min(1, 'Image is required!'),
});

type TBikeFormProps = {
  isUpdate?: boolean;
  bike?: TBike;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BikeForm({ isUpdate, bike, setOpen }: TBikeFormProps) {
  const bikeDetails = {
    ...bike,
    pricePerHour: bike?.pricePerHour?.toString(),
    cc: bike?.cc?.toString(),
    year: bike?.year?.toString(),
  };

  const defaultValues = {
    description: bikeDetails?.description || '',
    pricePerHour: bikeDetails?.pricePerHour || '',
    cc: bikeDetails?.cc || '',
    image: bikeDetails?.image || '',
    year: bikeDetails?.year || '',
    model: bikeDetails?.model || '',
    brand: bikeDetails?.brand || '',
  };

  const form = useForm({
    resolver: zodResolver(bikeSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [addBike] = useAddBikeMutation();

  const [updateBike] = useUpdateBikeMutation();

  async function onSubmit(values: z.infer<typeof bikeSchema>) {
    const sonnerId = toast.loading('Loading...');

    const data = {
      ...values,
      pricePerHour: parseFloat(values.pricePerHour),
      cc: parseInt(values.cc, 10),
      year: parseInt(values.year, 10),
    };
    try {
      if (isUpdate) {
        // const sonnerId = toast.loading('Updating...');
        const res = await updateBike({
          id: bike?._id,
          data,
        }).unwrap();

        toast.success(res?.message, { id: sonnerId });
      } else {
        const res = await addBike(data).unwrap();
        toast.success(res?.message, { id: sonnerId });
      }
    } catch (error) {
      const typedError = error as TErrorResponse;

      if (typedError?.data?.message) {
        toast.error(typedError.data.message, { id: sonnerId });
      } else {
        toast.error('Something went wrong!', { id: sonnerId });
      }
    } finally {
      setOpen(false); // Close the form dialog
    }
  }

  return (
    <div className='max-h-screen overflow-y-auto '>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col '>
          <div className='space-y-3 md:space-y-5 '>
            <div className='flex  gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Brand'
                  type='text'
                  placeholder={'Brand'}
                  name={'brand'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Model'
                  type='text'
                  placeholder={'Model'}
                  name={'model'}
                />
              </div>
            </div>

            <div className='flex   gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='CC '
                  type='text'
                  placeholder={'CC (Engine Capacity)'}
                  name={'cc'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Year'
                  type='text'
                  placeholder={'Year'}
                  name={'year'}
                />
              </div>
            </div>

            <div className='flex   gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Price Per Hour'
                  type='text'
                  placeholder={'Price per Hour'}
                  name={'pricePerHour'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Image URL'
                  type='text'
                  placeholder={'Image URL'}
                  name={'image'}
                />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Description'
                  type='text'
                  placeholder={'Description'}
                  name={'description'}
                />
              </div>
            </div>
          </div>

          <button
            className='px-8   disabled:cursor-not-allowed disabled:opacity-55  duration-200 py-3 font-medium rounded-[17px]  bg-primary-color text-white md:text-base text-sm mt-10'
            type='submit'
          >
            {isSubmitting ? (
              <Spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
