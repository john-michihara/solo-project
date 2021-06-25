import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { getNotebooks, createNotebook, getNotebookToDelete } from '../../store/notebooks';
import NotebookFormModal from "../NotebookFormModal";
import './Notebooks.css';

const NotebooksContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notebooks = useSelector(state => Object.values(state.notebooks));

  // Not sure if this is the best way to sort notebooks by updatedAt column.
  // I wanted to add 'order: [['title', 'DESC']]' to api route but I think normalization causes it to be sorted by id again.
  notebooks.sort(function (a, b) {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });

  const user = useSelector(state => state.session.user)
  if (!user) history.push('/');

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
        <button
          className='notebooks__add-button'
          onClick={handleClickCreate}
        >
          + Notebook
        </button>
      </div>
      <div className='notebooks__container'>
        {notebooks.map(notebook => (
          <div key={notebook.id} className='notebooks'>
            <Link to={`notebooks/${notebook.id}`}>
              <div className='notebooks__cover-overlay'>
                <img src={notebook.coverUrl}
                  className='notebooks__cover' />
              </div>
            </Link>
            <h2 className='notebooks__title'>{notebook.title}</h2>
            <NotebookFormModal notebook={notebook} />
            <button onClick={() => handleClickDelete(notebook.id)} className='notebooks__button'>
              <i className="fas fa-trash" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotebooksContainer;
