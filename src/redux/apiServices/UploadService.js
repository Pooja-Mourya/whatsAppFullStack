import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
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

    uploadFile: builder.mutation({
      query: (file) => ({
        url: "/uploadFile",
        method: "POST",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),

    uploadFileMultiple: builder.mutation({
      query: (file) => ({
        url: "/uploadFile",
        method: "POST",
        body: file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
  }),
});

export const { useUploadFileMutation , useUploadFileMultipleMutation } = fileUploadApi;
