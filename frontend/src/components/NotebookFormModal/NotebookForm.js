import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebookToEdit } from "../../store/notebooks";
import './NotebookForm.css';

function NoteForm({ notebook }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const userId = useSelector(state => state.session.user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notebookData = {
      title,
      coverUrl,
      id: notebook.id,
      userId
    };
    await dispatch(getNotebookToEdit(notebookData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type='text'
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NoteForm;
