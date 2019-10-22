import React, { Component } from "react";

class InsulinCalculation extends Component {
  state = {
    totalGlucides: "",
    ratio: "",
    glycemie: "",
    sensibilite: "",
    fleche:"",
    total: "total",
  };

  handleChange = e => {
    if (e.target.value.length > 5) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  hypoglycemie = () => {
    return <p className="hypoglycemie"> Attention, tu es en hypoglycémie. la prise d'insuline n'est pas indiquée. Pense à te resucrer :) </p>
  }

  hyperglycemie = () => {
    return <div classname="hyperglycemie">
      <p> Attention, tu es en hyperglycémie. Rentre ces nouveaux paramètres :)</p>
      <div>
        <h1>Sensibilité : </h1>
        <input
          id="sensibiliteinput"
          type="number"
          name="sensibilite"
          onChange={this.handleChange}
          value={this.state.sensibilite}
        />
        <label> ?</label>
        <p> {this.state.sensibilite}</p>

      </div>

      <div>
        <h1>Flèche : </h1>
        <input
          id="flecheinput"
          type="number"
          name="fleche"
          onChange={this.handleChange}
          value={this.state.fleche}
        />
        <label> ?</label>
        <p> {this.state.fleche}</p>

      </div>

    </div>
  }

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

        <div>
          {this.state.glycemie > "1.20" ? this.hyperglycemie() : ""}
        </div>

      <div>
        {/* Ici on va mettre le composant boutton qu'on aura utilisé sur toutes les autres pages. On va lui rajouter la fonction "onclick" => faire le calcul. */}
        <button> Valider</button>
      </div>

      <div>
          <h1>Dose d'insuline suggérée :</h1>
          <p> {this.state.total} </p>
        </div>

      </div>

    );
  }
}

export default InsulinCalculation;
