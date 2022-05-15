import { AppDispatch } from "../app/store";
import { authState, logout, setUser } from "../features/authSlice";
import { setLoading } from "../features/loaderSlice";
import { User } from "../models/user";
import { GetTokenDTO, LoginDTO, RegisterDTO } from "../views/login/form";

export const fetchLogin = (user: LoginDTO) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.status !== 200) return '';

        const data = await response.json();
        // console.log(data);
        // Get JWToken

        const userReq: GetTokenDTO = {
            id: data.id,
            username: data.username,
            mode: data.mode,
            email: user.email,
            password: user.password
        };

        // console.log(userReq);     
        dispatch(fetchToken(userReq));

    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchToken = (user: GetTokenDTO) => async (dispatch: AppDispatch) => {
    try {
        const res = await fetch('api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (res.status !== 200) return '';

        const data = await res.json();
        // console.log(data);

        const actualUser: User = {
            id: user.id,
            username: user.username,
            mode: parseInt(user.mode),
            email: user.email,
            refresh: data.refresh,
            access: data.access
        }

        // console.log(actualUser);
        dispatch(setUser(actualUser));
    } catch (err) {
        throw err;
    }
}

export const createUser = (user: RegisterDTO) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.status !== 200) return '';

    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
}

export const logoutUser = (user: authState) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const bearer = 'Bearer ' + user.access;
        const req = `{"refresh": "${user.refresh}"}`
        const response = await fetch('/users/logout', {
            method: 'POST',
            headers: {
                "Authorization": bearer,
                'Content-Type': 'application/json'
            },
            body:  req
        });
        if (response.status !== 204) return '';
        
        const value = {
            data: undefined
        }
        
        dispatch(logout(value));
    } catch (err) {
        throw err
    } finally {
        dispatch(setLoading(false));
    }
}