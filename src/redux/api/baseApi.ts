import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
const server = import.meta.env.VITE_SERVER;
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api',
    baseUrl: `${server}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token; // Access token from state

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['profile', 'bike', 'user', 'rent', 'coupon', 'review', 'payment'],
  endpoints: () => ({}),
});
