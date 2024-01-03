import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthService = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
//   tagTypes: ["users"],
  endpoints: (build) => ({
    addUser: build.mutation({
      query(body) {
        return {
          url: `/auth/signup`,
          method: "POST",
          body,
        };
      },
    //   invalidatesTags: [{ type: "users", id: "LIST" }],
    }),

    loginUser: build.mutation({
      query(body) {
        return {
          url: `/auth/login`,
          method: "POST",
          body,
        };
      },
    //   invalidatesTags: [{ type: "users", id: "LIST" }],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
} = AuthService;
