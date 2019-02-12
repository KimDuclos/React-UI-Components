import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
            <button className='action'>{props.act}</button>
    );
};

export default ActionButton;
