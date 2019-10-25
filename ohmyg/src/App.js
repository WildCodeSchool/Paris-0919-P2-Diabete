import React from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeNavButtons from './components/pages/homepage/HomeNavButtons';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <Footer />
      <HomeNavButtons />
    </div>
  )
}

export default App;
