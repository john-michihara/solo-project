import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { createNote } from '../../store/notes';
import './NoteForm.css';

function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getColor = () => {
    const colors = ['#fad154', '#85ecd9', '#c4ffed', '#dff590', '#dae8f0', '#ffed7e', '#ffda21', '#b3d9e6', '#d1ebb8', '#d1d9c9', '#ffdb70', '#e3e3e3', '#d5e0e3', '#ffc37d', '#bfdac2', '#ffffff'];

    return colors[getRandomInt(colors.length)];
  };

  useEffect(() => {
    setColor(getColor());
    setTitle('Title')
  }, []);


  const userId = useSelector(state => state.session.user.id);
  const { notebookId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = { title, content, notebookId, userId, color };
    await dispatch(createNote(noteData));
  };

  return (
    <form onSubmit={handleSubmit} className="note-form" style={{ backgroundColor: color }}>
      <div
        className='note-form__title-container'>
        <button type="submit" className='note-form__submit-button hidden'>
          <i className="fas fa-check" />
        </button>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='note-form__input note-form__title'
        />
        <button type="submit" className='note-form__submit-button'>
          <i className="fas fa-check" />
        </button>
      </div>

      <div className='note-form__toolbar'>
        <div>
          <span className='note-form__editor'>
            <i class="fas fa-bold" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-italic" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-underline" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-strikethrough" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-align-left" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-center" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-right" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-align-justify" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-outdent" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-indent" />
          </span>
        </div>

        <div>
          <span className='note-form__editor'>
            <i class="fas fa-list" />
          </span>
          <span className='note-form__editor'>
            <i class="fas fa-list-ol" />
          </span>
        </div>

        <div>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="note-form__color-input"
          />
        </div>

      </div>

      <div className='note-form__content-container'>
        <label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='note-form__input note-form__content'
            autoFocus
          />
        </label>
      </div>



    </form>
  );
}

export default NoteForm;
