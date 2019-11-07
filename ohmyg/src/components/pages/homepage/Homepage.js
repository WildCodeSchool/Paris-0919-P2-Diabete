import React from 'react';
import Navbar from '../../layout/Navbar';
import HomeNavButtons from './HomeNavButtons';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMG.svg"
import "./Homepage.css"
import HeaderMobile from '../../layout/HeaderMobile';


const Homepage = () => {
    return (
      <>
      <div>
          <Navbar  src = {logo}
                  color = 'icones-homepage'  
          />
        <HeaderMobile src = {logo}/>
        <HomeNavButtons />
        <Footer color = 'footer-homepage'/>
      </div>
      <div className = "homepage-background-slide-in-bottom"></div>
      </>
    );
  }

export default Homepage
