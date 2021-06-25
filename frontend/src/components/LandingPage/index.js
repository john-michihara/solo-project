import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandingPage() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  if (user) {
    history.push('/notebooks');
  }

  return (
    <>
      <div>
        <header>
          <img />
        </header>
      </div>
    </>
  );

}

export default LandingPage;
