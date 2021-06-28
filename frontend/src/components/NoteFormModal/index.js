import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NoteForm from './NoteForm';
import './NoteForm.css';

function NoteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='notes__add-button'>
        + Note
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NoteForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default NoteFormModal;
