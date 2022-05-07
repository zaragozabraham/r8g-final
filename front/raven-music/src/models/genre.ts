import { Album } from './album';

export interface Genre {
    id: string;
    name: string;
    albumGenres?: Album[];
}