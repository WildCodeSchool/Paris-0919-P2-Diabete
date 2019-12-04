import React from 'react';

import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import HeaderMobile from '../../layout/HeaderMobile';
import icon from "../../../assets/icons/picto-section-infosnut.png"
import logo from "../../../assets/pictures/logoOMG.svg"
import Navbar from '../../layout/Navbar';
import NutriContent from './NutriContent'

import "./NutritionInfo.css"

const NutritionInfo = () => {

    return (
      <div className = "info-background">
        <Navbar  src = {logo}
                color = 'icones-nutritionInfo'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame src = {icon} content = {<NutriContent />} />
        <Footer color = 'footer-info'/>
      </div>
    );
  
}

export default NutritionInfo;