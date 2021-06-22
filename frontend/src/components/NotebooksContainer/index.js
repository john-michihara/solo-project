import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getNotebooks, createNotebook } from '../../store/notebooks';
import './Notebooks.css';

const NotebooksContainer = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector(state => Object.values(state.notebooks));
  const user = useSelector(state => state.session.user)

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("I was clicked!")
    await dispatch(createNotebook(user.id));
  };

  useEffect(() => {
    if (user) {
      dispatch(getNotebooks(user.id));
    }
  }, [dispatch]);

  return (
    <>
      <div className='notebooks__header'>
        <h1 className='notebooks__header-title'>Notebooks</h1>
        <button className='notebooks__add-notebook' onClick={e => handleClick(e)}>+ Notebook</button>
      </div>
      <div className='notebooks__container'>
        {notebooks.map(notebook => (
          <div key={notebook.id} className='notebooks'>
            <Link to={`notebooks/${notebook.id}`}>
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
