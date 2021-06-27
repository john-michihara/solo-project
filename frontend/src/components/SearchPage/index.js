import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotebooks } from '../../store/notebooks';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [notebooksDefault, setNotebooksDefault] = useState([]);
  const [notebooks, setNotebooks] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  const fetchData = async () => {
    const data = await dispatch(getNotebooks(user.id));
    setNotebooksDefault(data);
    setNotebooks([]);
  };

  const updateInput = async (input) => {
    const filtered = notebooksDefault.filter(notebook => {
      return notebook.title.toLowerCase().includes(input.toLowerCase())
    });
    setInput(input);

    if (!input) {
      setNotebooks([]);
    } else {
      setNotebooks(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <SearchBar
        input={input}
        updateInput={updateInput}
      />
      <SearchList notebooks={notebooks} />
    </>
  );
};

export default SearchPage;
