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
      <HeadingStyle>popular movies:</HeadingStyle>
      <Movies>
      {popular.map((movie) => (
        <Movie
          name={movie.original_title}
          descriptiion={movie.overview}
          id={movie.id}
          poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          rating={movie.vote_average}
          key={movie.id}
        ></Movie>
      ))}
      </Movies>
    </MoviesStyle>
  );
};

const MoviesStyle = styled(motion.div)`
 
 padding: 0rem 5rem;
`;

const HeadingStyle=styled(motion.h2)`
padding: 4rem 0rem;
font-size: 3.5rem;
color: #e9e6e6;
`
const Movies=styled(motion.div)`

min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

`
export default Home;
