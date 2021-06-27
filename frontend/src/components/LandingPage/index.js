import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LandingPage.css';

function LandingPage() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (user) {
    history.push('/notebooks');
  }

  return (
    <>
      <div className='landing__container'>
        <header className='landing__header'>
          <img src='/images/goat.svg' className='landing__icon' />
          <div className='landing__title'>evergoat</div>
        </header>
        <div>
          <h2>Your GOAT-to notetaking app!</h2>
        </div>
      </div>
      <div>
        image
      </div>
    </>
  );

}

export default LandingPage;
