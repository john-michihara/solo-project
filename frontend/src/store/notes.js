import { csrfFetch } from "./csrf";

const SET_NOTES = "notes/SET_NOTES";
const SET_ALL_NOTES = "notes/SET_ALL_NOTES";
const ADD_NOTE = "notes/ADD_NOTE";
const EDIT_NOTE = "notes/EDIT_NOTE";
const DELETE_NOTE = "notes/DELETE_NOTE";
const RESET_NOTES = "notes/RESET_NOTES";

const setNotes = (notes) => ({
  type: SET_NOTES,
  notes,
});

const setAllNotes = (notes) => ({
  type: SET_ALL_NOTES,
  notes,
});

const addNote = (note) => ({
  type: ADD_NOTE,
  note,
});

const editNote = (note) => ({
  type: EDIT_NOTE,
  note,
});

const deleteNote = (note) => ({
  type: DELETE_NOTE,
  note,
});

const resetNotes = () => ({
  type: RESET_NOTES,
});

export const getNotes = (notebookId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${notebookId}/notes`);
  const notes = await res.json();
  dispatch(setNotes(notes));
};

export const getAllNotes = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/notes`);
  const notes = await res.json();
  dispatch(setAllNotes(notes));
  console.log(notes);
  return notes;
};

export const createNote = (noteData) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${noteData.notebookId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ noteData }),
  });

  const note = await res.json();
  dispatch(addNote(note));
};

export const getNoteToEdit = (noteData) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${noteData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ noteData }),
  });

  const note = await res.json();
  dispatch(editNote(note));
};

export const getNoteToDelete = (noteId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${noteId}`, {
    method: "DELETE",
  });
  const note = await res.json();
  dispatch(deleteNote(note));
};

export const cleanNotesStore = () => async (dispatch) => {
  dispatch(resetNotes());
};

const initialState = {};

const notesReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case SET_NOTES:
      newState = {};
      action.notes.forEach((note) => {
        newState[note.id] = note;
      });

      return {
        ...newState,
      };

    case SET_ALL_NOTES:
      newState = {};
      action.notes.forEach((note) => {
        newState[note.id] = note;
      });

      return {
        ...state,
        ...newState,
      };

    case ADD_NOTE:
      newState = { ...state };
      newState[action.note.id] = action.note;

      return {
        ...state,
        ...newState,
      };

    case EDIT_NOTE:
      newState = { ...state };
      newState[action.note.id] = action.note;

      return newState;

    case DELETE_NOTE:
      newState = { ...state };
      delete newState[action.note.id];
      return newState;

    case RESET_NOTES:
      newState = {};
      return newState;

    default:
      return state;
  }
};

export default notesReducer;
