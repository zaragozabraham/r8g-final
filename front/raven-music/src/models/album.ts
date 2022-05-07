import { Genre } from './genre';
import { Artist } from './artist';
import { Song } from './song';

export interface Album {
    id: string;
    name: string;
    releaseDate: string;
    single: boolean;
    physicalStock: number;
    physicalPrice: number;
    digitalPrice: number;
    image: string;
    genres: Genre;
    artists: Artist[];
    songsAlbum?: Song[];
    ownedAlbumsID?: string[];
    orderAlbumID?: string[];
}