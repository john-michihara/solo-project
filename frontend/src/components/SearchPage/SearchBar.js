import React from 'react';

const SearchBar = ({ input, updateInput }) => {
  return (
    <input
      value={input}
      placeholder={'search'}
      onChange={(e) => updateInput(e.target.value)}
    />
  )
};

export default SearchBar;
