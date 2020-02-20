import React from 'react';
import './TextField.css';


const TextField = (props) => (    

    <div className="InputGroup">
            <label>
                {props.name && <p className="Name">{props.name}</p>}
                <input
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                onChange={props.onChange}
                onBlur={props.onBlur}
                min={props.min}
                />
                {props.error && <div className="Error">{props.error}</div>}
            </label>
        </div>
);

export default TextField;