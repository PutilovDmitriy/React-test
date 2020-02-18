import React from 'react';
import './TextField.css';

const TextField = (props) => (
    <div className="InputGroup">
            <label>
                <input 
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                onBlur={props.onBlur}
                />
                {props.error && <div className="Error">{props.error}</div>}
            </label>
        </div>
);

export default TextField;