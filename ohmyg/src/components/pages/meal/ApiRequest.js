import React, {Component} from 'react'
import axios from 'axios'
import "./ApiRequest.css"


class ApiRequest extends Component {
    state = {
        foods:[],
        title:"",
        chosenFood: {}
    };
    

    getInfo = () => {
        axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=15&facet=origfdnm&q=${this.state.title}`)
      .then(response => response.data)
      .then(data => { console.log(data) ||
        this.setState({
            foods:data.records
        });
    });
}


    handleChange= (event)=> {
        this.setState({ title: event.target.value });
          if (event.target.value.length >= 4) {
              this.getInfo()
          }
        };


    chooseFood= (name) => {
        const item = this.state.foods.find(element => 
           element.fields.origfdnm === name) 
        this.setState({chosenFood : item})
        this.setState({title: ""})
        
    };
      
    render () {
        console.log(this.state.chosenFood)
    return (
        <div className="global">
            <form className="ApiRequest-form">
                <input
                id="title"
                name="title"
                className="ApiRequest-input"
                list="food"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                minLength="4" required
                placeholder=  "Choisis un aliment..."
                
                />

               
                    {this.state.title.length > 3 ? 
                     <ul id="food" className="ApiRequest-list" >
                    {this.state.foods
                        .map(food => (
                        <li key={food.fields.origfdnm} className="ApiRequest-listItem" onClick={() => this.chooseFood(food.fields.origfdnm)}> {food.fields.origfdnm}
                        </li> 
                    ))}
                    </ul>
                    : ""
                }
                
                
            </form>
       </div>
        )
    }
}

export default ApiRequest