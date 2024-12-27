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
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['review'],
    }),
  }),
});

export const { useGetAllReviewQuery, useDeleteReviewMutation } = reviewApi;
