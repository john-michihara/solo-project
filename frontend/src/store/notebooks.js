const SET_NOTEBOOKS = 'notebooks/SET_NOTEBOOKS';

const setNotebooks = (notebooks) => ({
  type: SET_NOTEBOOKS,
  notebooks
});

export const getNotebooks = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/notebooks`);
  const notebooks = await res.json();
  dispatch(setNotebooks(notebooks));
};

const initialState = {};

const notebooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTEBOOKS:
      const allNotebooks = {};
      action.notebooks.forEach(notebook => {
        allNotebooks[notebook.id] = notebook;
      })

      return {
        ...state,
        ...allNotebooks
      }

    default:
      return state;
  }
}

export default notebooksReducer;
