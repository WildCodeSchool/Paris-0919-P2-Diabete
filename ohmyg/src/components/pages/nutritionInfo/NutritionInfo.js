import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMG.svg"
import "./NutritionInfo.css"
import icon from "../../../assets/icons/picto-section-infosnut.png"
import HeaderMobile from '../../layout/HeaderMobile';
import NutriContent from './NutriContent'

class NutritionInfo extends React.Component {
    state = {
        nameFromApi:"",
        carbsFromApi:""
    }

    getChosenFoodName = (food) => {
        this.setState({nameFromApi : food})
    }

    getChosenFoodCarbs = (food) => {
        this.setState({carbsFromApi : food})
    }

    render() {
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
}

export default NutritionInfo;