import React from 'react';
import './Greetings.css'
const Greetings = (props) => (
    <div className="Button">
        {props.error && <div className="Error">{props.error}</div>}
        <input type="submit" 
               value={props.value}
               onClick={props.onClick}
        />     
    </div>
);

export default Greetings;