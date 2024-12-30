import { baseApi } from '@/redux/api/baseApi';

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query({
      query: () => {
        // const params = new URLSearchParams();

        // if (query) {
        //   query?.forEach((el: TQueryParam) => {
        //     params.append(el.name, el.value as string);
        //   });
        // }
        return {
          url: '/reviews',
          method: 'GET',
          //   params,
        };
      },
      providesTags: ['review'],
    }),

    addReview: builder.mutation({
      query: (options) => ({
        url: `/reviews/${options.id}/${options.rentId}`,
        method: 'POST',
        body: options.data,
      }),
      invalidatesTags: ['review', 'rent'],
    }),
    updateReview: builder.mutation({
      query: (options) => ({
        url: `/reviews/${options.id}`,
        method: 'PATCH',
        body: options.data,
      }),
      invalidatesTags: ['review'],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['review'],
    }),
  }),
});

export const {
  useGetAllReviewQuery,
  useDeleteReviewMutation,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = reviewApi;
