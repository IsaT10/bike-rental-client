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
import { bikeSchema } from '@/schema';
import { Label } from './ui/label';

type TBikeFormProps = {
  isUpdate?: boolean;
  bike?: TBike;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BikeForm({ isUpdate, bike, setOpen }: TBikeFormProps) {
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const bikeDetails = {
    ...bike,
    pricePerHour: bike?.pricePerHour?.toString(),
    cc: bike?.cc?.toString(),
    year: bike?.year?.toString(),
    highestKmph: bike?.highestKmph?.toString(),
    horsepower: bike?.horsepower?.toString(),
    bikeWeight: bike?.bikeWeight?.toString(),
  };

  const defaultValues = {
    description: bikeDetails?.description || '',
    pricePerHour: bikeDetails?.pricePerHour || '',
    cc: bikeDetails?.cc || '',
    image: bikeDetails?.image || '',
    year: bikeDetails?.year || '',
    model: bikeDetails?.model || '',
    brand: bikeDetails?.brand || '',
    highestKmph: bikeDetails?.highestKmph || '',
    horsepower: bikeDetails?.horsepower || '',
    bikeWeight: bikeDetails?.bikeWeight || '',
    tag: bikeDetails?.tag || '',
    gear: bikeDetails?.gear || '',
  };

  const form = useForm({
    resolver: zodResolver(bikeSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const {
    formState: { isSubmitting },
    reset,
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
      bikeWeight: parseInt(values.bikeWeight, 10),
      horsepower: parseInt(values.horsepower, 10),
      highestKmph: parseInt(values.highestKmph, 10),
    };

    const formData = new FormData();

    formData.append('data', JSON.stringify({ ...data }));

    if (imageFile) {
      formData.append('image', imageFile);
    }
    try {
      if (isUpdate) {
        // const sonnerId = toast.loading('Updating...');
        const res = await updateBike({
          id: bike?._id,
          data,
        }).unwrap();

        toast.success(res?.message, { id: sonnerId });
      } else {
        const res = await addBike(formData).unwrap();
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
      if (setOpen) setOpen(false);
      reset();
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
                  name={'brand'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Model'
                  type='text'
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
                  name={'cc'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Year'
                  type='text'
                  name={'year'}
                />
              </div>
            </div>
            <div className='flex   gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Horsepower '
                  type='text'
                  name={'horsepower'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Highest Speed (Km/h)'
                  type='text'
                  name={'highestKmph'}
                />
              </div>
            </div>
            <div className='flex   gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Tag'
                  type='text'
                  name={'tag'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Bike Weight (kg)'
                  type='text'
                  name={'bikeWeight'}
                />
              </div>
            </div>

            <div className='flex   gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Price Per Hour'
                  type='text'
                  name={'pricePerHour'}
                />
              </div>
              {/* <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Image URL'
                  type='text'
                  name={'image'}
                />
              </div> */}
              <div className='flex-1'>
                <Label className='dark:text-stone-200'>Bike Image</Label>
                <label
                  className='flex rounded-lg bg-white text-sm w-full cursor-pointer py-3 pl-5 text-stone-700  border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400'
                  htmlFor='image'
                >
                  {imageFile?.name ? imageFile?.name : 'Upload Image'}
                </label>
                <input
                  multiple
                  className='hidden '
                  type='file'
                  id='image'
                  name='image'
                  onChange={(e) => setImageFile(e.target.files![0])}
                />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Gear'
                  type='text'
                  name={'gear'}
                />
              </div>
              <div className='flex-1'>
                <FormInputField
                  // isUpdate={isUpdate}
                  label='Description'
                  type='text'
                  name={'description'}
                />
              </div>
            </div>
          </div>

          <button
            className='px-8 w-max  disabled:cursor-not-allowed disabled:opacity-55  duration-200 py-2.5 font-medium rounded-lg  bg-primary-color text-white md:text-base text-sm mt-10'
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
