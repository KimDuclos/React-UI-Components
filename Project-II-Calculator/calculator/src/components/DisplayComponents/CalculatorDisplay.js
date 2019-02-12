import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = props => {
    return (
        <div className="Display">
            <div className='calcProp'>{props.calcDisp}</div>
        </div>
    )
};

export default CalculatorDisplay;