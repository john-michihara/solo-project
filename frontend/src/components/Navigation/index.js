import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import NoteFormModal from '../NoteFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className='nav__container'>
      <div className='nav__section1'>
        <span className='nav__icon'>
          <i className="fas fa-search nav__icon" />
        </span>
        <span className='nav__icon'>
          <i className="fas fa-tag" />
        </span>
      </div>
      <div className='nav__section2'>
        <NavLink to='/notebooks' className='nav__link'>Notebooks</NavLink>
        <NavLink to='/all-notes' className='nav__link'>All Notes</NavLink>
      </div>
      <div className='nav__section3'>
        <NoteFormModal />
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
