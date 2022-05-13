import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface authState {
    id?: string,
    username?: string,
    mode?: number,
    email?: string,
    refresh?: string,
    access?: string,
    logged?: boolean
}

const initialState: authState = {
    id: undefined,
    username: undefined,
    mode: undefined,
    email: undefined,
    refresh: undefined,
    access: undefined,
    logged: false
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.mode = action.payload.mode;
            state.email = action.payload.email;
            state.refresh = action.payload.refresh;
            state.access = action.payload.access;
            state.logged = true;
        },
        logout: (state, action) => {
            state.id = action.payload.data;
            state.username = action.payload.data;
            state.mode = action.payload.data;
            state.email = action.payload.data;
            state.refresh = action.payload.data;
            state.access = action.payload.data;
            state.logged = false;
        }
    }
})

export const { setUser, logout} = AuthSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export const refreshTokenSelector = (state: RootState) => AuthSelector(state).refresh;
export const accessTokenSelector = (state: RootState) => AuthSelector(state).access;
export const userModeSelector = (state: RootState) => AuthSelector(state).mode;
export const usernameSelector = (state: RootState) => AuthSelector(state).username;
export const loggedSelector = (state: RootState) => AuthSelector(state).logged;

export default AuthSlice.reducer;