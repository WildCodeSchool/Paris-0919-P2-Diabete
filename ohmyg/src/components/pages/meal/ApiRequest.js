import React, {Component} from 'react'
import axios from 'axios'

    
const ingr = "Courgette";

class ApiRequest extends Component {
    state = {
        foods:[]
    };

    getInfo = () => {
        axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&facet=origgpnm&q=${ingr}`)
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => { console.log(data) ||
        this.setState({
            foods:data.records
        });
        console.log("state", this.state)
    });
}


    componentDidMount () {
        this.getInfo()
    } 
    
    render () {
    
    return (
        <select className="ApiRequest">
            {this.state.foods
                // .filter(food => food.fields.origfdnm.includes("Barre"))
                .map(food => (
                <option key={food.fields.origfdnm}>
                {" "}
                {food.fields.origfdnm}
                </option>
            ))}
       </select>
        )
    }
}

export default ApiRequest