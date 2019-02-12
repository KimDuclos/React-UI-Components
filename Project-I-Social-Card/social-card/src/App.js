import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import TwitterContainer from './components/TwitterIcons/TwitterContainer';

const App = () => {
  return (
    <div className="CardApp">
      <HeaderContainer />
      <CardContainer />
      <TwitterContainer />
    </div>
  );
};

export default App;
