import { Box, Button, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useAppSelector } from '../../app/hooks';
import { accessTokenSelector } from '../../features/authSlice';
import { theme } from '../../theme/theme';
import { Styles } from '../../theme/types';
import { initialCreateGenreValues, validationCreateGenreSchema, fetchCreateGenre } from './form';

const CreateGenre = () => {
    const bgcolor = theme.palette.primary.dark;
    const light = theme.palette.primary.light;
    const token = useAppSelector(accessTokenSelector);

    const styles: Styles = {
        conButton: {
            // backgroundColor: light,
            // width: '220px',
            // height: '50px',
            m: '10px 10px',
            color: light,
            fontWeight: 'bold',
            '&:hover': {
                color: '#75c7ff',
            }
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'row',
            m: '10px 0'
        },
        inputContainer: {
            width: {xs: '400px', md: '800px'},
        }
    };

    return (
        <Box sx={{ backgroundColor: bgcolor, p: '10px' }}>
            <Typography variant='h5'> Create Genre </Typography>
            <Formik
                initialValues={initialCreateGenreValues}
                onSubmit={(values) => fetchCreateGenre(values, token)}
                validationSchema={validationCreateGenreSchema}
            >
                {({ handleChange, handleSubmit, errors, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box sx={styles.formContainer}>
                            <Box sx={ styles.inputContainer }>
                                <TextField
                                    fullWidth
                                    error={Boolean(errors.name)}
                                    onChange={handleChange}
                                    label='Name'
                                    name='name'
                                    type='name'
                                    helperText={errors.name} />
                            </Box>
                            <Box>
                                <Button variant='text' sx={styles.conButton} type='submit'>
                                    Create
                                </Button>
                            </Box>
                        </Box>

                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default CreateGenre;