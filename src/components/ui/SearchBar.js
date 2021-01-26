import React, { useState } from "react";
import propTypes from "prop-types";

export const SearchBar = ({ setCharacter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCharacter(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={inputValue}
        name="searchText"
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="search" type="submit">Buscar</button>
    </form>
  );
};

SearchBar.propTypes = {
  setCharacter: propTypes.func.isRequired,
};
