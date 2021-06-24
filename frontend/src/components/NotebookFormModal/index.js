import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import NotebookForm from './NotebookForm';
import './NotebookForm.css'

function NotebookFormModal({ notebook }) {
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
      <button onClick={openModal} className='notebooks__edit'>
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
