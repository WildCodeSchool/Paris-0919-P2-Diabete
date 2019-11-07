import React from 'react'
import ApiRequest from '../meal/ApiRequest';
import InfoNutApi from "./InfoNutApi"
import './NutriContent.css'

class NutriContent extends React.Component {
    state = {
        category1 : "null",
        category2: "null",
    }

    changeProps = (item1, item2) => {
        this.setState({category1: item1})
        this.setState({category2: item2})
    }

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
                        <h2 onClick={() => this.changeProps("fruit", "legume")}>
                            {/* <img className = "iconMeal" src={pictoSectionRepas}/> */}
                            Fruits et légumes
                        </h2>
                    </div>
                    <div className="meatAndFish">
                        <h2 onClick={() => this.changeProps("viande", "legume")}>
                            {/* <img className = "iconCalcul" src={pictoSectionCalcul}/> */}
                            Viandes et Poissons
                        </h2>
                    </div>
                    <div className="drink">
                        <h2 onClick={() => this.changeProps("boisson", "alcool")}>
                            {/* <img className = "iconNews" src={pictoSectionNews}/> */}
                            Boissons
                        </h2>
                    </div>
                    <div className="starchy">
                        <h2 onClick={() => this.changeProps("riz", "terre")}>
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Féculents
                        </h2>
                    </div>
                    <div className="junkFood">
                        <h2 onClick={() => this.changeProps("pizza", "bonbons")}>
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Junk Food
                        </h2>
                    </div>
                    <div className="dessert">
                        <h2 onClick={() => this.changeProps("chocolat", "gateau")}>
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Desserts
                        </h2>
                    </div>
                </div>
                <InfoNutApi className="food-box" firstFood={this.state.category1} food2={this.state.category2}/>
            </div>
        )
    }
}

export default NutriContent;