/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: (email: string | undefined) => ({
        url: `/users/wishlist/${email}`,
      }),
      providesTags: ["Wishlist"],
    }),

    getMyList: builder.query({
      query: (email: string | undefined) => ({
        url: `/users/my-list/${email}`,
      }),
      providesTags: ["MyList"],
    }),

    addToWishList: builder.mutation({
      query: ({ email, data }: { email: string | undefined; data: { book: string } }) => ({
        url: `/users/wishlist/${email}`,
        method: "PATCH",
        body: data,
      }),
    }),

    addToMyList: builder.mutation({
      query: ({
        email,
        data,
      }: {
        email: string | undefined;
        data: { book: string; status: string };
      }) => ({
        url: `/users/my-list/${email}`,
        method: "PATCH",
        body: data,
      }),
    }),

    updateStatus: builder.mutation({
      query: ({
        email,
        data,
      }: {
        email: string | undefined;
        data: { id: string; status: string };
      }) => ({
        url: `/users/update-status/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["MyList"]
    }),

    deleteFromList: builder.mutation({
      query: ({
        email,
        data,
      }: {
        email: string | undefined;
        data: { book: string; };
      }) => ({
        url: `/users/delete-list/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["MyList"]
    }),

    deleteFromWishlist: builder.mutation({
      query: ({
        email,
        data,
      }: {
        email: string | undefined;
        data: { book: string; };
      }) => ({
        url: `/users/delete-wishlist/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Wishlist"]
    }),
  }),
});

export const {
  useGetWishListQuery,
  useGetMyListQuery,
  useAddToMyListMutation,
  useAddToWishListMutation,
  useUpdateStatusMutation,
  useDeleteFromListMutation,
  useDeleteFromWishlistMutation
} = usersApi;
