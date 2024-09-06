import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRental: builder.query({
      query: () => ({
        url: '/rentals',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllRentalQuery } = authApi;
