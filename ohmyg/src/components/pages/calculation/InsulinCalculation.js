import React, { Component } from "react";
import "./InsulinCalculation.css"

class InsulinCalculation extends Component {
  state = {
    totalGlucides: "",
    ratio: "",
    glycemie: "",
    sensibilite: "",
    glycemiecible:"",
    total: "total",
    hypo: false,
  };

  handleChange = e => {
    if (e.target.value.length > 5) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  
  hyperglycemie = () => {
    return <div className="hyperglycemie">
      <p> Attention, tu es en hyperglycémie. Rentre ces nouveaux paramètres :)</p>
      <div>
        <h1>Sensibilité : </h1>
        <label>1 pour </label>
        <input
          id="sensibiliteinput"
          type="number"
          name="sensibilite"
          onChange={this.handleChange}
          value={this.state.sensibilite}
        />
        <label> g/l</label>
        <p> {this.state.sensibilite}</p>

      </div>

      <div>
        <h1>Glycémie cible : </h1>
        <input
          id="flecheinput"
          type="number"
          name="glycemiecible"
          onChange={this.handleChange}
          value={this.state.glycemiecible}
        />
        <label> g/l</label>
        <p> {this.state.glycemiecible}</p>

      </div>

    </div>
  }

  calculhypoglycemie = () => {
    if (this.state.glycemie<"0.8"){
      this.setState({hypo: true})
      console.log(this.state.hypo)
      return this.state.hypo
    } else this.setState ({hypo: false})

    // else calculnormal()
  }

  render() {
    return (
      <div>
        <div>
          <p>bla {this.state.hypo}</p>
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
        <button onClick={this.calculhypoglycemie}
        > Valider</button>
        {/* {this.state.glycemie < "0.80" ? "Attention, tu es en hypo => resucrage" : ""} */}
          
      </div>

{/* test affichage phrase hypoglycemie */}
      <div>
        <p className={this.state.hypo === true ? "hypoglycemie" : "no-hypoglycemie" }>Tu es en hypoglycemie, pense à te resucrer :)</p>
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
