import React from "react";
import axios from "axios"
import { Link } from 'react-router-dom';

import './InfoNutApi.css'

class InfoNutApi extends React.Component {
  state = {
    foodsFromCategory: [],
    update: this.props.food2,
  };

  getFood = async() => {
    const temporaryCategory = []
    await axios
      .get(
        `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.firstFood}`
      )
      .then(response => response.data)
      .then(data => {
        temporaryCategory.push(...data.records)
      })

      await axios
        .get(
          `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=30&facet=origgpfr&q=${this.props.food2}`
        )
        .then(response => response.data)
        .then(data => {
          temporaryCategory.push(...data.records)
        })
        .then(_=> {this.sortState(temporaryCategory)}) 
  }
      
  componentDidUpdate() {
    if (this.state.update !== this.props.food2) {
      this.setState({ loading : true, update: this.props.food2 }, ()=> {
      this.getFood()})
    }
  }

  sortState = (foodCategory) => {
    const newState = foodCategory.sort((a , b) => {
      return a.fields.origfdnm.localeCompare(b.fields.origfdnm)
       })
    this.setState({ loading : false, foodsFromCategory : newState})
  };


  render() {
    return (
        <div id="food-box">
        {this.state.loading ? 'Loading...' : 
        this.state.foodsFromCategory
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