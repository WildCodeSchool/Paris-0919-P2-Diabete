import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGOrange.svg"
import "./Meal.css"
import icon from "../../../assets/icons/picto-section-repas.png"
import HeaderMobile from '../../layout/HeaderMobile';

const Meal = () => {
    return (
      <div className="meal-background">
         <Navbar  src = {logo}
                 color = 'icones-meal'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame src = {icon}/>
        <Footer color = 'footer-meal'/>
      </div>
    );
  }

export default Meal