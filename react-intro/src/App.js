import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import SimpleForm from './components/SimpleForm/SimpleForm';
import Header from './components/Header/Header';

const App = () => (
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path='/auth' component={SimpleForm}/>
        <Route path='/' component={Header}/>
      </Switch>
    </Router>
    </div>
);

export default App;
