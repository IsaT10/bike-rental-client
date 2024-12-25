import React, { useState, useEffect } from 'react';
import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UnpaidRent from '@/components/UnpaidRent';
import { TRental } from '@/types';
import GridLoader from 'react-spinners/GridLoader';
import PaidRent from '@/components/PaidRent';
import { Button } from '@/components/ui/button';
import { Close } from '@/components/shared/Icons';

import './MyRentals.css'; // Assuming you create this CSS file for fade animations
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'sonner';
type TCouponPopupProps = {
  onClose: () => void;
  coupon: string;
  setCoupon: React.Dispatch<React.SetStateAction<string>>;
  setFinalDiscount: React.Dispatch<React.SetStateAction<number>>;
};

function CouponPopup({
  onClose,
  coupon,
  setCoupon,
  setFinalDiscount,
}: TCouponPopupProps) {
  const { couponCode, discount } = useAppSelector((state) => state.coupon);

  // const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = async () => {
    if (coupon.trim() === couponCode && discount) {
      const response = await fetch(
        // `http://localhost:3000/api/coupons/${coupon}`
        `https://bike-rental-pied.vercel.app/api/coupons/${coupon}`
      );
      const data = await response.json();

      if (data?.data?.isActive === true) {
        setFinalDiscount(discount);
        toast.success(`You get ${discount}% discount on next payment`);
      } else if (data?.data?.isActive === false) {
        toast.error('Not a valid token!');
      }

      return;
    }
    toast.error('Not a valid token!');

    // onClose();
  };

  return (
    <div className='fixed bottom-24 right-10 flex items-center justify-center fade-in'>
      <div className='bg-stone-100 w-[300px] relative p-6 rounded-md shadow-lg max-w-md '>
        <h2 className='text-lg font-bold mb-4'>Have any Coupon Code?</h2>
        <div className='mb-4'>
          <input
            type='text'
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className='border p-2 w-full '
            placeholder='Enter your coupon code'
          />
        </div>
        <div className='flex justify-start space-x-4'>
          <Button onClick={handleApplyCoupon}>Apply</Button>
        </div>

        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-stone-700'
        >
          <Close />
        </button>
      </div>
    </div>
  );
}

export default function MyRentals() {
  const [coupon, setCoupon] = React.useState('');
  const [finalDiscount, setFinalDiscount] = React.useState(0);

  const { couponCode, discount } = useAppSelector((state) => state.coupon);

  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isRental', value: 'false' },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Show popup after 5 seconds initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setShowButton(false); // hide button when popup shows
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Reshow popup 10 seconds after closing
  const handlePopupClose = () => {
    setShowPopup(false);
    setShowButton(true); // show button after closing popup
    // const reshowTimer = setTimeout(() => {
    //   setShowPopup(true);
    //   setShowButton(false); // hide button when popup shows again
    // }, 10000); // 10 seconds after closing

    // return () => clearTimeout(reshowTimer);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
    setShowButton(false); // hide button when popup is shown
  };

  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <GridLoader
          color='#2A9D90'
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );

  if (error)
    return (
      <div className='h-screen flex justify-center items-center text-red-600 font-semibold text-center sm:text-xl md:text-2xl'>
        Unable to load data. Please check your internet connection and try
        again.
      </div>
    );

  const unpaidRent = data.data.filter((item: TRental) => item.isPaid === false);
  const paidRent = data.data.filter((item: TRental) => item.isPaid === true);

  return (
    <div>
      {/* {couponCode && discount && (
        <h2 className='text-right '>Coupon Code: {couponCode}</h2>
      )} */}
      {!finalDiscount && couponCode && discount && data?.data.length ? (
        <div className='bg-green-100 px-4 py-2 rounded mb-4 flex justify-between items-center'>
          <p>
            You have a coupon! Use code{' '}
            <span className='font-bold '>{couponCode}</span> to get {discount}%
            off your next payment!
          </p>
          {/* <Button onClick={applyCoupon}>Apply Now</Button> */}
        </div>
      ) : (
        ''
      )}

      <Tabs defaultValue='unpaid' className='max-w-[1200px]'>
        <TabsList className='w-[400px] grid grid-cols-2 rounded-none rounded-t-lg'>
          <TabsTrigger className='rounded-md' value='unpaid'>
            Unpaid
          </TabsTrigger>
          <TabsTrigger className='rounded-md' value='paid'>
            Paid
          </TabsTrigger>
        </TabsList>
        <TabsContent className='mt-0' value='unpaid'>
          {unpaidRent.length ? (
            <>
              <div className='bg-primary-color text-white dark:bg-stone-800 items-center lg:text-base text-sm px-4 lg:px-6 py-2.5 font-semibold dark:text-stone-200 dark:border-stone-950  flex justify-between border-b border-b-stone-200 rounded-t-lg '>
                <p className='flex-[2]'>Brand Name</p>
                <p className='flex-[2]'>Start Time</p>
                <p className='flex-[2]'>Return Time</p>
                <p className='flex-1'>Total Cost</p>
                <p className='flex-1 text-center'>Actions</p>
              </div>
              <div className='rounded-lg bg-white border border-stone-300 border-t-0 rounded-t-none dark:border-stone-700  divide-y dark:divide-stone-950 divide-stone-300 mb-10'>
                {unpaidRent.map((item: TRental) => (
                  <UnpaidRent
                    key={item._id}
                    item={item}
                    finalDiscount={finalDiscount}
                  />
                ))}
              </div>
            </>
          ) : (
            <h3 className='h-[calc(100vh-150px)] flex flex-col items-center justify-center text-2xl font-semibold  dark:text-stone-100'>
              {`${
                !data.data.length
                  ? 'You have no rental history'
                  : 'Your all rental payment has been completed.'
              }`}
            </h3>
          )}
        </TabsContent>
        <TabsContent className='mt-0' value='paid'>
          {paidRent.length ? (
            <>
              <div className='bg-primary-color text-white dark:bg-stone-800 items-center lg:text-base text-sm px-4 lg:px-6 py-2.5 font-semibold dark:text-stone-200 dark:border-stone-950 flex justify-between border-b border-b-stone-200 rounded-t-lg'>
                <p className='flex-1'>Brand Name</p>
                <p className='flex-[2]'>Start Time</p>
                <p className='flex-[2]'>Return Time</p>
                <p className='flex-1'>Total Cost</p>
                <p className='flex-1'>Return Amount</p>
              </div>
              <div className='rounded-lg bg-white border border-stone-300 border-t-0 rounded-t-none dark:border-stone-700  divide-y dark:divide-stone-950 divide-stone-300 mb-10'>
                {paidRent.map((item: TRental) => (
                  <PaidRent key={item._id} item={item} isPaid={true} />
                ))}
              </div>
            </>
          ) : (
            <h3 className='h-[calc(100vh-150px)] flex flex-col items-center justify-center text-2xl font-semibold dark:text-stone-100'>
              You have no rental history
            </h3>
          )}
        </TabsContent>
      </Tabs>

      {/* Coupon Popup */}
      {unpaidRent.length && !finalDiscount && showPopup ? (
        <CouponPopup
          onClose={handlePopupClose}
          coupon={coupon}
          setCoupon={setCoupon}
          setFinalDiscount={setFinalDiscount}
        />
      ) : (
        ''
      )}

      {/* Show Button when popup is closed */}
      {unpaidRent.length && !finalDiscount && showButton ? (
        <div className='fixed bottom-20 right-10 fade-in'>
          <button
            className='px-5 py-[21px]  rounded-full bg-primary-color font-bold text-white'
            onClick={handleButtonClick}
          >
            Get
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
