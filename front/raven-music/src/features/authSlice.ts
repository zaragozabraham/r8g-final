import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface authState {
    id?: string,
    username?: string,
    email?: string,
    refresh?: string,
    access?: string,
    logged?: boolean,
    isAdmin?: boolean,
}

const sessionAuth = localStorage.getItem('auth');
export const sAuth = JSON.parse(sessionAuth);

const initialState = {
    id: sessionAuth? sAuth.id : undefined,
    username: sessionAuth? sAuth.username : undefined,
    email: sessionAuth? sAuth.email : undefined,
    refresh: sessionAuth? sAuth.refresh : undefined,
    access: sessionAuth? sAuth.access : undefined,
    logged: sessionAuth? sAuth.logged : false,
    isAdmin: sessionAuth? sAuth.isAdmin : false,
}


export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const admin = action.payload.mode === 2;
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.refresh = action.payload.refresh;
            state.access = action.payload.access;
            state.logged = true;
            state.isAdmin = admin ? true : false;
            localStorage.setItem('auth', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.id = action.payload.data;
            state.username = action.payload.data;
            state.email = action.payload.data;
            state.refresh = action.payload.data;
            state.access = action.payload.data;
            state.logged = false;
            state.isAdmin = false;
            localStorage.removeItem('auth');
        }
    }
})

export const { setUser, logout } = AuthSlice.actions;

export const AuthSelector = (state: RootState) => state.auth;

export const refreshTokenSelector = (state: RootState) => AuthSelector(state).refresh;
export const accessTokenSelector = (state: RootState) => AuthSelector(state).access;
export const isAdminSelector = (state: RootState) => AuthSelector(state).isAdmin;
export const usernameSelector = (state: RootState) => AuthSelector(state).username;
export const loggedSelector = (state: RootState) => AuthSelector(state).logged;

export default AuthSlice.reducer;