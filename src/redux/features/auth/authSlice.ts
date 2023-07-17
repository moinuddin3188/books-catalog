import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  accessToken: undefined | string;
  user: undefined | {email: string, role: string, id: string};
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

      // set auth info to the localStorage when loggedIn
      localStorage.setItem(
        'auth',
        JSON.stringify({
          accessToken: action.payload.accessToken,
          user: action.payload.user,
        })
      );
    },
    userLogout: (state) => {
      state.accessToken = undefined;
      state.user = undefined;

      localStorage.removeItem('auth');
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
