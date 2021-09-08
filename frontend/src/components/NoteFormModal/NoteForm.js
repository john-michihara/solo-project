import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Quill from "quill";

import { createNote } from "../../store/notes";
import "quill/dist/quill.snow.css";
import "./NoteForm.css";

const colors = [
  "#fad154",
  "#85ecd9",
  "#c4ffed",
  "#dff590",
  "#dae8f0",
  "#ffed7e",
  "#ffda21",
  "#b3d9e6",
  "#d1ebb8",
  "#d1d9c9",
  "#ffdb70",
  "#e3e3e3",
  "#d5e0e3",
  "#ffc37d",
  "#bfdac2",
  "#ffffff",
];

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

function NoteForm({ setShowModal }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [quill, setQuill] = useState();
  const [color, setColor] = useState("#ffffff");

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, { theme: "snow", modules: { toolbar } });
    setQuill(q);
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    setColor(colors[getRandomInt(colors.length)]);
    setTitle("Title");
  }, []);

  const userId = useSelector((state) => state.session.user.id);
  const { notebookId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = {
      title,
      content: quill.getContents(),
      notebookId,
      userId,
      color,
    };
    console.log(noteData);
    await dispatch(createNote(noteData));
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

      <span>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="note-form__color-input"
        />
      </span>
      <div className="container" ref={wrapperRef}></div>
    </form>
  );
}

export default NoteForm;
