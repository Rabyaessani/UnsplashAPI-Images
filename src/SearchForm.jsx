import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchValue) return;
    setSearchTerm(searchValue)
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Nature"
          onChange={(e)=>setSearchValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
