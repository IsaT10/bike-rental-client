import { useSingleBikeQuery } from '@/redux/features/bikes/bikesApi';
import { TRental } from '@/types';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import { setBooking } from '@/redux/features/booking/bookingSlice';
import { removeCoupon } from '@/redux/features/coupon/couponSlice';

export default function UnpaidRent({
  item,
  isPaid = false,
}: {
  item: TRental;
  isPaid?: boolean;
}) {
  const { couponCode, discount } = useAppSelector((state) => state.coupon);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // console.log(discount?.slice(0, 2) * 1);
  const [addCouponCode, setAddCouponCode] = React.useState('');
  const [err, setErr] = React.useState('');
  const [open, setOpen] = React.useState<boolean>(false);

  const { data, isFetching } = useSingleBikeQuery(item.bikeId);

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  const handleCheckCouponCode = () => {
    if (addCouponCode === couponCode && discount) {
      console.log('oi gece');
      const discountAmount =
        ((item.totalCost - item.advancedPayment) * discount) / 100;
      const discountedPrice =
        item.totalCost - item.advancedPayment - discountAmount;

      dispatch(
        setBooking({
          bikeId: item._id,
          advancedPayment: discountedPrice,
        })
      );

      navigate('/payment');
      return;
    }
    console.log('bal diso');
    setErr('D hon dddddddddddiso vaiya');
    dispatch(removeCoupon());
  };

  const handelPayButton = () => {
    if (couponCode && discount) {
      setOpen(true);
    }

    console.log('lhola nai');
  };

  // const handleSubmit = async () => {
  //   const bookingData = {
  //     bikeId: id,
  //     startTime: new Date(startTime).toISOString(),
  //     advancedPayment: 100,
  //   };

  //   dispatch(setBooking(bookingData));

  //   navigate('/payment');
  // };

  return (
    <div>
      <div className='bg-stone-50 hover:bg-stone-100 items-center px-6 py-5 text-stone-600 rounded-b-lg flex justify-between'>
        <p className='flex-[2]'>{data?.data?.brand}</p>
        <p className='flex-[2]'>{formateDate(item.startTime)}</p>
        <p className='flex-[2]'>{formateDate(item.returnTime)}</p>

        <p className='flex-1'>$ {`${item.totalCost - item.advancedPayment}`}</p>

        {!isPaid && (
          <button
            // to='/payment'

            onClick={handelPayButton}
            className='flex-1 text-center justify-self-end bg-secondary-color text-white  text-sm font-semibold py-2 rounded-lg'
          >
            Pay
          </button>
        )}
      </div>

      {couponCode && discount && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className='flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-stone-100 transition-colors focus:bg-accent focus:text-accent-foreground cursor-pointer data-[disabled]:opacity-50 w-full'>
              Edit
            </button>
          </DialogTrigger>
          <DialogContent className=''>
            <DialogHeader>
              <DialogTitle>Have any coupon code to use!</DialogTitle>
            </DialogHeader>
            <div className='relative mt-4'>
              <input
                type='text'
                onChange={(e) => setAddCouponCode(e.target.value)}
                className='border-2 w-[400px] outline-none border-stone-200 px-3 py-1.5 bg-stone-50 rounded-lg'
              />
              {err ? <>{err}</> : ''}
            </div>

            <button onClick={handleCheckCouponCode}>Submit</button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
