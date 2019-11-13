import React from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import './InfoNutApi.css'

class InfoNutApi extends React.Component {
  state = {
    foodsFromCategory: [],
    update: this.props.food2
  };

  getFood =  () => {
    axios
      .get(
        `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.firstFood}`
      )
      .then(response => response.data)
      .then(data => {
        this.setState({
          foodsFromCategory: data.records
        }, _=>{console.log('setState1');
        });
      }).then(_=>{
        axios
          .get(
            `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.food2}`
          )
          .then(response => response.data)
          .then(data => {
            const newFoodCat = this.state.foodsFromCategory;
            newFoodCat.push(...data.records)
            this.setState({foodsFromCategory : newFoodCat});
          });
        });
        
        
      };
      
      componentDidUpdate() {
       
        if (this.state.update !== this.props.food2) {
          console.log('========');
          
          console.log('update', this.state.update, this.props.food2);
          
          this.setState({ update: this.props.food2 }, ()=> {
            this.getFood();
            console.log('getFood');
            
          })
    }
   
  }


  sortState = () => {
    const newState = this.state.foodsFromCategory.sort((a , b) => {
      return a.fields.origfdnm - b.fields.origfdnm;
       })
    this.setState({ foodsFromCategory: newState})
  };


  render() {
    console.log(this.state.foodsFromCategory.length, this.state.foodsFromCategory);
    

    return (
      <div id="food-box">
        {this.state.foodsFromCategory
        .map(food => (
          <Link className="food-card-link" to={`/displayinfonut/${food.fields.origfdcd}`}>
            <p className="food-card"> {food.fields.origfdnm}</p>{" "}
        </Link>))
        }
      </div>
    );
  }
}


export default InfoNutApi;