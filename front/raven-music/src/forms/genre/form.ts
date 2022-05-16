import * as Yup from 'yup';
import { store } from '../../app/store';
import { createGenre, fetchUpdateGenre } from '../../services/genre';

// Create Genre
export interface CreateGenreDTO {
    name: string
};

export const validationCreateGenreSchema: Yup.SchemaOf<CreateGenreDTO> = Yup.object({
    name: Yup.string().required('The name is required.')
});

export const initialCreateGenreValues: CreateGenreDTO = {
    name: ''
};

export const fetchCreateGenre = (values: CreateGenreDTO, token: string) => {
    // console.log(token);
    const genre: CreateGenreDTO = {
        name: values.name
    }
    store.dispatch(createGenre(genre, token));
}

// Update Genre
export interface UpdateGenreDTO {
    name: string
};

export interface GenrePosition {
    id: string;
    index: number;
};

export const validationUpdateGenreSchema: Yup.SchemaOf<UpdateGenreDTO> = Yup.object({
    name: Yup.string().required('Name is required.')
});

export const initialUpdateGenreValues: UpdateGenreDTO = {
    name: ''
};

export const updateGenreForm = (
    values: UpdateGenreDTO,
    genrePosition: GenrePosition,
    token: string
) => {
    console.log(values, genrePosition)
    store.dispatch(fetchUpdateGenre(values, genrePosition, token));
};

// Delete Genre
export interface DeleteGenreDTO {
    id: string
};