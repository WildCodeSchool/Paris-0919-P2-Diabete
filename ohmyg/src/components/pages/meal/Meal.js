import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame2 from '../../layout/ContentFrame2';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGOrange.svg"
import "./Meal.css"
import icon from "../../../assets/icons/picto-section-repas.png"
import HeaderMobile from '../../layout/HeaderMobile';
import ApiCarbs from "./ApiCarbs";
// import toncomponent from "./toncomponent.js"

const Meal = () => {
    return (
      <div className="meal-background">
         <Navbar  src = {logo}
                 color = 'icones-meal'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame2 src = {icon}
        content = {<ApiCarbs/>}
        />
        <Footer color = 'footer-meal'/>
      </div>
    );
  }

export default Meal