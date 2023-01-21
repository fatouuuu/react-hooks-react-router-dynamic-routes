import React from "react";
import { Link } from "react-router-dom";


function MoviesList({ movies }) {
  const renderMovies = movies.map((movie, index) => (
    <li key={index}>
      <Link to={`/movies/${index}`}>{movie.title}</Link>
    </li>
  ));


  return <ul>{renderMovies}</ul>;
}

export default MoviesList;