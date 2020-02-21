import React from 'react';
import './ButtonT.css'
import { Link } from 'react-router-dom';

const ButtonT = (props) => (
    <div className="ButtonT">
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

export default ButtonT;