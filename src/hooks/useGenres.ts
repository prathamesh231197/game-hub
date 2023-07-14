import useData from "./useData";
import genres from "../data/genre";
import { GameQuery } from "../App";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  // useData<Genre>("/genres");
  ({ data: genres, isLoading: false, error: null });
export default useGenres;
