/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogout } from "../features/auth/authSlice";
import { RootState } from "../store";


const baseQuery = fetchBaseQuery({
  baseUrl: "https://book-catalog-backend-1jlt.onrender.com/api/v1",
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // Logout if token expire (when getting 401 status code)
    if (result?.error?.status === 401) {
      api.dispatch(userLogout());
      localStorage.removeItem('auth');
    }
    return result;
  },
  tagTypes: ["Reviews", "Wishlist", "MyList"],
  endpoints: () => ({}),
});
