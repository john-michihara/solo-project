const SET_NOTES = 'notebooks/SET_NOTES';

const setNotes = (notes) => ({
  type: SET_NOTES,
  notes
});

export const getNotes = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/notes`);
  const notes = await res.json();
  dispatch(setNotes(notes));
}

const initialState = {};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      const allNotes = {};
      action.notes.forEach(note => {
        allNotes[note.id] = note;
      })

      return {
        ...state,
        ...allNotes
      }

    default:
      return state;
  }
}

export default notesReducer;
