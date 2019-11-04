import React from 'react';


import Navbar from '../../layout/Navbar';
import ContentFrame from '../homepage/ContentFrame';
import Footer from '../../layout/Footer';

const Meal = () => {
    return (
      <div className="App">
        <Navbar  />
        <ContentFrame />
        <Footer />
      </div>
    );
  }

export default Meal