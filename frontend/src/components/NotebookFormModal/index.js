import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NotebookForm from './NotebookForm';

function NotebookFormModal({ notebook }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <i class="fas fa-info-circle" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NotebookForm notebook={notebook} />
        </Modal>
      )}
    </>
  );
}

export default NotebookFormModal;
