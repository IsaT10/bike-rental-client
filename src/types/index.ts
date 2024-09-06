import { ReactNode } from 'react';

export type TPathItem = {
  name: string;
  path?: string;
  element?: ReactNode;
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
