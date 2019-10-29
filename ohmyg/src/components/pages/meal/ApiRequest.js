import React, {Component} from 'react'
import axios from 'axios'


class ApiRequest extends Component {
    state = {
        foods:[]
    };

    getInfo = () => {
        axios.get('https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&q=courgette&facet=origfdnm')
        .then(res =>  this.setState ({foods:[res]}) ||   console.log(this.state.foods[0].data.records[0].fields.origfdnm) )
    };


    componentDidMount () {
        this.getInfo()
    } 
    
    render () {

    return (
        <div className="ApiRequest">
          {/* {this.state.foods
            // .filter(food => { return food[0].data.records[0].fields.origfdnm})
            .map(food => ( */}
              {/* <option>
                {" "} */}
               <p>Name:({this.state.foods[0].data.records[0].fields.origfdnm})</p> 
              {/* </option> */}
            {/* ))} */}
      </div>
    )
    }
}



// { return food.food[0].data.records.fields.origfdnm === "courgette"})

export default ApiRequest