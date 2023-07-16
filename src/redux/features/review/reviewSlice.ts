import { api } from "../../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id: string) => `/reviews/${id}`,
    }),
    postReview: builder.mutation({
      query: ({
        id,
        data,
      }: {
        id: string;
        data: { user: string; review: string };
      }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetReviewQuery, usePostReviewMutation } = reviewApi;
