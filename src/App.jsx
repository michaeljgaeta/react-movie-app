import React from "react";
import Search from "./Components/Search";
import "./index.css";

export default function App() {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>

      <main>
        <Search />
      </main>
    </div>
  );
}
