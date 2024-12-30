import { baseApi } from '@/redux/api/baseApi';
import { TQueryParam } from '@/types';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
      providesTags: ['profile'],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: '/users/me',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),
    getAllUser: builder.query({
      query: (query) => {
        const params = new URLSearchParams();

        if (query) {
          query?.forEach((el: TQueryParam) => {
            if (el.value !== 'all' && el.value !== '') {
              params.append(el.name, el.value as string);
            }
          });
        }
        return { url: '/users', method: 'GET', params };
      },
      providesTags: ['user'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['user'],
    }),
    userRoleChange: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useUserRoleChangeMutation,
} = userApi;
