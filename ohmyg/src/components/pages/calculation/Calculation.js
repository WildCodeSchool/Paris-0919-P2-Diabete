import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGBlue.svg"
import icon from "../../../assets/icons/picto-section-calcul.png"
import "./Calculation.css"
import HeaderMobile from '../../layout/HeaderMobile';

const Calculation = () => {
    return (
      <div className = "calculation-background">
        <Navbar  src = {logo}
                 color = 'icones-calculation'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame src = {icon}/>
        <Footer color = 'footer-calculation'/>
      </div>
    );
  }

export default Calculation;