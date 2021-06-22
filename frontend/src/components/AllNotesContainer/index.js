import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from '../../store/notes';
import './AllNotesContainer.css';

const AllNotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      dispatch(getAllNotes(user.id));
    }
  }, [dispatch]);

  return (
    <>
      <h1>All Notes</h1>
      <div className='notes__container'>
        {notes.map(note => (
          <div key={note.id} className='notes__card'>
            <h2 className='notes__card-title'>{note.title}</h2>
            <p className='notes__card-content'>{note.content}</p>
            <p className='notes__card-date'>{note.updatedAt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllNotesContainer;
