const baseURL = "https://api.themoviedb.org/3/movie/";
const apikey = "?api_key=ec2ee23496b32e90d6936d02014a5209";
const last = (page) => `&language=en-US&page=${page}`;

const popularMovie = `popular${apikey}${last(1)}`;
const topRatedMovie = `top_rated${apikey}${last(1)}`;
const upcomingMovies = `upcoming${apikey}${last(1)}`;

export const popularMovieURl = () => `${baseURL}${popularMovie}}`;
export const topRatedMovieURl = () => `${baseURL}${topRatedMovie}}`;
export const upcomingMoviesURL = () => `${baseURL}${upcomingMovies}`;
