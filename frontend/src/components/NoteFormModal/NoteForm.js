import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './NoteForm.css';

function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // return dispatch(sessionActions.login({ credential, password })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
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
