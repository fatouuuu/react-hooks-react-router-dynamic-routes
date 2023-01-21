import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import { movies } from "../data";

function App() {
  const [data, setState] = useState({movies});

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/movies" element={<MoviesPage data={data} setState={setState} />}>
        </Route>
        <Route path="/" element={<div>Home</div>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
