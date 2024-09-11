import { baseApi } from '@/redux/api/baseApi';

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
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
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
