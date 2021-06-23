import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { createNote } from '../../store/notes';
import './NoteForm.css';

function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const userId = useSelector(state => state.session.user.id);
  const { notebookId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = { title, content, notebookId, userId };
    await dispatch(createNote(noteData));
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div>
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className='note-form__input note-form__title'
          />
        </label>
        <button type="submit">Submit</button>
      </div>

      <div className='note-form__content'>
        <label>
          <input
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='note-form__input '
          />
        </label>
      </div>

    </form>
  );
}

export default NoteForm;
