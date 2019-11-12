import React from 'react'
import ApiRequestInfo from './ApiRequestInfo';
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
                    <ApiRequestInfo
                        name = {this.getChosenFoodName}
                        carbs = {this.getChosenFoodCarbs}
                    />
                </div>
                <div className="sixBoxes">
                    <div className="fruitAndVeg" onClick={() => this.changeProps("fruit", "legume")}>
                        <h2>
                            {/* <img className = "iconMeal" src={pictoSectionRepas}/> */}
                            Fruits et légumes
                        </h2>
                    </div>
                    <div className="meatAndFish" onClick={() => this.changeProps("viande", "poisson")}>
                        <h2>
                            {/* <img className = "iconCalcul" src={pictoSectionCalcul}/> */}
                            Viandes et Poissons
                        </h2>
                    </div>
                    <div className="drink" onClick={() => this.changeProps("boisson", "alcool")}>
                        <h2>
                            {/* <img className = "iconNews" src={pictoSectionNews}/> */}
                            Boissons
                        </h2>
                    </div>
                    <div className="starchy" onClick={() => this.changeProps("riz", "terre")}>
                        <h2>
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Féculents
                        </h2>
                    </div>
                    <div className="junkFood" onClick={() => this.changeProps("pizza", "bonbons")}>
                        <h2>
                            {/* <img className = "iconInfosNut" src={pictoSectionInfosNut}/> */}
                            Junk Food
                        </h2>
                    </div>
                    <div className="dessert" onClick={() => this.changeProps("chocolat", "gateau")}>
                        <h2>
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