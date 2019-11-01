import React, {Component} from 'react'
import axios from 'axios'

    
// let ingr = "pomme";

class ApiRequest extends Component {
    state = {
        foods:[],
        title:"null",
        chosenFood: {}
    };

    handleChange= (event)=> {
        this.setState({ title: event.target.value });
          if (event.target.value.length >= 4) {
              this.getInfo()
          }
        };

    chooseElement= (e) => {
        this.setState ({chosenFood : e.target.value})
    };
      

    getInfo = () => {
        axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=20&facet=origgpnm&q=${this.state.title}`)
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
        <div>
            <form>
                <input
                id="title"
                name="title"
                list="food"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                minLength="4" required
                />

                <datalist id="food" className="ApiRequest" onClick={this.chooseElement}>
                    {this.state.foods
                        .map(food => (
                        <option key={food.fields.origfdnm} value={food.fields.origfdnm}>
                        </option>
                    ))}
                </datalist>
                
            </form>
       </div>
        )
    }
}

export default ApiRequest