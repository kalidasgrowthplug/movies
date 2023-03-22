import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  return <div>movie</div>;
};

export default Movie;
