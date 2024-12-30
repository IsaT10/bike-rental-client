import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import React, { useState } from 'react';
import { TErrorResponse, TReview } from '@/types';
import { Spinner } from './shared/Icons';
import { toast } from 'sonner';
import {
  useAddReviewMutation,
  useUpdateReviewMutation,
} from '@/redux/features/review/reviewApi';
import FormTextAreaField from './FormTextAreaField';
import StarRating from './StarRating';

const reviewSchema = z.object({
  review: z.string().min(1, 'Review message is required!'),
});

type TBikeFormProps = {
  bikeId?: string;
  rentId?: string;
  isUpdate?: boolean;
  review?: TReview;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ReviewForm({
  bikeId,
  rentId,
  isUpdate,
  review,
  setOpen,
}: TBikeFormProps) {
  const [starValue, setStarValue] = useState(review?.rating || 5);
  //   const bikeDetails = {
  //     ...bike,

  //   };

  //   const defaultValues = {
  //     description: bikeDetails?.description || '',
  //     pricePerHour: bikeDetails?.pricePerHour || '',
  //     cc: bikeDetails?.cc || '',
  //     image: bikeDetails?.image || '',
  //     year: bikeDetails?.year || '',
  //     model: bikeDetails?.model || '',
  //     brand: bikeDetails?.brand || '',
  //   };

  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      review: review?.review || '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [addReview] = useAddReviewMutation();

  const [updateReview] = useUpdateReviewMutation();

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
    const sonnerId = toast.loading('Loading...');

    const data = {
      ...values,
      rating: starValue,
    };

    try {
      if (isUpdate) {
        // const sonnerId = toast.loading('Updating...');
        const res = await updateReview({
          id: review?._id,
          data,
        }).unwrap();
        toast.success(res?.message, { id: sonnerId });
      } else {
        const res = await addReview({
          id: bikeId,
          rentId,
          data,
        }).unwrap();
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
      setOpen(false);
    }
  }

  return (
    <div className='max-h-screen overflow-y-auto '>
      <p className='font-medium text-sm mb-2'>Rate the quality of the ride</p>
      <StarRating starValue={starValue} setStarValue={setStarValue} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col mt-10'
        >
          <div className='flex-1'>
            <FormTextAreaField
              isUpdate={isUpdate}
              label='Review details'
              placeholder={'Your Overall Experience'}
              name={'review'}
            />
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
