import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SimpleForm from './components/SimpleForm/SimpleForm';
import Home from './components/Home/Home';
import './App.css';

const App = () => (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component={SimpleForm}/>
        <Route path='/home' render = { () => <Home/>}
        />
      </Switch>
    </Router>
    </div>
);

export default App;
