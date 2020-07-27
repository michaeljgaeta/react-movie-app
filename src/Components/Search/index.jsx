import React from "react";
import "./index.css"

export default function Search() {
  return (
    <div className="searchbox-wrap">
      <input type="text" placeholder="Search for a movie..." className="searchbox" />
    </div>
  );
}
