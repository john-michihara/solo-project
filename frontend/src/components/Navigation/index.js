import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
        <button>
          <i className="fas fa-search" />
        </button>
        <button>
          <i className="fas fa-tag" />
        </button>
      </div>
      <div className='nav__section2'>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to='/notebooks'>Notebooks</NavLink>
            <NavLink to='/all-notes'>All Notes</NavLink>
          </li>
        </ul>
      </div>
      <div className='nav__section3'>
        <button>
          <i className="fas fa-edit" />
        </button>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
