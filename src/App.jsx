import React, { useState } from "react";
import axios from "axios";

import Search from "./Components/Search";
import Results from "./Components/Results";

import "./index.css";

export default function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {}
  });

  const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OPEN_MOVIE_API_KEY}`;

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiURL + "&s=" + state.query).then(({ data }) => {
        let results = data.Search;
        console.log(results);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (event) => {
    let query = event.target.value;

    setState((prevState) => {
      return { ...prevState, query: query };
    });
  };

  console.log(state.query);

  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}
