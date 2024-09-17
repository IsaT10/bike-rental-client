import { baseApi } from '@/redux/api/baseApi';
import { TQueryParam } from '@/types';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (query) => {
        const params = new URLSearchParams();

        if (query) {
          query?.forEach((el: TQueryParam) => {
            if (el.value !== 'all' && el.value !== '') {
              params.append(el.name, el.value as string);
            }
          });
        }
        return {
          url: '/bikes',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['bike'],
    }),
    singleBike: builder.query({
      query: (bikeId) => ({
        url: `/bikes/${bikeId}`,
        method: 'GET',
      }),
      providesTags: ['bike'],
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
