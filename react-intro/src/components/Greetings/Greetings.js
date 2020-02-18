import React from 'react';
import './Greetings.css'
import { Link } from 'react-router-dom';
const Greetings = (props) => (
    <div className="Button">
        {props.error && <div className="Error">{props.error}</div>}
        <Link to={ props.link } >
        <input type="submit" 
               value={props.value}
               onClick={props.onClick}
               onMouseOver={props.onMouseOver}
        />
        </Link>     
    </div>
);

export default Greetings;