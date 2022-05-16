import { AppDispatch } from '../app/store';
import { setLoading } from '../features/loaderSlice';
import { deleteGenre, setGenres, updateGenre } from '../features/musicSlice';
import { CreateGenreDTO, DeleteGenreDTO, GenrePosition, UpdateGenreDTO } from '../forms/genre/form';
import { Genre } from '../models/genre';

export const getGenres = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('/genres/');

        if (response.status !== 200) return '';

        const genres: Genre[] = await response.json();
        dispatch(setGenres(genres));

    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
};

export const createGenre = (genre: CreateGenreDTO, token: string) => async (dispatch: AppDispatch) => {
    try {
        // console.log(token)
        // console.log(JSON.stringify(token))
        dispatch(setLoading(true));
        const bearer = 'Bearer ' + token;
        const response = await fetch('/genres/', {
            method: 'POST',
            headers: {
                "Authorization": bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genre)
        });

        if (response.status !== 200) return '';

    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
};

export const fetchUpdateGenre = (updateGenreDTO: UpdateGenreDTO, genrePosition: GenrePosition, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        // console.log(genrePosition)
        const bearer = 'Bearer ' + token;
        const response = await fetch(`/genres/${genrePosition.id}/`,{
            method: 'PATCH',
            headers:{
                "Authorization": bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateGenreDTO)
        });

        if (response.status !== 200) return '';

        const genre: Genre = await response.json();
        dispatch(updateGenre({ genre, index: genrePosition.index }));
    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchDeleteGenre = (genreId: string, index: number, token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));
        const bearer = 'Bearer ' + token;
        const response = await fetch(`/genres/${genreId}/`, {
            method: 'DELETE',
            headers: {
                "Authorization": bearer,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genreId)
        });

        if (response.status !== 204) return '';

        dispatch(deleteGenre(index));

    } catch (err) {
        throw err;
    } finally {
        dispatch(setLoading(false));
    }
};