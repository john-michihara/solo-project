import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNotebooks } from "../../store/notebooks";
import { getAllNotes } from "../../store/notes";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

const SearchPage = () => {
  const [input, setInput] = useState("");
  const [notebooksDefault, setNotebooksDefault] = useState([]);
  const [notebooks, setNotebooks] = useState([]);
  const [notesDefault, setNotesDefault] = useState([]);
  const [notes, setNotes] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  if (!user) history.push("/");

  const fetchData = async () => {
    const notebooksData = await dispatch(getNotebooks(user.id));
    const notesData = await dispatch(getAllNotes(user.id));

    setNotebooks(notebooksData);
    setNotebooksDefault(notebooksData);
    setNotes(notesData);
    setNotesDefault(notesData);
  };

  const updateInput = async (input) => {
    const filteredNotebooks = notebooksDefault.filter((notebook) => {
      return notebook.title.toLowerCase().includes(input.toLowerCase());
    });
    const filteredNotes = notesDefault.filter((note) => {
      return note.title.toLowerCase().includes(input.toLowerCase());
    });

    setInput(input);
    setNotebooks(filteredNotebooks);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchBar input={input} updateInput={updateInput} />
      <SearchList notebooks={notebooks} notes={notes} />
    </>
  );
};

export default SearchPage;
