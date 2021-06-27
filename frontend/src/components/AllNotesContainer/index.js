import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes, getNoteToDelete } from '../../store/notes';
import dateFormat from 'dateformat';
import EditNoteFormModal from '../EditNoteFormModal';
import '../NotesContainer/Notes.css';

const AllNotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const user = useSelector(state => state.session.user);

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
  };

  useEffect(() => {
    if (user) {
      dispatch(getAllNotes(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className='notes__header'>
        <h1 className="notes__header-title">All Notes</h1>
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

export default AllNotesContainer;
