import { setArtists } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Artist } from "../models/artist";

export const getArtists = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/artists/");

    if (response.status !== 200) return "";

    const artists: Artist[] = await response.json();
    // console.log(artists);
    dispatch(setArtists(artists));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};