import './SpinWheel.css';
import { ISpinWheelProps } from '@/types';
import SpinWheel from '@/components/SpinWheel';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Copy } from '@/components/shared/Icons';
import { fetchCoupons, setCoupon } from '@/redux/features/coupon/couponSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function SpinW() {
  const [open, setOpen] = React.useState(false);
  const [discount, setDiscount] = React.useState('');
  const [textToCopy, setTextToCopy] = React.useState('');
  const [copyStatus, setCopyStatus] = React.useState(false);
  const [newSegments, setNewSegments] = React.useState<
    { segmentText: string; segColor: string }[]
  >([]);

  const dispatch = useAppDispatch();

  const getSegmentColor = (discount: number) => {
    if (discount <= 10) {
      return 'red'; // Assign red for 10% or lower
    } else if (discount <= 20) {
      return 'blue'; // Assign blue for 20% or lower
    } else if (discount <= 30) {
      return 'green'; // Assign green for 30% or lower
    } else {
      return 'purple'; // Default color for other discounts
    }
  };

  const { coupons, loading, error } = useAppSelector((state) => state.coupon);

  React.useEffect(() => {
    dispatch(fetchCoupons());

    const dynamicSegments = coupons?.map((coupon) => ({
      segmentText: `${coupon.discount}%`,
      segColor: getSegmentColor(coupon.discount), // You can dynamically assign colors here if needed
    }));
    setNewSegments(dynamicSegments);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const onCopyText = () => {
    setCopyStatus(true);

    dispatch(setCoupon({ couponCode: textToCopy, discount }));
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  const handleSpinFinish = (result: string) => {
    console.log({ result });
    const discountValue = result?.slice(0, 3);

    console.log({ discountValue });
    const coupon = coupons?.find(
      (coupon) => `${coupon.discount}%` === discountValue
    );

    console.log({ coupon });
    const couponCode = coupon?.couponCode || ''; // Get the corresponding coupon code

    console.log({ couponCode });
    setDiscount(discountValue);
    setTextToCopy(couponCode); // Set coupon code for copying
    setTimeout(() => {
      setOpen(true); // Show modal after 2 seconds
    }, 2000);
  };

  const spinWheelProps: ISpinWheelProps = {
    segments: newSegments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 200,
    upDuration: 20,
    downDuration: 800,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <SpinWheel {...spinWheelProps} />

      {/* Dialog to show coupon code */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className=''>
          <DialogHeader>
            <DialogTitle>Congratulations!</DialogTitle>
            <DialogDescription>
              You won a {discount} discount! Here is your coupon code:
            </DialogDescription>
          </DialogHeader>
          <div className='relative mt-4'>
            <input
              className='border-2 w-[400px] outline-none border-stone-200 px-3 py-1.5 bg-stone-50 rounded-lg'
              value={textToCopy}
              readOnly
            />
            <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
              <button className='absolute right-[70px] top-2'>
                <Copy />
              </button>
            </CopyToClipboard>
            {copyStatus && (
              <p className='text-xs font-semibold  px-3 py-1 text-stone-700 rounded-md absolute -right-0 top-2 '>
                Copied!
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// import './SpinWheel.css';
// import { ISpinWheelProps } from '@/types';
// import SpinWheel from '@/components/SpinWheel';
// import React, { useEffect, useState } from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog';
// import CopyToClipboard from 'react-copy-to-clipboard';
// import { Copy } from '@/components/shared/Icons';
// import { setCoupon } from '@/redux/features/coupon/couponSlice';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { useGetAllCouponsQuery } from '@/redux/features/coupon/couponApi';

// export default function SpinW() {
//   const [open, setOpen] = useState(false);
//   const [discount, setDiscount] = useState('');
//   const [textToCopy, setTextToCopy] = useState('');
//   const [copyStatus, setCopyStatus] = useState(false);
//   const [segments, setSegments] = useState<
//     { segmentText: string; segColor: string }[]
//   >([]);

//   console.log({ segments });

//   const dispatch = useAppDispatch();
//   const { couponCode } = useAppSelector((state) => state.coupon);
//   const { data: couponsData, isLoading } = useGetAllCouponsQuery(undefined); // Fetch coupons

//   useEffect(() => {
//     if (couponsData) {
//       const dynamicSegments = couponsData?.data?.map((coupon: any) => ({
//         segmentText: `${coupon.discount}%`,
//         segColor: 'blue', // You can dynamically assign colors here if needed
//       }));
//       setSegments(dynamicSegments);
//     }
//   }, [couponsData]);

//   const onCopyText = () => {
//     setCopyStatus(true);
//     dispatch(setCoupon({ couponCode: textToCopy, discount }));
//     setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
//   };

//   const handleSpinFinish = (result: string) => {
//     console.log({ result });
//     const discountValue = result?.slice(0, 3);

//     console.log({ discountValue });
//     const coupon = couponsData?.data?.find(
//       (coupon) => `${coupon.discount}%` === discountValue
//     );

//     console.log({ coupon });
//     const couponCode = coupon?.code || ''; // Get the corresponding coupon code

//     setDiscount(discountValue);
//     setTextToCopy(couponCode); // Set coupon code for copying
//     setTimeout(() => {
//       setOpen(true); // Show modal after 2 seconds
//     }, 2000);
//   };

//   const spinWheelProps: ISpinWheelProps = {
//     segments,
//     onFinished: handleSpinFinish,
//     primaryColor: 'black',
//     contrastColor: 'white',
//     buttonText: 'Spin',
//     isOnlyOnce: false,
//     size: 200,
//     upDuration: 20,
//     downDuration: 800,
//     fontFamily: 'Arial',
//     arrowLocation: 'top',
//     showTextOnSpin: true,
//   };

//   return (
//     <div className='flex flex-col justify-center items-center'>
//       {isLoading ? (
//         <p>Loading Coupons...</p>
//       ) : (
//         <>
//           <SpinWheel {...spinWheelProps} />
//           {/* Dialog to show coupon code */}
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild></DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Congratulations!</DialogTitle>
//                 <DialogDescription>
//                   You won a {discount} discount! Here is your coupon code:
//                 </DialogDescription>
//               </DialogHeader>
//               <div className='relative mt-4'>
//                 <input
//                   className='border-2 w-[400px] outline-none border-stone-200 px-3 py-1.5 bg-stone-50 rounded-lg'
//                   value={textToCopy}
//                   readOnly
//                 />
//                 <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
//                   <button className='absolute right-[70px] top-2'>
//                     <Copy />
//                   </button>
//                 </CopyToClipboard>
//                 {copyStatus && (
//                   <p className='text-xs font-semibold px-3 py-1 text-stone-700 rounded-md absolute -right-0 top-2'>
//                     Copied!
//                   </p>
//                 )}
//               </div>
//             </DialogContent>
//           </Dialog>
//         </>
//       )}
//     </div>
//   );
// }
