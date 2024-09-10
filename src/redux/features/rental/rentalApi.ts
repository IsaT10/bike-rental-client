import { baseApi } from '@/redux/api/baseApi';

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRental: builder.query({
      query: () => ({
        url: '/rentals',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllRentalQuery } = rentalApi;
