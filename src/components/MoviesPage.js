import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import MoviesList from "./MovieList";
import MovieShow from "./MovieShow";


function MoviesPage({ movies }) {
  const match = useMatch() || {url: '/movies'};
  // console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />

      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Routes>
      <Route path={match.url} element={<h3>Choose a movie from the list above</h3>}>
      </Route>
      <Route path={`${match.url}/:movieId`} element={<MovieShow movies={movies} />}>
      </Route>
      </Routes>
    </div>
  );
}

export default MoviesPage;