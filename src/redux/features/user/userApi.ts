import { api } from "../../api/apiSlice";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email: string) => ({
        url: `/users/${email}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
