import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadmovies } from "../Actions/moviesAction";
import Movie from "../components/Movie";

const Home = () => {
  //fetching data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadmovies());
  }, [dispatch]);
  //getting data from state
  const { popular, top_rated, upcoming } = useSelector((state) => state.movies);
  console.log(popular);
  return (
    <MoviesStyle>
      {popular.map((movie) => (
        <Movie
          name={movie.original_title}
          descriptiion={movie.overview}
          id={movie.id}
          poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          key={movie.id}
        ></Movie>
      ))}
    </MoviesStyle>
  );
};

const MoviesStyle = styled(motion.div)`
  font-size: 1rem;
`;

export default Home;
