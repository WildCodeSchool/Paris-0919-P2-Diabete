import React from 'react';

import ContentFrame from './components/pages/homepage/ContentFrame';
import HeaderMobile from './components/layout/HeaderMobile';
import HomeNavButtons from './components/pages/homepage/HomeNavButtons';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderMobile />
      <HomeNavButtons />
      <ContentFrame />
    </div>
  );
}

export default App;
