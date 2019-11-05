import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../homepage/ContentFrame';
import Footer from '../../layout/Footer';

const Calculation = () => {
    return (
      <div className="App">
        <Navbar  />
        <ContentFrame />
        <Footer className='footer-calculation' />
      </div>
    );
  }

export default Calculation;