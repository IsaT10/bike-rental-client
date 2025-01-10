import CommonPagination from '@/components/CommonPagination';
import CouponPopup from '@/components/CouponPopup';
import UnpaidRent from '@/components/UnpaidRent';
import { useGetAllRentalQuery } from '@/redux/features/rental/rentalApi';
import { useAppSelector } from '@/redux/hooks';
import { TRental } from '@/types';
import React, { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function UserUnpaidRentals() {
  const [coupon, setCoupon] = React.useState('');
  const [finalDiscount, setFinalDiscount] = React.useState(0);
  const { couponCode, discount } = useAppSelector((state) => state.coupon);
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { data, error, isLoading } = useGetAllRentalQuery([
    { name: 'isReturned', value: 'true' },
    { name: 'isPaid', value: 'false' },
    { name: 'sort', value: '-startTime' },
    { name: 'page', value: currentPage },
    { name: 'limit', value: limit },
  ]);

  const totalPages = Math.ceil(data?.meta?.total / limit);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      setShowButton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowButton(true);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
    setShowButton(false);
  };
  if (isLoading)
    return (
      <div className='h-[calc(100vh-80px)] flex flex-col items-center  justify-center'>
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
  return (
    <div>
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
      <h2 className='text-xl font-semibold mb-6'>Unpaid Rentals</h2>
      {data?.data?.length ? (
        <>
          <div className='bg-primary-color text-white dark:bg-stone-800 items-center  text-sm px-4 lg:px-6 py-3 font-semibold dark:text-stone-200 dark:border-stone-950  flex justify-between border-b border-b-stone-200 rounded-t-lg '>
            <p className='flex-[2]'>Brand Name</p>
            <p className='flex-[2]'>Start Time</p>
            <p className='flex-[2]'>Return Time</p>
            <p className='flex-1'>Total Cost</p>
            <p className='flex-1 text-center'>Actions</p>
          </div>
          <div className='rounded-lg bg-white border border-stone-300 border-t-0 rounded-t-none dark:border-stone-700  divide-y dark:divide-stone-950 divide-stone-300 mb-10'>
            {data?.data?.map((item: TRental) => (
              <UnpaidRent
                key={item._id}
                item={item}
                finalDiscount={finalDiscount}
              />
            ))}
          </div>

          {data?.meta?.total > 10 ? (
            <CommonPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        <h3 className='h-[70vh] text-stone-600 flex flex-col items-center justify-center text-lg  dark:text-stone-100'>
          There are no cancellations yet
        </h3>
      )}

      {data?.meta?.total && !finalDiscount && showPopup ? (
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
      {data?.meta?.total && !finalDiscount && showButton ? (
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
