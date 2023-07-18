import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
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
