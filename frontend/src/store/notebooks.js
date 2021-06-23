import { csrfFetch } from "./csrf";

const SET_NOTEBOOKS = 'notebooks/SET_NOTEBOOKS';
const ADD_NOTEBOOK = 'notebooks/ADD_NOTEBOOK';
const EDIT_NOTEBOOK = 'notebooks/EDIT_NOTEBOOK';
const DELETE_NOTEBOOK = 'notebooks/DELETE_NOTEBOOK';

const setNotebooks = (notebooks) => ({
  type: SET_NOTEBOOKS,
  notebooks
});

const addNotebook = (notebook) => ({
  type: ADD_NOTEBOOK,
  notebook
});

const editNotebook = (notebook) => ({
  type: EDIT_NOTEBOOK,
  notebook
})

const deleteNotebook = (notebook) => ({
  type: DELETE_NOTEBOOK,
  notebook
})

export const getNotebooks = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/notebooks`);
  const notebooks = await res.json();
  dispatch(setNotebooks(notebooks));
};

export const createNotebook = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/notebooks`, {
    method: 'POST'
  });

  const notebook = await res.json();
  dispatch(addNotebook(notebook));
  return notebook;
};

export const getNotebookToEdit = (notebookData) => async (dispatch) => {
  console.log(notebookData);
  const res = await csrfFetch(`/api/notebooks/${notebookData.id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notebookData })
  });
  const notebook = await res.json();
  dispatch(editNotebook(notebook));
  return notebook;
};

export const getNotebookToDelete = (notebookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${notebookId}`, {
    method: 'DELETE'
  });
  const notebook = await res.json();
  dispatch(deleteNotebook(notebook));
};

const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  let allNotebooks = {};
  switch (action.type) {
    case SET_NOTEBOOKS:
      allNotebooks = {};
      action.notebooks.forEach(notebook => {
        allNotebooks[notebook.id] = notebook;
      })

      return {
        ...state,
        ...allNotebooks
      }

    case ADD_NOTEBOOK:
      allNotebooks = {};
      allNotebooks[action.notebook.id] = action.notebook;

      return {
        ...state,
        ...allNotebooks
      }

    case EDIT_NOTEBOOK:
      allNotebooks = { ...state };
      allNotebooks[action.notebook.id] = action.notebook;

      return {
        ...state,
        ...allNotebooks
      }

    case DELETE_NOTEBOOK:
      allNotebooks = { ...state };
      delete allNotebooks[action.notebook.id]
      return allNotebooks;

    default:
      return state;
  }
}

export default notebooksReducer;
