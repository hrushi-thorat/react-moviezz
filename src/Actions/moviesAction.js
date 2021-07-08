import axios from "axios";
import { popularMovieURl, topRatedMovieURl, upcomingMoviesURL } from "../api";
//fetch data
export const loadmovies = () => async (dispatch) => {
  //fexh axios
  const popularData = await axios.get(popularMovieURl());
  const topRatedData = await axios.get(topRatedMovieURl());
  const upcomingData = await axios.get(upcomingMoviesURL());

  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      popular: popularData.data.results,
      top_rated: topRatedData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};
