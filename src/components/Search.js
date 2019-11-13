import React, { useState } from "react";
import { Input } from "./";

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

  return (
    <form className="search">
      <Input
        classname="search-input"
        name="search"
        type="text"
        placeholder="enter search"
        value={search}
        onChange={handleChange}
        required
        label="search"
      />
      <input onClick={submitSearch} type="submit" value="SEARCH" />
    </form>
  );
};
export default Search;
