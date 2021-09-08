import React, { useCallback, useState } from "react";
import Quill from "quill";

import { useDispatch } from "react-redux";
import { getNoteToEdit } from "../../store/notes";
import "../NoteFormModal/NoteForm.css";

const toolbar = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

function EditNoteForm({ note, setShowModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(note.title);
  const [quill, setQuill] = useState("");
  const [color, setColor] = useState(note.color);

  const wrapperRef = useCallback(
    (wrapper) => {
      if (wrapper === null) return;
      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      const q = new Quill(editor, { theme: "snow", modules: { toolbar } });
      q.setContents(note.content);
      setQuill(q);
    },
    [note]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = {
      title,
      content: quill.getContents(),
      color,
      id: note.id,
    };
    await dispatch(getNoteToEdit(noteData));
    setShowModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="note-form"
      style={{ backgroundColor: color }}
    >
      <div className="note-form__title-container">
        <button type="submit" className="note-form__submit-button hidden">
          <i className="fas fa-check" />
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="note-form__input note-form__title"
        />
        <button type="submit" className="note-form__submit-button">
          <i className="fas fa-check" />
        </button>
      </div>

      <div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="note-form__color-input"
        />
      </div>

      <div className="container" ref={wrapperRef}></div>
    </form>
  );
}

export default EditNoteForm;
