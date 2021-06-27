import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Account.css';

function Account({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push('/');
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <div className='account__modal'>
        <div className='account__card'>
          <div className='account__icon'>{user ? user.username[0].toLowerCase() : '?'}</div>
          <div className='account__username'>{user.username}</div>
          <button onClick={logout} className='account__signout-btn'>Sign Out</button>
        </div>
        <div className='account__details'></div>
      </div>
    </>
  );
}

export default Account;
