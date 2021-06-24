import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebookToEdit } from "../../store/notebooks";
import './NotebookForm.css';

const coverUrls = [
  'https://images.unsplash.com/photo-1615507184018-47dd4ef0e4bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1528459105426-b9548367069b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1506792006437-256b665541e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1618331833071-ce81bd50d300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1609985986188-1b457d80e609?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1609330662708-922b952d878d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1517167685284-96a27681ad75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1613946576929-3cc54e1cb5ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1613533107702-3295757a6395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1611453236536-13f556c4f7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1541580621-39f717ce77cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1609189114677-30ec7457c1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1592691669956-fb9a6ca97ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1535083252457-6080fe29be45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1595119293311-fa1b07af62a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
];

function NotebookForm({ notebook }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const userId = useSelector(state => state.session.user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const notebookData = {
      title,
      coverUrl,
      id: notebook.id,
      userId
    };
    await dispatch(getNotebookToEdit(notebookData));
  };

  useEffect(() => {
    setTitle(notebook.title);
    setCoverUrl(notebook.coverUrl);
  }, []);

  const handleClick = (e) => {
    setCoverUrl(e.target.src);
  };

  return (
    <>
      <form className='notebook-form' onSubmit={handleSubmit}>

        <div className='notebook-form__card'>
          <h2 className="notebook-form__title">Info</h2>
          <div className='notebook-form__image-container'>
            <img src={coverUrl} className="notebook-form__image" />
          </div>
          <div className='notebook-form__inputs-container'>
            <label> Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="notebook-form__input"
                key={notebook.id}
              />
            </label>Cover Link
            <label>
              <input
                type='text'
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                required
                className="notebook-form__input"
                key={notebook.id}
              />
            </label>
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className='notebook-form__defaults'>
          {coverUrls.map((url, idx) => (
            <div
              className="notebook-form__image"
              key={idx}
              value={url}
              onClick={handleClick}>
              <img src={url} className="notebook-form__image" />
            </div>
          ))}
        </div>

      </form>
    </>
  );
}

export default NotebookForm;
