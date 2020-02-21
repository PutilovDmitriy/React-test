import React from 'react';
import './ButtonM.css'

const ButtonM = (props) => (
    <div className="ButtonM">
        <button className={props.class} 
               type="submit" 
               value={props.value}
               onClick={props.onClick}
               onMouseOver={props.onMouseOver}
        >-_-
        </button> 
    </div>
);

export default ButtonM;