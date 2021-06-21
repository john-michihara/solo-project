import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getNotebooks } from '../../store/notebooks';
import './Notebooks.css';

const NotebooksContainer = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector(state => Object.values(state.notebooks));
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      dispatch(getNotebooks(user.id));
    }
  }, [dispatch]);

  return (
    <>
      <h1 className='notebooks__header'>Notebooks</h1>
      <div className='notebooks__container'>
        {notebooks.map(notebook => (
          <div key={notebook.id} className='notebooks'>
            <Link to='/notes'>
              <img src={notebook.coverUrl} className='notebooks__cover' />
            </Link>
            <h2 className='notebooks__title'>{notebook.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotebooksContainer;
