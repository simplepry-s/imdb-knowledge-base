import React, { useState } from "react";
import { Input } from "./";
var randomWords = require("random-words");

const Search = props => {
  const [search, setSearch] = useState("");
  const handleChange = value => {
    console.log(value);
    setSearch(value);
  };
  const clearSearch = () => {
    setSearch("");
  };

  const submitSearch = e => {
    e.preventDefault();
    props.search(search);
    clearSearch();
  };

  const randomSearch = e => {
    e.preventDefault();
    const random = randomWords();
    setSearch(random)
    props.search(random);
    clearSearch();
  };
  return (
    <form className="search">
      <Input
        classname="search-input"
        name="search"
        type="text"
        placeholder="find it!"
        value={search}
        onChange={handleChange}
        required
        label="search"
      />
      <input onClick={submitSearch} type="submit" value="SEARCH" />
      <input onClick={randomSearch} type="submit" value="RANDOM" />
    </form>
  );
};
export default Search;
