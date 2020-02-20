import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Header.css';
import OneService from '../OneService/OneService';
import Car from '../Car/Car';
import Staff from '../Staff/Staff';
import ListMenu from "./ListMenu/ListMenu";
import ButtonM from "../Buttons/ButtonM/ButtonM";

// import { Redirect } from "react-router-dom";

class Header extends React.Component {
    state = {
        showModal: false
    }
     
    handleModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    render () {
        return(
        <div>
        <Router>
         <header className='Header'>
         <ButtonM onClick={this.handleModal}>HI</ButtonM>
         { this.state.showModal && <ListMenu/> }
         </header>
            <Switch>
                <Route path="/service">
                    <OneService/>
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