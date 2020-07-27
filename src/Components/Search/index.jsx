import React from "react";
import "./index.css"

export default function Search(props) {
  return (
    <div className="searchbox-wrap">
      <input type="text" placeholder="Search for a movie..." className="searchbox" onChange={props.handleInput} onKeyPress={props.search}/>
    </div>
  );
}
