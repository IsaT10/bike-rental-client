import { baseApi } from '@/redux/api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: '/bikes',
        method: 'GET',
      }),
    }),
    singleBike: builder.query({
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBikesQuery, useSingleBikeQuery } = bikeApi;
