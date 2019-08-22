import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

import ExerciseList from '../ExerciseList/ExerciseList';
import CreateUser from '../CreateUser/CreateUser';
import CreateExercise from '../CreateExercise/CreateExercise';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Exercise Tracker</Navbar.Brand>
      </Navbar>
      <ExerciseList />
      {/* <Router>
        <Route path="/exercise" exact component={ExerciseList} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/new" component={CreateExercise} />
      </Router> */}
    </div>
  );
}

export default App;
