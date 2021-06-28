import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LandingPage.css';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupModal from '../SignupFormPage/SignupModal.js';

function LandingPage() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (user) {
    history.push('/notebooks');
  }

  return (
    <>
      <div className='landing__container'>
        <div className='landing__card'>
          <div className='landing__card-left'>
            <img className='landing__image' src='/images/portfolio.svg' />
          </div>
          <div className='landing__card-right'>
            <img src='/images/goat.svg' className='landing__icon' />
            <div className='landing__title'>Evergoat</div>
            <div className='landing__phrase'>Your GOAT-to notetaking app</div>
            <LoginForm />
            <div className='landing__no-account'>
              <div>Don't have an account?</div>
              <SignupModal />
            </div>
          </div>
        </div>
        <header className='landing__header'>


        </header>
        <div>

        </div>
      </div>
      <div>
        image
      </div>
    </>
  );

}

export default LandingPage;
