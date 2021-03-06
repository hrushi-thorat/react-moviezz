import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadDetails } from "../Actions/DetailAction";
import { Link } from "react-router-dom";
const Movie = ({ name, descriptiion, poster, id, rating }) => {
  const stringpathID = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));

    document.body.style.overflow = "hidden";
  };

  return (
    <MovieStyle layoutId={stringpathID} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h2>{name}</h2>
        <p>{rating}/10</p>
        <motion.img
          layoutId={`image ${stringpathID}`}
          src={poster}
          alt={name}
        />
      </Link>
    </MovieStyle>
  );
};
const MovieStyle = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  background: white;
  overflow: hidden;
  display: inline-block;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export default Movie;
