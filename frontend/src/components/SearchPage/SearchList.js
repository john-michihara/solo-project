import React from 'react';

const SearchList = ({ notebooks = [] }) => {
  return (
    <>
      {notebooks.map((notebook) => {
        if (notebook) {
          return (
            <div key={notebook.id}>
              <h1>{notebook.title}</h1>
            </div>
          )
        }
        return null;
      })}
    </>
  );
};

export default SearchList;
