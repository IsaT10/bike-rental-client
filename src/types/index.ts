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
};

export type TBike = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  image: string;
  year: number;
  model: string;
  brand: string;
};
