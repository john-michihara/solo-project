const SET_NOTES = 'notebooks/SET_NOTES';
const SET_ALL_NOTES = 'notebooks/SET_ALL_NOTES';
const ADD_NOTE = 'notebooks/ADD_NOTE';

const setNotes = (notes) => ({
  type: SET_NOTES,
  notes
})

const setAllNotes = (notes) => ({
  type: SET_ALL_NOTES,
  notes
});

const addNote = (note) => ({
  type: ADD_NOTE,
  note
});

export const getNotes = (notebookId) => async (dispatch) => {
  const res = await fetch(`/api/notebooks/${notebookId}/notes`);
  const notes = await res.json();
  dispatch(setNotes(notes));
};

export const getAllNotes = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/notes`);
  const notes = await res.json();
  dispatch(setAllNotes(notes));
};

export const createNote = (noteData) => async (dispatch) => {
  const res = await fetch(`/api/notebooks/${noteData.notebookId}/notes`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ noteData })
  });

  const note = await res.json();
  dispatch(addNote(note));
}

const initialState = {};

const notesReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case SET_NOTES:
      newState = {};
      action.notes.forEach(note => {
        newState[note.id] = note;
      });

      return {
        ...newState
      };

    case SET_ALL_NOTES:
      newState = {};
      action.notes.forEach(note => {
        newState[note.id] = note;
      });

      return {
        ...state,
        ...newState
      };

    case ADD_NOTE:
      newState = { ...state };
      newState[action.note.id] = action.note;

      return {
        ...state,
        ...newState
      }

    default:
      return state;
  }
}

export default notesReducer;
