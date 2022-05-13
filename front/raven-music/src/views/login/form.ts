import * as Yup from 'yup';
import { sha512 } from 'js-sha512';
import { store } from '../../app/store'
import { createUser, fetchLogin } from '../../services/user';

export interface LoginDTO {
    email: string,
    password: string
}

export interface GetTokenDTO {
    id: string,
    username: string,
    mode: string,
    email: string,
    password: string
}

export const validationSchema: Yup.SchemaOf<LoginDTO> = Yup.object({
    email: Yup.string().required('The email is required.').email('Invalid email.'),
    password: Yup.string().required('The password is required.')
});

export const initialValues: LoginDTO = {
    email: '',
    password: ''
};

export interface RegisterDTO {
    username: string,
    email: string,
    password: string
};

export const validationRegisterSchema: Yup.SchemaOf<RegisterDTO> = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('The email is required.').email('Invalid email.'),
    password: Yup.string().required('The password is required.')
});

export const initialRegisterValues: RegisterDTO = {
    username: '',
    email: '',
    password: ''
};

export const loginUser = (values: LoginDTO) => {
    const user:LoginDTO = {
        email: values.email,
        password: sha512(values.password)
    };
    // console.log(user);
    store.dispatch(fetchLogin(user));
};

export const registerUser = (values: RegisterDTO) => {
    const user:RegisterDTO = {
        username: values.username,
        email: values.email,
        password: sha512(values.password)
    };
    // console.log(user);
    store.dispatch(createUser(user));
};