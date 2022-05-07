import { Album } from "./album";
import { Artist } from "./artist";

export interface Song {
    id: string;
    name: string;
    duration: string;
    releaseDate: string;
    audioFile: string;
    digitalPrice: number;
    artists: Artist[];
    album: Album;
}