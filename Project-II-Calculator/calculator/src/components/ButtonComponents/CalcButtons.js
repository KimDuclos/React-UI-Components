import React from 'react';
import './Button.css';

const CalcButtons = props => {
    return (
            <button className='calc'>{props.calcBut}</button>
    );
};

export default CalcButtons;