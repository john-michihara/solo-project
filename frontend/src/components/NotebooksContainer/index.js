import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getNotebooks, createNotebook, getNotebookToDelete } from '../../store/notebooks';
import './Notebooks.css';

const NotebooksContainer = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector(state => Object.values(state.notebooks));
  const user = useSelector(state => state.session.user)

  const handleClickCreate = async () => {
    await dispatch(createNotebook(user.id));
  };

  const handleClickDelete = async (notebookId) => {
    await dispatch(getNotebookToDelete(notebookId));
  };

  useEffect(() => {
    if (user) {
      dispatch(getNotebooks(user.id));
    }
  }, [dispatch, user]);

  return (
    <>
      <div className='notebooks__header'>
        <h1 className='notebooks__header-title'>Notebooks</h1>
        <button className='notebooks__add-notebook' onClick={handleClickCreate}>+ Notebook</button>
      </div>
      <div className='notebooks__container'>
        {notebooks.map(notebook => (
          <div key={notebook.id} className='notebooks'>
            <Link to={`notebooks/${notebook.id}`}>
              <img src={notebook.coverUrl} className='notebooks__cover' />
            </Link>
            <h2 className='notebooks__title'>{notebook.title}</h2>
            <button onClick={() => handleClickDelete(notebook.id)}>
              <i class="fas fa-trash" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotebooksContainer;
