import { baseApi } from '@/redux/api/baseApi';
import { TQueryParam } from '@/types';

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRental: builder.query({
      query: (query) => {
        const params = new URLSearchParams();

        if (query) {
          query?.forEach((el: TQueryParam) => {
            params.append(el.name, el.value as string);
          });
        }
        return {
          url: '/rentals',
          method: 'GET',
          params,
        };
      },
      providesTags: ['rent'],
    }),
    getAllUserRental: builder.query({
      query: (query) => {
        const params = new URLSearchParams();

        if (query) {
          query?.forEach((el: TQueryParam) => {
            params.append(el.name, el.value as string);
          });
        }
        return {
          url: '/rentals/all',
          method: 'GET',
          params,
        };
      },
      providesTags: ['rent'],
    }),
    returnBike: builder.mutation({
      query: (rentId) => {
        return {
          url: `/rentals/${rentId}/return`,
          method: 'PUT',
        };
      },
      invalidatesTags: ['rent'],
    }),
    rentBike: builder.mutation({
      query: (data) => {
        return {
          url: `/rentals`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['rent'],
    }),
  }),
});

export const {
  useGetAllRentalQuery,
  useGetAllUserRentalQuery,
  useReturnBikeMutation,
  useRentBikeMutation,
} = rentalApi;
