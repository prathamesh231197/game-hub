import useData from "./useData";
import platform from "../data/platform";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platform, isLoading: false, error: null });
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
