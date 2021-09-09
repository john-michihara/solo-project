import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import dateFormat from "dateformat";
import Quill from "quill";

import EditNoteForm from "../EditNoteFormModal/EditNoteForm";
import { getNoteToDelete } from "../../store/notes";
import { Modal } from "../../context/Modal";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const [quillText, setQuillText] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleClickDelete = () => {
    dispatch(getNoteToDelete(note.id));
  };

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

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
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditNoteForm note={note} setShowModal={setShowModal} />
        </Modal>
      )}
      <div
        key={note.id}
        className="notes"
        style={{ backgroundColor: note.color }}
        onClick={openModal}
      >
        <div className="notes__stop-overflow">
          <div className="notes__title">{note.title}</div>
          <div className="notes__content">{quillText}</div>
          <div ref={wrapperRef} style={{ display: "none" }} />
        </div>
        <div className="notes__bottom-container">
          <div className="notes__date">{calcDate(note.updatedAt)}</div>
          <div>
            <button onClick={handleClickDelete} className="notes__button">
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
