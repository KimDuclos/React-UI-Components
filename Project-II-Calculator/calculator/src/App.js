import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='App'>
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default App;
