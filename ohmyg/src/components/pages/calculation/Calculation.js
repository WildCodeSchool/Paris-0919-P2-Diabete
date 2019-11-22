import React from 'react';

import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import HeaderMobile from '../../layout/HeaderMobile';
import icon from "../../../assets/icons/picto-section-calcul.png"
import InsulinCalculation from "./InsulinCalculation.js";
import logo from "../../../assets/pictures/logoOMGBlue.svg"
import Navbar from '../../layout/Navbar';
import smileyHypoMobOrange from "../../../assets/icons/picto-hypo-mob.png";
import smileyHypoOrange from "../../../assets/icons/picto-hypo.png";
import smileySetParamBlue from "../../../assets/icons/picto-param.png";
import smileySetParamMobBlue from "../../../assets/icons/picto-param-mob.png";

import "./Calculation.css"


const Calculation = () => {
  return (
    <div className="calculation-background">
      <Navbar src={logo}
        color='icones-calculation'
      />
      <HeaderMobile src={logo} />
      <ContentFrame src={icon}
        content={<InsulinCalculation
          color1="insulin-blue" color2="insulin-lightBlue" color3="insulin-lightBlueText"
          desktParam={smileySetParamBlue} desktHypo={smileyHypoOrange} mobParam={smileySetParamMobBlue} mobHypo={smileyHypoMobOrange} />}
      />
      <Footer color='footer-calculation' />
    </div>
  );
}

export default Calculation;