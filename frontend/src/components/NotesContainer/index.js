import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { getNotes } from "../../store/notes";
import NoteFormModal from "../NoteFormModal";
import "./Notes.css";
import { getNotebooks } from "../../store/notebooks";
import Note from "./Note";

const NotesContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector((state) => Object.values(state.notes));
  const notebooks = useSelector((state) => state.notebooks);
  const { notebookId } = useParams();
  const notebook = notebooks[notebookId];
  const user = useSelector((state) => state.session.user);

  if (!user) history.push("/");

  notes.sort(function (a, b) {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });

  useEffect(() => {
    dispatch(getNotes(notebookId));
    dispatch(getNotebooks(user.id));
  }, [dispatch]);

  return (
    <>
      <div className="notes__header">
        <div>
          <Link to="/notebooks" className="notes__back">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="notes__header-title">
            {notebook ? notebook.title : "Notes"}
          </span>
        </div>
        <NoteFormModal />
      </div>
      <div className="notes__container">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </>
  );
};

export default NotesContainer;
