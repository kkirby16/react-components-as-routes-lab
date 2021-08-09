import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div>
          <li>{movie.title}</li>
          <li>{movie.time}</li>
          <ul>{movie.genres}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
