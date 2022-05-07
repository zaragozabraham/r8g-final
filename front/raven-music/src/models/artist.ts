import { Album } from './album'
import { Song } from './song'

export interface Artist {
    id: string;
    name: string;
    last_name: string;
    nationality: string;
    image: string;
    albumArtist?: Album[];
    songArtist?: Song[];
}