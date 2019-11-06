import React from "react";
import axios from "axios"

class InfoNutApi extends React.Component {
    state={
        foodsFromCategory : [],
        update : this.props.food2

    }

    getFood = async () => {
    await axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.firstFood}`)
        .then (response => response.data)
        .then (data => {
        this.setState({
        foodsFromCategory:data.records 
        });
        })

        
    axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.food2}`)
        .then (response => response.data)
        .then (data => {
            this.state.foodsFromCategory.push(...data.records 
            );

    this.setState({update: this.props.food2})

    });
    }


    componentDidUpdate() {
        if (this.state.update != this.props.food2) {
            this.getFood()
        }
    }


    componentDidMount() {
        this.getFood()
    }


    render(){
        return(
            <div>
                {this.state.foodsFromCategory.map(food => (
                    <p> {food.fields.origfdnm}</p>
                )
                )}
            </div>
        )
    }
}


export default InfoNutApi;