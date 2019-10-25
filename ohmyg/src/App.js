import React from 'react';


import HeaderMobile from './components/layout/HeaderMobile';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContentFrame from './components/pages/homepage/ContentFrame';
import HeaderMobile from './components/layout/HeaderMobile';

import HomeNavButtons from './components/pages/homepage/HomeNavButtons';


import './App.css';

const App = () => {
  return (
    <div className="App">

      <HeaderMobile />

      <HomeNavButtons />

      <Navbar  />
      <Footer />
      <HeaderMobile />
      <HomeNavButtons />
      <ContentFrame />

    </div>
  );
}

export default App;
