import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Search YouTube</label>
          <input
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
