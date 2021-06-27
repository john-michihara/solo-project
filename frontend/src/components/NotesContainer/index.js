import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom';
import { getNotes, getNoteToDelete } from '../../store/notes';
import NoteFormModal from '../NoteFormModal';
import EditNoteFormModal from '../EditNoteFormModal';
import './Notes.css';
import dateFormat from 'dateformat';
import { getNotebooks } from "../../store/notebooks";

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const notebooks = useSelector(state => state.notebooks);
  const { notebookId } = useParams();
  const notebook = notebooks[notebookId];
  const user = useSelector(state => state.session.user)

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

  const handleClickDelete = async (noteId) => {
    await dispatch(getNoteToDelete(noteId));
  }

  useEffect(() => {
    dispatch(getNotes(notebookId));
    dispatch(getNotebooks(user.id));
  }, [dispatch]);

  return (
    <>
      <div className='notes__header'>
        <div>
          <Link to='/notebooks' className='notes__back'>
            <i className="fas fa-arrow-left" />
          </Link>
          <span className='notes__header-title'>{notebook ? notebook.title : 'Notes'}</span>
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
            <div className='notes__bottom-container'>
              <div className='notes__date'>{calcDate(note.updatedAt)}</div>
              <div>
                <EditNoteFormModal note={note} />
                <button onClick={() => handleClickDelete(note.id)} className='notes__button'>
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default NotesContainer;
