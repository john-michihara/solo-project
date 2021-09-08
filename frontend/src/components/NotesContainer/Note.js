import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import dateFormat from "dateformat";
import Quill from "quill";

import { getNoteToDelete } from "../../store/notes";
import EditNoteFormModal from "../EditNoteFormModal";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const [quillText, setQuillText] = useState();

  const handleClickDelete = () => {
    dispatch(getNoteToDelete(note.id));
  };

  const calcDate = (date) => {
    if (dateFormat(date, "DDDD") === dateFormat(date, "dddd")) {
      return dateFormat(date, "mediumDate");
    } else {
      return dateFormat(date, "DDDD");
    }
  };

  const wrapperRef = useCallback(
    (wrapper) => {
      if (wrapper === null) return;
      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      const q = new Quill(editor, { theme: "snow" });
      q.setContents(note.content);
      setQuillText(q.getText());
    },
    [note]
  );

  return (
    <div
      key={note.id}
      className="notes"
      style={{ backgroundColor: note.color }}
    >
      <div className="notes__stop-overflow">
        <div className="notes__title">{note.title}</div>
        <div className="notes__content">{quillText}</div>
        <div ref={wrapperRef} style={{ display: "none" }} />
      </div>
      <div className="notes__bottom-container">
        <div className="notes__date">{calcDate(note.updatedAt)}</div>
        <div>
          <EditNoteFormModal note={note} />
          <button onClick={handleClickDelete} className="notes__button">
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
