import React from 'react';
import logo from '../logo.svg';
import './App.css';
import  Login from './login'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import SignUp from "./signup";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
  );
}

export default App;
