import { Box, Button, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import TableInfo from '../../components/table-info/component';
import { accessTokenSelector } from '../../features/authSlice';
import { genresSelector } from '../../features/musicSlice';
import { fetchDeleteGenre, getGenres } from '../../services/genre';
import { theme } from '../../theme/theme';
import { initialUpdateGenreValues, UpdateGenreDTO, updateGenreForm, validationUpdateGenreSchema } from './form';

const GenreTable = () => {
    const [editIndex, setEditIndex] = useState<number | undefined>(undefined);

    const genres = useAppSelector(genresSelector);
    const token = useAppSelector(accessTokenSelector);
    const dispatch = useDispatch();
    const bgcolor = theme.palette.primary.dark;

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const passToUpdate = (values: UpdateGenreDTO) => {
        if (editIndex !== undefined) {
            console.log('UPDATE');
            updateGenreForm(values, {
                id: genres[editIndex].id,
                index: editIndex
            }, token)
        }
        console.log('fierro')
    };

    return (
        <Box sx={{ backgroundColor: bgcolor, p: '10px', mb: '30px' }}>
            <Box>
                <TableInfo
                    sx={{ backgroundColor: bgcolor }}
                    rowsPerPageOptions={[5, 10, 15]}
                    data={genres}
                    columnsNames={['id', 'name', 'actions']}
                    title='Genres'
                    row={(item, index) => (
                        <TableRow>
                            <TableCell> {item.id} </TableCell>
                            <TableCell> {item.name} </TableCell>
                            <TableCell>
                                <Button
                                    variant='text'
                                    color='error'
                                    onClick={() => { dispatch(fetchDeleteGenre(item.id, index, token)) }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant='text'
                                    color='warning'
                                    onClick={() => { setEditIndex(index) }}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                />
            </Box>
            {editIndex !== undefined && (
                <Box>
                    <Typography variant="h5">
                        {`Editar el genero ${genres[editIndex].name}.`}
                    </Typography>{" "}
                    <Formik
                        initialValues={initialUpdateGenreValues}
                        onSubmit={(values) => passToUpdate(values)}
                        validationSchema={validationUpdateGenreSchema}
                    >
                        {({ handleSubmit, handleChange, values, errors }) => (
                            <form onSubmit={handleSubmit}>
                                <Box>
                                    <TextField
                                        label="Name"
                                        error={Boolean(errors.name)}
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        helperText={errors.name}
                                    />
                                    <Button
                                        variant="text"
                                        color="warning"
                                        type="submit"
                                    >
                                        Edit
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            )}
        </Box>
    )
}

export default GenreTable;