import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default Router;
