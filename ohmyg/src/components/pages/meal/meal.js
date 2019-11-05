import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGOrange.svg"
import "./Meal.css"

const Meal = () => {
    return (
      <div className="meal-background">
         <Navbar  src = {logo}
                 color = 'icones-meal'  
        />
        <ContentFrame />
        <Footer color = 'footer-meal'/>
      </div>
    );
  }

export default Meal