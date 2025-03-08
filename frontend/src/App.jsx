import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Name from "./pages/Name";
import Demographics from "./pages/Demographics";
import Goals from "./pages/Goals";
import Result from "./pages/Result";
import Delete from "./pages/Delete";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness-home/register" element={<Register />} />
      <Route path="/fitness-home/login" element={<Login />} />
      <Route path="/fitness-home/name" element={<Name />} />
      <Route path="/fitness-home/demographics" element={<Demographics />} />
      <Route path="/fitness-home/goals" element={<Goals />} />
      <Route path="/fitness-home/results" element={<Result />} />
      <Route path="/fitness-home/delete" element={<Delete />} />
    </Routes>
  );
};

export default App;
