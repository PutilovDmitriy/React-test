import React from 'react';
import './ButtonM.css'

const ButtonM = (props) => (
    <div className="ButtonM">
        <input type="submit" 
               value={props.value}
               onClick={props.onClick}
               onMouseOver={props.onMouseOver}
        />    
    </div>
);

export default ButtonM;