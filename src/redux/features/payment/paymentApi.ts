import { baseApi } from '@/redux/api/baseApi';
import { TQueryParam } from '@/types';

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPayments: builder.query({
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
          url: '/payments',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['payment'],
    }),

    addPayment: builder.mutation({
      query: (data) => ({
        url: `/payments/save-transaction`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['payment'],
    }),
    updatePayment: builder.mutation({
      query: (options) => ({
        url: `/payments/${options.id}`,
        method: 'PUT',
        body: options.data,
      }),
      invalidatesTags: ['payment'],
    }),
    deletePayment: builder.mutation({
      query: (paymentId) => ({
        url: `/payments/${paymentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['payment'],
    }),
  }),
});

export const {
  useGetAllPaymentsQuery,
  useAddPaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
} = paymentApi;
