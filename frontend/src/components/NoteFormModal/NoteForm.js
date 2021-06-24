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
      <div className='note-form__title-container'>
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
      </div>

      <div className='note-form__toolbar'>
        <div>
          <span className='note-form__editor'>
            <i class="fas fa-bold" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-italic" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-underline" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-strikethrough" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-align-left" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-center" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-right" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-justify" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-outdent" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-indent" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-list" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-list-ol" />
          </span>
        </div>

      </div>

      <div className='note-form__content-container'>
        <label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='note-form__input note-form__content'
            autoFocus
          />
        </label>
      </div>

      <button type="submit" className='note-form__button'>Submit</button>

    </form>
  );
}

export default NoteForm;
