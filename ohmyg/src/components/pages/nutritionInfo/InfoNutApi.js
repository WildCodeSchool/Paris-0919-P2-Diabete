import React from "react";
import axios from "axios"

class InfoNutApi extends React.Component {
    state={
        foodsFromCategory : []

    }

    getFood = async () => {
    await axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=legumes`)
        .then (response => response.data)
        .then (data => {
        this.setState({
        foodsFromCategory:data.records 
        });
        console.log(this.state.foodsFromCategory)})

        
    axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=fruits`)
        .then (response => response.data)
        .then (data => {
            this.state.foodsFromCategory.push(...data.records 
            );
            console.log(this.state.         foodsFromCategory)

    });
    }

    componentDidMount() {
        this.getFood()
    }


    render(){
        return(
            <div>
                <p>bonjour</p>
                {this.state.foodsFromCategory.map(food => (
                    <p> {food.fields.origfdnm}</p>
                )
                )}
            </div>
        )
    }
}

// {this.state.foods
//     .map(food => (
//     <li key={food.fields.origfdnm} }> {food.fields.origfdnm}
//     </li> 
// ))}


export default InfoNutApi;