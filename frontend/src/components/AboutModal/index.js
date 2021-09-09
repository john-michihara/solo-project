import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";

import "./AboutModal.css";

const aboutSites = [
  {
    url: "https://github.com/john-michihara",
    icon: <i class="fab fa-github" />,
  },
  {
    url: "https://www.linkedin.com/in/john-michihara-305316167/",
    icon: <i class="fab fa-linkedin" />,
  },
  {
    url: "https://angel.co/u/john-michihara",
    icon: <i class="fab fa-angellist" />,
  },
];

const AboutModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <button onClick={openModal} className="about__button">
        About
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="about__modal">
            <div className="about__card">
              <div className="about__picture">
                <img src="/images/john.jpeg" />
              </div>
              <div className="about__username">Created by John Michihara</div>
              <ul className="about__links">
                {aboutSites.map((site, index) => (
                  <li key={index}>
                    <a href={site.url} target="_blank">
                      <span className="about__icon">{site.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about__details">
              <section className="about__thanks">
                <h2>Special Thanks</h2>
                <ul className="about__thanks-list">
                  <li>
                    <a href="https://unsplash.com/" target="_blank">
                      Unsplash
                    </a>{" "}
                    - Notebook covers
                  </li>
                  <li>
                    <a href="https://www.zoho.com/notebook/" target="_blank">
                      Flaticon
                    </a>{" "}
                    - Goat image and favicon
                  </li>
                  <li>
                    <a href="https://www.zoho.com/notebook/" target="_blank">
                      Zoho Notebook
                    </a>{" "}
                    - Cloned application
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AboutModal;
