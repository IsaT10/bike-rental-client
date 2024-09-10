import { baseApi } from '@/redux/api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: '/bikes',
        method: 'GET',
      }),
      providesTags: ['bike'],
    }),
    singleBike: builder.query({
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: 'GET',
      }),
    }),
    addBike: builder.mutation({
      query: (data) => ({
        url: `/bikes`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['bike'],
    }),
    updateBike: builder.mutation({
      query: (options) => ({
        url: `/bikes/${options.id}`,
        method: 'PUT',
        body: options.data,
      }),
      invalidatesTags: ['bike'],
    }),
    deleteBike: builder.mutation({
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['bike'],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useSingleBikeQuery,
  useAddBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikeApi;
