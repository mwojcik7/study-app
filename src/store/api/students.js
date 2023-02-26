import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: (id) => `groups/${id}`,
      providesTags: ['Students'],
    }),
    getStudentById: builder.query({
      query: (id) => `students/${id}`,
      providesTags: ['Students'],
    }),
    findStudent: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Students'],
    }),
    removeStudent: builder.mutation({
      query: (body) => ({
        url: 'students',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const { useGetStudentsQuery, useGetStudentByIdQuery, useFindStudentMutation, useRemoveStudentMutation } = studentsApi;
