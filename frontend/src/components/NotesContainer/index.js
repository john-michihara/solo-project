import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from '../../store/notes';

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => Object.values(state.notes));
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      dispatch(getNotes(user.id));
    }
  }, [dispatch]);

  return (
    <>
      <h1>All Notes</h1>
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
