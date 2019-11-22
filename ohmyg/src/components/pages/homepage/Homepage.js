import React from 'react';

import HeaderMobile from '../../layout/HeaderMobile';
import HomeNavButtons from './HomeNavButtons';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMG.svg"
import Navbar from '../../layout/Navbar';

import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
      <div className='Homepage-total'>
        <Navbar src={logo}
          color='icones-homepage'
        />
        <HeaderMobile src={logo} />
        <HomeNavButtons />
        <Footer color='footer-homepage' />
      </div>
      <div className="homepage-background-slide-in-bottom"></div>
    </div>
  );
}

export default Homepage
