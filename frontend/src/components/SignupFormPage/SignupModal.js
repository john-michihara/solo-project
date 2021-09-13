import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "./index.js";

function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="landing__create-account"
      >
        Create an account
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;
