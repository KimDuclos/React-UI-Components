import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalcButtons from './components/ButtonComponents/CalcButtons';

const App = () => {
  return (
    <div className='container'> 
        <div className='dispBox'>
          <CalculatorDisplay />
        </div>

        <div className='calcBottom'>
          <div className='numbers'>
            <ActionButton />

            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />

            <ActionButton />
          </div>
          <div className='CalculationButtons'>
            <CalcButtons />
            <CalcButtons />
            <CalcButtons />
            <CalcButtons />
            <CalcButtons />
          </div>
    </div>
  </div>

      
  );
};

export default App;
