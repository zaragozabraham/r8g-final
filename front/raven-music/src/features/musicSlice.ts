import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { Song } from '../models/song';
import { Genre } from '../models/genre';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface MusicState {
    artists: Artist[];
    albums: Album[];
    songs: Song[];
    genres: Genre[];
    album: Album;
    song: Song;
}

const initialState: MusicState = {
    artists: [],
    albums: [],
    songs: [],
    genres: [],
    album: undefined,
    song: undefined
}

export const MusicSlice = createSlice({
    name: 'Music',
    initialState,
    reducers: {
        setArtists: (state, action) => {
            state.artists = action.payload;
        },
        addArtist: (state, action) => {
            state.artists.push(action.payload);
        },
        updateArtist: (state, action) => {
            state.artists[action.payload.index] = action.payload.artist;
        },
        deleteArtist: (state, action) => {
            state.artists.splice(action.payload, 1);
        },
        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
        addAlbum: (state, action) => {
            state.albums.push(action.payload);
        },
        updateAlbum: (state, action) => {
            state.albums[action.payload.index] = action.payload.album;
        },
        deleteAlbum: (state, action) => {
            state.albums.splice(action.payload, 1);
        },
        setSongs: (state, action) => {
            state.songs = action.payload;
        },
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
        updateSong: (state, action) => {
            state.songs[action.payload.index] = action.payload.song;
        },
        deleteSong: (state, action) => {
            state.songs.splice(action.payload, 1);
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        addGenre: (state, action) => {
            state.genres.push(action.payload);
        },
        updateGenre: (state, action) => {
            state.genres[action.payload.index] = action.payload.genre;
        },
        deleteGenre: (state, action) => {
            state.genres.splice(action.payload, 1);
        },
        setSelectedAlbum: (state, action) => {
            state.album = action.payload;
        },
        setSelectedSong: (state, action) => {
            state.song = action.payload;
        }
    }
})

export const musicSelector = (state: RootState) => state.music;

export const artistsSelector = (state: RootState) => musicSelector(state).artists;
export const albumsSelector = (state: RootState) => musicSelector(state).albums;
export const songsSelector = (state: RootState) => musicSelector(state).songs;
export const genresSelector = (state: RootState) => musicSelector(state).genres;
export const albumSelector = (state: RootState) => musicSelector(state).album;
export const songSelector = (state: RootState) => musicSelector(state).song;

export const {
    setArtists,
    addArtist,
    updateArtist,
    deleteArtist,
    setAlbums,
    addAlbum,
    updateAlbum,
    deleteAlbum,
    setSongs,
    addSong,
    updateSong,
    deleteSong,
    setGenres,
    addGenre,
    updateGenre,
    deleteGenre,
    setSelectedAlbum,
    setSelectedSong
} = MusicSlice.actions;

export default MusicSlice.reducer;