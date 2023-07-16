import { IBook } from "../../../types/book.interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/books/recent-books",
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data: Partial<IBook>) => ({
        url: "/books",
        method: "POST",
        body: data
      })
    }),
    updateBook: builder.mutation({
      query: ({ id, data }: { id: string; data: Partial<IBook> }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRecentBooksQuery,
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = bookApi;
