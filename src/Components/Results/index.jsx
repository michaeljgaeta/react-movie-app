import React from "react";
import Movie from "./../Movie";
import "./index.css";

export default function Results({ results }) {
  return (
    <div className="results">
      {results.map((result) => (
        <Movie key={result.imdbID} result={result} />
      ))}
    </div>
  );
}
