import React, {Component} from 'react'
import axios from 'axios'
import "./ApiRequest.css"
import { Link } from 'react-router-dom';


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


    chooseFood= async (name) => {
        const item = await this.state.foods.find(element => 
           element.fields.origfdnm === name) 
        await this.setState({chosenFood : item})
        await this.setState({title: ""})
        // console.log("verif", this.state.chosenFood)
        this.props.name (this.state.chosenFood.fields.origfdnm)
        this.props.carbs (this.state.chosenFood.fields.glucides_g_100g)  
        // console.log ("name",this.state.chosenFood.fields.origfdnm || "carbs", this.state.chosenFood.fields.glucides_g_100g)
    };
        




    render () {
        // console.log("verif2",this.state.chosenFood)
    return (
        <div>
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
                            <Link to={`/displayinfonut/${food.fields.origfdcd}`}><li key={food.fields.origfdnm} className="ApiRequest-listItem" > {food.fields.origfdnm}</li> </Link>
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



// class ApiRequest extends Component {
//     state = {
//         foods:[],
//         title:"",
//         chosenFood: {}
//     };
    

//     getInfo = () => {
//         axios.get(`https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=15&facet=origfdnm&q=${this.state.title}`)
//       .then(response => response.data)
//       .then(data => { console.log(data) ||
//         this.setState({
//             foods:data.records
//         });
//     });
// }


//     handleChange= (event)=> {
//         this.setState({ title: event.target.value });
//           if (event.target.value.length >= 4) {
//               this.getInfo()
//           }
//         };


//     chooseFood= async (name) => {
//         const item = await this.state.foods.find(element => 
//            element.fields.origfdnm === name) 
//         await this.setState({chosenFood : item})
//         await this.setState({title: ""})
//         // console.log("verif", this.state.chosenFood)
//         this.props.name (this.state.chosenFood.fields.origfdnm)
//         this.props.carbs (this.state.chosenFood.fields.glucides_g_100g)  
//         // console.log ("name",this.state.chosenFood.fields.origfdnm || "carbs", this.state.chosenFood.fields.glucides_g_100g)
//     };
        




//     render () {
//         // console.log("verif2",this.state.chosenFood)
//     return (
//         <div>
//             <form className="ApiRequest-form">
//                 <input
//                 id="title"
//                 name="title"
//                 className="ApiRequest-input"
//                 list="food"
//                 type="text"
//                 value={this.state.title}
//                 onChange={this.handleChange}
//                 minLength="4" required
//                 placeholder=  "Choisis un aliment..."
                
//                 />

               
//                     {this.state.title.length > 3 ? 
//                      <ul id="food" className="ApiRequest-list" >
//                     {this.state.foods
//                         .map(food => (
//                         <li key={food.fields.origfdnm} className="ApiRequest-listItem" onClick={() => this.chooseFood(food.fields.origfdnm)}> {food.fields.origfdnm}
//                         </li> 
//                     ))}
//                     </ul>
//                     : ""
//                 }
                
                
//             </form>
//        </div>
//         )
//     }
// }

// export default ApiRequest