import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMG.svg"
import "./NutritionInfo.css"

const News = () => {
    return (
      <div className = "info-background">
        <Navbar  src = {logo}
                 color = 'icones-nutritionInfo'  
        />
        <ContentFrame />
        <Footer color = 'footer-info'/>
      </div>
    );
  }

export default News;