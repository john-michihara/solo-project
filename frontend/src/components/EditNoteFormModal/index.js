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
      <button onClick={openModal} className='notes__button'>
        <i className="fas fa-info-circle" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditNoteForm note={note} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditNoteFormModal;
