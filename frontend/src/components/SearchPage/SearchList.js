import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import NotebookFormModal from '../NotebookFormModal';
import EditNoteFormModal from '../EditNoteFormModal';
import { getNotebookToDelete } from '../../store/notebooks';
import './SearchPage.css';

const SearchList = ({ notebooks = [], notes = [] }) => {
  const dispatch = useDispatch;

  const calcDate = (date) => {
    if (dateFormat(date, 'DDDD') === dateFormat(date, 'dddd')) {
      return dateFormat(date, 'mediumDate');
    } else {
      return dateFormat(date, 'DDDD');
    }
  };

  const handleClickDelete = async (notebookId) => {
    await dispatch(getNotebookToDelete(notebookId));
  };

  return (
    <>
      <div className='search__container'>
        {notebooks.map((notebook) => {
          if (notebook) {
            return (
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
            )
          }
          return null;
        })}
        {notes.map((note) => {
          if (note) {
            return (
              <div key={note.id} className='notes' style={{ backgroundColor: note.color }}>
                <div className='notes__stop-overflow'>
                  <div className='notes__title'>{note.title}</div>
                  <div className='notes__content'>{note.content}</div>
                </div>
                <div className='notes__bottom-container'>
                  <div className='notes__date'>{calcDate(note.updatedAt)}</div>
                  <div>
                    <EditNoteFormModal note={note} />
                    <button onClick={() => handleClickDelete(note.id)} className='notes__button'>
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            )
          }
          return null;
        })}
      </div>
    </>
  );
};

export default SearchList;
