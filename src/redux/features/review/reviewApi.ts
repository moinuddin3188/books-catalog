import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id: string) => `/reviews/${id}`,
      providesTags: ["Reviews"]
    }),
    postReview: builder.mutation({
      query: ({
        id,
        data,
      }: {
        id: string;
        data: { user: string | undefined; review: string };
      }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Reviews"]
    }),
  }),
});

export const { useGetReviewQuery, usePostReviewMutation } = reviewApi;
