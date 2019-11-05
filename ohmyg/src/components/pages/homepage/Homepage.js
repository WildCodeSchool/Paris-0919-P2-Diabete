import React from 'react';


import Navbar from '../../layout/Navbar';
import HomeNavButtons from './HomeNavButtons';
import Footer from '../../layout/Footer';

const Homepage = () => {
    return (
      <div className="App">
        <Navbar  />
        <HomeNavButtons />
        <Footer />
      </div>
    );
  }

export default Homepage
