import { IBook } from "../../../types/book.interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, data }: { id: string; data: Partial<IBook> }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = bookApi;
