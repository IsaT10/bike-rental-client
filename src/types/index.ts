import { ReactNode } from 'react';

export type TPathItem = {
  name?: string;
  path: string;
  element: ReactNode;
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string;
  path: string;
};

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TRental = {
  _id: string;
  userId: string;
  bikeId: string;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
  isPaid: boolean;
  advancedPayment: number;
};

export type TReview = {
  _id: string;
  review: string;
  userId: TUserProfile;
  bikeId: TBike;
  rating: number;
  createdAt: string;
};

export type TBike = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  reviews: TReview;
  image: string;
  year: number;
  model: string;
  brand: string;
  tag?: string;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TUserProfile = {
  _id: string;
  name: string;
  password: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
};

export type TErrorData = {
  success: boolean;
  message: string;
  statusCode?: number;
  stack?: string;
};
export type TCouponData = {
  _id: string;
  couponCode: string;
  discount: number;
  isActive: boolean;
};

export type TErrorResponse = {
  status: number;
  data: TErrorData;
};

export interface ISpinWheelProps {
  segments: ISegments[] | [];
  onFinished: (result: string) => void;
  primaryColor?: string;
  contrastColor?: string;
  buttonText?: string;
  isOnlyOnce?: boolean;
  size?: number;
  upDuration?: number;
  downDuration?: number;
  fontFamily?: string;
  arrowLocation?: 'center' | 'top';
  showTextOnSpin?: boolean;
  isSpinSound?: boolean;
}

export interface ISegments {
  segmentText: string;
  segColor?: string;
}
