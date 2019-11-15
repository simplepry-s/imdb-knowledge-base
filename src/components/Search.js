import React, { useState } from "react";
import { Input } from "./";
import { Button } from "react-bootstrap";

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
    setSearch(random);
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
      <div className="flex-button">
        <Button
          className="search-button"
          onClick={submitSearch}
          variant="outline-light"
          disabled={search ? false : true}
        >
          SEARCH
        </Button>

        <Button
          className="random-button"
          onClick={randomSearch}
          variant="outline-light"
        >
          RANDOM
        </Button>
      </div>
    </form>
  );
};
export default Search;
