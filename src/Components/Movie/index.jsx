import React from "react";
import "./index.css";

function Movie({ result }) {
  return (
    <div className="result">
      <img src={result.Poster} alt="movie poster" />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Movie;
