import { useGetAllCouponsQuery } from '@/redux/features/coupon/couponApi';
import React from 'react';

export default function CouponManage() {
  const { data: couponData, isLoading } = useGetAllCouponsQuery(undefined);
  return <div>CouponManage</div>;
}
