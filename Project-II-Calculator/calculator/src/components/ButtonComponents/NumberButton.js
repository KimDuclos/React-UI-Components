import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className='numButtons'>{props.num}</button>
    );
};

export default NumberButton;