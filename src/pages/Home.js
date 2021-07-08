import React, { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { loadmovies } from "../Actions/moviesAction";

const Home = () => {
  //fetching data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadmovies());
  });

  return (
    <div>
      <h1>HEllo Home</h1>
    </div>
  );
};

export default Home;
