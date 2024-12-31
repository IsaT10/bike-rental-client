import { TRental } from '@/types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks';
import { setBooking } from '@/redux/features/booking/bookingSlice';
import { removeCoupon } from '@/redux/features/coupon/couponSlice';

export default function UnpaidRent({
  item,
  isPaid = false,
  finalDiscount,
}: {
  item: TRental;
  isPaid?: boolean;
  finalDiscount?: number;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function formateDate(date: Date) {
    return moment(date).format('MMM Do YY, h:mm A');
  }

  const totalCost = item.totalCost - item.advancedPayment;

  // const handleCheckCouponCode = () => {
  //   if (addCouponCode === couponCode && discount) {
  //     const discountAmount =
  //       ((item.totalCost - item.advancedPayment) * discount) / 100;
  //     const discountedPrice =
  //       item.totalCost - item.advancedPayment - discountAmount;

  //     dispatch(
  //       setBooking({
  //         bikeId: item._id,
  //         advancedPayment: discountedPrice,
  //       })
  //     );

  //     navigate('/payment');
  //     return;
  //   }
  //   setErr('D hon dddddddddddiso vaiya');
  //   dispatch(removeCoupon());
  // };

  const handelPayButton = () => {
    if (finalDiscount) {
      const discountAmount = (totalCost * finalDiscount) / 100;
      const discountedPrice = Number((totalCost - discountAmount).toFixed(2));

      dispatch(
        setBooking({
          bikeId: item._id,
          advancedPayment: discountedPrice,
        })
      );
      dispatch(removeCoupon()); //! will be change
      navigate('/payment');

      return;
    }

    dispatch(
      setBooking({
        bikeId: item._id,
        advancedPayment: totalCost,
      })
    );

    navigate('/payment');
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
    <div className='bg-white dark:bg-stone-700 text-sm dark:text-stone-100 dark:border-stone-950  hover:bg-stone-100 items-center px-6 py-5   flex justify-between'>
      <p className='flex-[2]'>
        {item.bikeId.brand} <span className='mx-1 '></span> {item.bikeId.model}
      </p>
      <p className='flex-[2]'>{formateDate(item.startTime)}</p>
      <p className='flex-[2]'>{formateDate(item.returnTime)}</p>

      {/* <p className='flex-1'>$ {`${item.totalCost - item.advancedPayment}`}</p> */}
      <p className='flex-1'>$ {`${totalCost}`}</p>

      {!isPaid && (
        <button
          // to='/payment'

          onClick={handelPayButton}
          className='flex-1 text-center justify-self-end bg-primary-color text-white  text-sm font-semibold py-2 rounded-lg'
        >
          Pay
        </button>
      )}
    </div>
  );
}
