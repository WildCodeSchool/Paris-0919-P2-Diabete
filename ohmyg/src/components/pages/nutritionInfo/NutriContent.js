import React from 'react'
import ApiRequest from '../meal/ApiRequest';
import './NutriContent.css'

class NutriContent extends React.Component {
    render() {
        return(
            <div className="main-box">
                <div className="search-box">
                    <ApiRequest
                        name = {this.getChosenFoodName}
                        carbs = {this.getChosenFoodCarbs}
                    />
                </div>
                <div className="sixBoxes">
                    <div className="fruitAndVeg">
                        <a href="">
                            {/* <img className = "iconMeal" src={pictoSectionRepas}/> */}
                            Fruits et légumes
                        </a>
                    </div>
                    <div className="meatAndFish">
                        <a href="">
                            {/* <img className = "iconCalcul" src={pictoSectionCalcul}/> */}
                            Viandes et Poissons
                        </a>
                    </div>
                    <div className="drink">
                        <a href="">
                            {/* <img className = "iconNews" src={pictoSectionNews}/> */}
                            Boissons
                        </a>
                    </div>
                    <div className="starchy">
                        <a href="">
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Féculents
                        </a>
                    </div>
                    <div className="junkFood">
                        <a href="">
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Junk Food
                        </a>
                    </div>
                    <div className="dessert">
                        <a href="">
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Desserts
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NutriContent;