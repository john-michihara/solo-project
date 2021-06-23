import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getNotes } from '../../store/notes';
import NoteFormModal from '../NoteFormModal';
import './Notes.css';

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const { notebookId } = useParams();

  useEffect(() => {
    dispatch(getNotes(notebookId));
  }, [dispatch]);

  return (
    <>
      <div className='notes__header'>
        <h1 className='notes__header-title'>Notes</h1>
        <NoteFormModal />
      </div>
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
