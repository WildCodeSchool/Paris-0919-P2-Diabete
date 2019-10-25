import React from 'react';


import ContentFrame from './components/pages/homepage/ContentFrame';
import Footer from './components/layout/Footer';
import HeaderMobile from './components/layout/HeaderMobile';
import HomeNavButtons from './components/pages/homepage/HomeNavButtons';
import Navbar from './components/layout/Navbar';



import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <Footer />
      <HeaderMobile />
      <HomeNavButtons />
      <ContentFrame />

    </div>
  );
}

export default App;
