import React from 'react';

import ApiCarbs from "./ApiCarbs";
import ContentFrame from '../../layout/ContentFrame';
import HeaderMobile from '../../layout/HeaderMobile';
import Footer from '../../layout/Footer';
import icon from "../../../assets/icons/picto-section-repas.png"
import logo from "../../../assets/pictures/logoOMGOrange.svg"
import Navbar from '../../layout/Navbar';

import "./Meal.css"


const Meal = () => {
  return (
    <div className="meal-background">
      <Navbar src={logo}
        color='icones-meal'
      />
      <HeaderMobile src={logo} />
      <ContentFrame src={icon}
        content={<ApiCarbs />}
      />
      <Footer color='footer-meal' />
    </div>
  );
}

export default Meal