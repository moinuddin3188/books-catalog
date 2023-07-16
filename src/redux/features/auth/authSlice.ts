import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  accessToken: undefined | string;
  user: undefined | {email: string, role: string};
}

const initialState: IUserInitialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<IUserInitialState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLogout: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
