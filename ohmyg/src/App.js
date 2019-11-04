import React from 'react';

import Navbar from './components/layout/Navbar';
import ContentFrame from './components/pages/homepage/ContentFrame';
/*import HeaderMobile from './components/layout/HeaderMobile';*/
import HomeNavButtons from './components/pages/homepage/HomeNavButtons';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <HomeNavButtons />
      <ContentFrame />
      <Footer />
    </div>
  );
}

export default App;
