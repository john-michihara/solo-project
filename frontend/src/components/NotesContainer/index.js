import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getNotes } from '../../store/notes';
import NoteFormModal from '../NoteFormModal';

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const { notebookId } = useParams();

  useEffect(() => {
    dispatch(getNotes(notebookId));
  }, [dispatch]);

  return (
    <>
      <h1>Notes</h1>
      <NoteFormModal />
      <div>
        {notes.map(note => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesContainer;
