import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`
    })
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
