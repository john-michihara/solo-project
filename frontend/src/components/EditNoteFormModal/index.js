import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import EditNoteForm from './EditNoteForm';
import './EditNoteForm.css'

function EditNoteFormModal({ note }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <>
      <button onClick={openModal} className='edit-note__edit'>
        <i className="fas fa-info-circle" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditNoteForm note={note} />
        </Modal>
      )}
    </>
  );
}

export default EditNoteFormModal;
