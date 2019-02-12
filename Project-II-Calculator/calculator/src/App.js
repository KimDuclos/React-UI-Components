import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalcButtons from './components/ButtonComponents/CalcButtons';
import { calendarFormat } from 'moment';

const App = () => {
  return (
    <div className='container'> 
        <div className='dispBox'>
          <CalculatorDisplay />
        </div>

        <div className='calcBottom'>
          <div className='numbers'>
            <ActionButton act="Clear"/>

            <NumberButton num={1}/>
            <NumberButton num={2}/>
            <NumberButton num={3}/>
            <NumberButton num={4}/>
            <NumberButton num={5}/>
            <NumberButton num={6}/>
            <NumberButton num={7}/>
            <NumberButton num={8}/>
            <NumberButton num={9}/>

            <ActionButton act="0"/>
          </div>
          <div className='CalculationButtons'>
            <CalcButtons calcBut="÷" />
            <CalcButtons calcBut="×" />
            <CalcButtons calcBut="-" />
            <CalcButtons calcBut="＋" />
            <CalcButtons calcBut="=" />
          </div>
    </div>
  </div>

      
  );
};

export default App;
