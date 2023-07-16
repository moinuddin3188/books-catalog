import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IUserInitialState {
    accessToken: undefined | string
    user: undefined
}

const initialState: IUserInitialState = {
    accessToken: undefined,
    user: undefined
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user
        },
        userLogout: (state, action) => {
            state.accessToken = undefined
            state.user = undefined
        },
    }
})