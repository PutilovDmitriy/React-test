import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import SimpleForm from './components/SimpleForm/SimpleForm';
import Yes from './components/Yes/Yes';
import './App.css';


const App = () => (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={SimpleForm}/>
        <Route path='/logined' component={Yes}/>
      </Switch>
    </BrowserRouter>
    </div>
);

export default App;
