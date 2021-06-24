import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NoteForm from './NoteForm';
import './NoteForm.css';

function NoteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='notes__button'>
        + Note
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NoteForm />
        </Modal>
      )}
    </>
  );
}

export default NoteFormModal;
