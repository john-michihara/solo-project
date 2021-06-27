import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import Account from './Account';
import './Account.css'

function AccountModal({ user }) {
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
      <div onClick={openModal} className='nav__account-icon'>
        {user ? user.username[0].toLowerCase() : '?'}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Account user={user} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AccountModal;
