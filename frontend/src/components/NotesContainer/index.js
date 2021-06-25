import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import { getNotes } from '../../store/notes';
import NoteFormModal from '../NoteFormModal';
import './Notes.css';
import dateFormat from 'dateformat';

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const { notebookId } = useParams();

  notes.sort(function (a, b) {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });

  const calcDate = (date) => {
    if (dateFormat(date, 'DDDD') === dateFormat(date, 'dddd')) {
      return dateFormat(date, 'mediumDate');
    } else {
      return dateFormat(date, 'DDDD');
    }
  };

  useEffect(() => {
    dispatch(getNotes(notebookId));
  }, [dispatch]);

  return (
    <>
      <div className='notes__header'>
        <div>
          <Link to='/notebooks' className='notes__back'>
            <i className="fas fa-arrow-left" />
          </Link>
          <span className='notes__header-title'>Notes</span>
        </div>
        <NoteFormModal />
      </div>
      <div className='notes__container'>
        {notes.map(note => (
          <div key={note.id} className='notes' style={{ backgroundColor: note.color }}>
            <div className='notes__stop-overflow'>
              <div className='notes__title'>{note.title}</div>
              <div className='notes__content'>{note.content}</div>
            </div>
            <div className='notes__date'>{calcDate(note.updatedAt)}</div>
          </div>
        ))}
      </div>

    </>
  );
};

export default NotesContainer;
