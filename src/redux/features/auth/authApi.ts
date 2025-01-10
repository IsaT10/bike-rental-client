import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: [
        'profile',
        'bike',
        'user',
        'rent',
        'coupon',
        'review',
        'payment',
      ],
    }),
    googleLogin: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/google-login',
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: [
        'profile',
        'bike',
        'user',
        'rent',
        'coupon',
        'review',
        'payment',
      ],
    }),
    signup: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: [
        'profile',
        'bike',
        'user',
        'rent',
        'coupon',
        'review',
        'payment',
      ],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGoogleLoginMutation } =
  authApi;
