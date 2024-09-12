import { baseApi } from '@/redux/api/baseApi';

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query({
      query: () => ({
        url: '/coupons',
        method: 'GET',
      }),
      providesTags: ['coupon'],
    }),
    singleCoupon: builder.query({
      query: (couponId) => ({
        url: `/coupons/${couponId}`,
        method: 'GET',
      }),
    }),
    addCoupon: builder.mutation({
      query: (data) => ({
        url: '/coupons',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['coupon'],
    }),
    updateCoupon: builder.mutation({
      query: ({ id, data }) => ({
        url: `/coupons/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['coupon'],
    }),
    deleteCoupon: builder.mutation({
      query: (couponId) => ({
        url: `/coupons/${couponId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['coupon'],
    }),
  }),
});

export const {
  useGetAllCouponsQuery,
  useSingleCouponQuery,
  useAddCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
} = couponApi;
