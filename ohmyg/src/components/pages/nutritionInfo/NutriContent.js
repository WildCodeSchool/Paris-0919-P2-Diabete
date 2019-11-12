import React from "react";
import ApiRequestInfo from "./ApiRequestInfo";
import InfoNutApi from "./InfoNutApi";
import "./NutriContent.css";
import fruitAndVeg from "../../../assets/icons/picto-fruitAndVeg.svg";
import starchy from "../../../assets/icons/picto-starchy.svg";
import drink from "../../../assets/icons/picto-drink.svg";
import junkFood from "../../../assets/icons/picto-junkFood.svg";
import meatAndFish from "../../../assets/icons/picto-meatAndFish.svg";
import dessert from "../../../assets/icons/picto-dessert.svg";

class NutriContent extends React.Component {
  state = {
    category1: "null",
    category2: "null"
  };

  changeProps = (item1, item2) => {
    this.setState({ category1: item1 });
    this.setState({ category2: item2 });
    this.scrollTo();
  };

  // scrollTo = () => {
  //     document.querySelector(id="food-box").scrollIntoView({
  //         behavior: 'smooth'
  //       });
  // }

  // scrollTo = () => {
  //   setTimeout(() => {
  //     document
  //       .querySelector("#food-box")
  //       .scrollIntoView({ behavior: "smooth" });
  //   }, 1000);
  // };

  render() {
    return (
      <div className="nutriContent-mainBox">
        <div className="nutriContent-searchBox">
          <ApiRequestInfo
            name={this.getChosenFoodName}
            carbs={this.getChosenFoodCarbs}
          />
        </div>
        <div className="nutriContent-sixBoxes">
          <div className="fruitAndVeg"
            onClick={() => this.changeProps("fruit", "legume")}>
            <div className="Box-Border"></div>
            <img className = "nutriContent-Icon" src={fruitAndVeg}/> 
            <h2 className="nutriContent-CatName">Fruits et Légumes</h2>
          </div>
          <div className="meatAndFish"
            onClick={() => this.changeProps("viande", "poisson")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Viandes et Poissons</h2>
            <img className = "nutriContent-Icon" src={meatAndFish}/>
          </div>
          <div className="drink"
            onClick={() => this.changeProps("boisson", "alcool")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Boissons</h2>
            <img className = "nutriContent-Icon" src={drink}/>
          </div>
          <div className="starchy"
            onClick={() => this.changeProps("riz", "terre")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Féculents</h2>
            <img className = "nutriContent-Icon" src={starchy}/>
          </div>
          <div className="junkFood"
            onClick={() => this.changeProps("pizza", "bonbon")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Junk Food</h2>
            <img className = "nutriContent-Icon" src={junkFood}/>
          </div>
          <div className="dessert"
          onClick={() => this.changeProps("chocolat", "gateau")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Desserts</h2>
            <img className = "nutriContent-Icon" src={dessert}/>
          </div>
        </div>

        <InfoNutApi
          firstFood={this.state.category1}
          food2={this.state.category2}
        />
      </div>
    );
  }
}

export default NutriContent;
