import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import NotebooksContainer from './components/NotebooksContainer';
import NotesContainer from './components/NotesContainer';
import AllNotesContainer from "./components/AllNotesContainer";
import NoteForm from './components/NoteFormModal/NoteForm.js';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route >
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/notebooks'>
            <NotebooksContainer />
          </Route>
          <Route path='/all-notes'>
            <AllNotesContainer />
          </Route>
          <Route exact path='/notebooks/:notebookId'>
            <NotesContainer />
          </Route>
          <Route path='/noteform'>
            <NoteForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
