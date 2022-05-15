import { Box, Button, Paper, TextField, Toolbar, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { loggedSelector } from '../../features/authSlice';
import { theme } from '../../theme/theme';
import { Styles } from '../../theme/types';
import { initialRegisterValues, initialValues, loginUser, registerUser, validationRegisterSchema, validationSchema } from './form';

const LoginView = () => {
    const [shorRegiter, setShowRegister] = useState<boolean>(false);

    const logged = useAppSelector(loggedSelector);

    const toggleRegister = () => {
        setShowRegister(!shorRegiter);
    }

    const navigate = useNavigate();

    const dark = theme.palette.primary.dark;
    const light = theme.palette.primary.light;

    useEffect(() => {
        if (logged) {
            return navigate("/");
        }
    }, [logged, navigate]);

    const styles: Styles = {
        loginContainer: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        loginForm: {
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            height: '500px',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: dark
        },
        title: {
            marginTop: '40px',
            marginBottom: '10px',
            fontWeight: 'bold',
            color: light
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            justifyContent: 'space-evenly',
            flex: 1
        },
        conButton: {
            backgroundColor: light,
            width: '220px',
            height: '50px',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: '#5492ff',
            }
        },
    };

    return (
        <Box sx={styles.loginContainer}>
            <Toolbar />
            <Box className='login-form' sx={{ display: shorRegiter ? 'none' : 'flex' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={loginUser}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Paper elevation={6} sx={styles.loginForm}>
                                <Typography variant='h2' sx={styles.title}>
                                    Raven Music
                                </Typography>
                                <Box sx={styles.inputContainer}>
                                    <TextField
                                        error={Boolean(errors.email)}
                                        onChange={handleChange}
                                        label='Email'
                                        name='email'
                                        type='email'
                                        helperText={errors.email} />
                                    <TextField
                                        error={Boolean(errors.password)}
                                        onChange={handleChange} label='Password'
                                        name='password'
                                        type='password'
                                        helperText={errors.password} />
                                    <Box>
                                        <Button variant='contained' sx={styles.conButton} type='submit'>
                                            LOGIN
                                        </Button>
                                        <Box sx={{ marginTop: '10px' }}>
                                            <Typography variant='caption'> Don't have an account? </Typography>
                                            <Button variant='text' onClick={toggleRegister}>
                                                <Typography variant='caption' sx={{ color: light }}> Register now </Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
            <Box className='register-form' sx={{ display: shorRegiter ? 'flex' : 'none' }}>
                <Formik
                    initialValues={initialRegisterValues}
                    onSubmit={registerUser}
                    validationSchema={validationRegisterSchema}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <Form onSubmit={handleSubmit}>
                            <Paper elevation={6} sx={styles.loginForm}>
                                <Typography variant='h2' sx={styles.title}>
                                    Raven Music
                                </Typography>
                                <Box sx={styles.inputContainer}>
                                    <TextField
                                        error={Boolean(errors.email)}
                                        onChange={handleChange}
                                        label='Username'
                                        name='username'
                                        type='username'/>
                                    <TextField
                                        error={Boolean(errors.email)}
                                        onChange={handleChange}
                                        label='Email'
                                        name='email'
                                        type='email'
                                        helperText={errors.email} />
                                    <TextField
                                        error={Boolean(errors.password)}
                                        onChange={handleChange} label='Password'
                                        name='password'
                                        type='password'
                                        helperText={errors.password} />
                                    <Box>
                                        <Button variant='contained' sx={styles.conButton} type='submit'>
                                            Register
                                        </Button>
                                        <Box sx={{ marginTop: '10px' }}>
                                            <Typography variant='caption'> Already have an account? </Typography>
                                            <Button variant='text' onClick={toggleRegister}>
                                                <Typography variant='caption' sx={{ color: light }}> Log In </Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
};

export default LoginView;