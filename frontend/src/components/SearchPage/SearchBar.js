import React from 'react';
import './SearchPage.css';

const SearchBar = ({ input, updateInput }) => {
  return (
    <div className='searchbar__container'>
      <input
        value={input}
        placeholder={'Search through all your notebooks and notes'}
        onChange={(e) => updateInput(e.target.value)}
        className='searchbar__input'
      />
    </div>
  )
};

export default SearchBar;
