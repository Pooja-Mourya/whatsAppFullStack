import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserService = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/user",
    prepareHeaders: (headers) => {
      // Assuming you store the loginUser token in your Redux state
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["users"],
  endpoints: (build) => ({

    getUsers: build.query({
      query: () => "/allUser",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "users", id })),
              { type: "users", id: "LIST" },
            ]
          : [{ type: "users", id: "LIST" }],
    }),

    getUser: build.query({
      query: () => "/user/profile",
      providesTags: (result, error, id) => [{ type: "users", id }],
    }),

    updateUser: build.mutation({
      query(data) {
        const {  ...body } = data;
        return {
          url: "/update",
          method: "PUT",
          body,
        };
      },

      invalidatesTags: (result, error, { id }) => [{ type: "users", id }],
    }),

    deleteUser: build.mutation({
      query(id) {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = UserService;

export const userProfileApi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/user/profile",
    prepareHeaders: (headers) => {
      // Assuming you store the loginUser token in your Redux state
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: (name) => ``,
    }),
  }),
});
export const { useUserProfileQuery } = userProfileApi;
