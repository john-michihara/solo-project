import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NotebookForm from './NotebookForm';
import './NotebookForm.css'

function NotebookFormModal({ notebook }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='notebooks__edit'>
        <i className="fas fa-info-circle" />
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
