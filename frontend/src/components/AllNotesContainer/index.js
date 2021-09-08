import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAllNotes } from "../../store/notes";
import Note from "../NotesContainer/Note";
import "../NotesContainer/Notes.css";

const AllNotesContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector((state) => Object.values(state.notes));
  const user = useSelector((state) => state.session.user);

  if (!user) history.push("/");

  notes.sort(function (a, b) {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });

  useEffect(() => {
    if (user) {
      dispatch(getAllNotes(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="notes__header">
        <h1 className="notes__header-title">All Notes</h1>
      </div>
      <div className="notes__container">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </>
  );
};

export default AllNotesContainer;
