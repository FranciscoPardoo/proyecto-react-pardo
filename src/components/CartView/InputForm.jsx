import React from 'react';
import "./inputForm.css";

function InputForm(props) {
    return (
        <div className='form'>
            <label>{props.title}</label>
            <input
                required={true}
                value={props.value}
                name={props.name}
                type="text"
                onChange={props.onInputChange}
            />
        </div>
    )
}

export default InputForm