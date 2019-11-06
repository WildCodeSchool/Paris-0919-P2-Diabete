import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMG.svg"
import "./NutritionInfo.css"
import icon from "../../../assets/icons/picto-section-infosnut.png"
import HeaderMobile from '../../layout/HeaderMobile';

const News = () => {
    return (
      <div className = "info-background">
        <Navbar  src = {logo}
                 color = 'icones-nutritionInfo'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame src = {icon}/>
        <Footer color = 'footer-info'/>
      </div>
    );
  }

export default News;