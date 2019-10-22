import React, { Component } from "react";

class InsulinCalculation extends Component {
  state = {
    totalGlucides: "",
    ratio: "",
    glycemie: ""
  };

  handleChange = e => {
    if (e.target.value.length > 5) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (
      <div>
        <div>
          <h1>Mon total de glucides : </h1>
          <label htmlFor="totalGlucides">Mon total de glucides : </label>
          <input
            id="totalGlucides"
            type="number"
            name="totalGlucides"
            onChange={this.handleChange}
            value={this.state.totalGlucides}
          />
          <label> g</label>
        </div>

        <div>
          <h1>Mon Ratio : </h1>
          <label htmlFor="totalGlucides">1 pour : </label>
          <input
            id="totalGlucides"
            type="number"
            name="ratio"
            onChange={this.handleChange}
            value={this.state.ratio}
          />
          <label> g de glucides</label>
        </div>

        <div>
          <h1>Ma glycémie avant repas : </h1>
          <label htmlFor="totalGlucides">Ma glycémie : </label>
          <input
            id="totalGlucides"
            type="number"
            name="glycemie"
            onChange={this.handleChange}
            value={this.state.glycemie}
          />
          <label> g/l</label>
        </div>

        <h1>state glucides : {this.state.totalGlucides}</h1>
        <h1> state ratio : {this.state.ratio}</h1>
        <h1>state glycémie : {this.state.glycemie}</h1>
      </div>
    );
  }
}

export default InsulinCalculation;
