import { apiURL, apiKey } from "../config/config";
import apiCaller from "../network/apiCaller";

export const getMovies = async () => {
  try {
    const url =
      apiURL + `movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const res = await apiCaller("GET", url, null);
    return res;
  } catch (error) {
    return error;
  }
};
