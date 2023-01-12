import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
  }

  function handleSearchwordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchwordChange} />
      </form>
    </div>
  );
}
