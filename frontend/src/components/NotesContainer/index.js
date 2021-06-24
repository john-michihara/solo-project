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
      <div className='notes__container'>
        {notes.map(note => (
          <div key={note.id} className='notes'>
            <h2 className='notes__title'>{note.title}</h2>
            <p className='notes__content'>{note.content}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default NotesContainer;
