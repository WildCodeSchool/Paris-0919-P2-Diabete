import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGBlue.svg"
import "./Calculation.css"

const Calculation = () => {
    return (
      <div className = "calculation-background">
        <Navbar  src = {logo}/>
        <ContentFrame />
        <Footer color = 'footer-calculation'/>
      </div>
    );
  }

export default Calculation;