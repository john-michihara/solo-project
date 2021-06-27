import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
// import NoteFormModal from '../NoteFormModal';
import AccountModal from '../AccountModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <nav className='nav__container'>
          {isLoaded && sessionLinks}
          <div className='nav__section1'>
            <NavLink to='/search'>
              <span className='nav__icon'>
                <i className="fas fa-search nav__icon" />
              </span>
            </NavLink>
            <span className='nav__icon'>
              <i className="fas fa-tag" />
            </span>
          </div>
          <div className='nav__section2'>
            <NavLink to='/notebooks' className='nav__link'>Notebooks</NavLink>
            <NavLink to='/all-notes' className='nav__link'>All Notes</NavLink>
          </div>
          <div className='nav__section3'>
            <AccountModal user={sessionUser} />
          </div>
        </nav>
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
    <div >
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
