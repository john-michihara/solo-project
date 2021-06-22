import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NoteForm from './NoteForm';

function NoteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <i className="fas fa-edit" />
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
