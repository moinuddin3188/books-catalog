import { IBook } from "../../../types/book.interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecentBooks: builder.query({
      query: () => "/books/recent-books",
    }),
    getBooks: builder.query({
      query: (data: {
        searchTerm?: string;
        genre?: string[];
        publicationYear?: number;
      }) => {
        let queryString = "/books/?";

        const { searchTerm, genre, publicationYear } = data;

        if (genre) {
          const genres = genre.map((item) => `genre=${item}`);
          const queryUrl = genres.join("&");
          queryString += queryUrl;
        }
        
        if (publicationYear && typeof(publicationYear) === "number") {
          queryString += `&publicationYear=${publicationYear}`;
        } else {
          queryString
        }

        if(searchTerm){
          queryString += `&searchTerm=${searchTerm}`
        }

        return queryString;
      },
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data: Partial<IBook>) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
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
  useAddBookMutation,
  useUpdateBookMutation,
} = bookApi;
