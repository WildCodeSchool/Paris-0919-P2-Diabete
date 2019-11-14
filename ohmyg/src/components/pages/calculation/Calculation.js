import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGBlue.svg"
import icon from "../../../assets/icons/picto-section-calcul.png"
import "./Calculation.css"
import HeaderMobile from '../../layout/HeaderMobile';
import InsulinCalculation from "./InsulinCalculation.js";
import smileySetParamBlue from "../../../assets/icons/picto-param.png";
import smileySetParamMobBlue from "../../../assets/icons/picto-param-mob.png";
import smileyHypoMobOrange from "../../../assets/icons/picto-hypo-mob.png";
import smileyHypoOrange from "../../../assets/icons/picto-hypo.png";


const Calculation = () => {
    return (
      <div className = "calculation-background">
        <Navbar  src = {logo}
                 color = 'icones-calculation'  
        />
        <HeaderMobile src = {logo}/>
        <ContentFrame src = {icon}
        content = {<InsulinCalculation 
          color1="insulin-blue" color2="insulin-lightBlue" color3="insulin-lightBlueText"
          desktParam={smileySetParamBlue} desktHypo={smileyHypoOrange} mobParam={smileySetParamMobBlue} mobHypo={smileyHypoMobOrange} />}
        />
        <Footer color = 'footer-calculation'/>
      </div>
    );
  }

export default Calculation;