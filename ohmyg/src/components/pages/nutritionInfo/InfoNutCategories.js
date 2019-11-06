import React from "react"
import InfoNutApi from "./InfoNutApi"

class InfoNutCategories extends React.Component {

    state = {
        category1 : "null",
        category2: "null",
    }

    changeProps = (item1, item2) => {
        this.setState({category1: item1})
        this.setState({category2: item2})
    }



    render() {
                return (
            <div className="InfoNutCategoriesContainer">
                
                   
                 <h1 onClick={() => this.changeProps("fruit", "legume")}>Fruits et légumes</h1>
                 <h1 onClick={() => this.changeProps("viande", "legume")}>Viandes et Poissons</h1>
                 <h1 onClick={() => this.changeProps("boisson", "alcool")}>Boissons</h1>
                 <h1 onClick={() => this.changeProps("riz", "terre")}>Féculents</h1>
                 <h1 onClick={() => this.changeProps("pizza", "null")}>Junk Food</h1>
                 <h1 onClick={() => this.changeProps("chocolat", "gateau")}>Desserts</h1>


                <InfoNutApi firstFood={this.state.category1} food2={this.state.category2}/>
            </div>
        )
    }
}

export default InfoNutCategories