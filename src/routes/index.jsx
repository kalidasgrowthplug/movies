import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Movie from "../components/movie/movie";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/movie/:id" index element={<Movie />} />
    </Routes>
  );
};

export default Router;
