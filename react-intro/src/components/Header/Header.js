import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Header.css';
import Home from '../Home/Home';
import Car from '../Car/Car';
import Staff from '../Staff/Staff';

// import { Redirect } from "react-router-dom";

class Header extends React.Component {
        render () {
        return(
        <div>
        <Router>
         <header className='Header'>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/car'>Car</Link></li>
                <li><Link to='/staff'>Staff</Link></li>
            </ul>
         </header>
            <Switch>
                <Route exact path="/home">
                    <Home/>
                </Route>
                <Route path="/car">
                    <Car />
                </Route>
                <Route path="/staff">
                    <Staff />
                </Route>
            </Switch> 
        </Router>
        </div>
)}};

export default Header;