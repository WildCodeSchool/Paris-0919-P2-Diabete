import React, { Component } from "react";
import "./InsulinCalculation.css"

class InsulinCalculation extends Component {
  state = {
    totalGlucides: "",
    ratio: "",
    glycemie: "",
    sensibilite: "",
    glycemiecible: "",
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
    return <div>

      <p id="hyperglycemieWarning"> Attention, tu es en hyperglycémie. Rentre ces nouveaux paramètres :)</p>
      <div className="hyperglycemie">

        <div className="sensibilite">
          <p className="inputTitle">Sensibilité : </p>
          <div className="inputAndLabels">
            <label>1 pour </label>
            <input
              id="sensibiliteinput"
              type="number"
              name="sensibilite"
              onChange={this.handleChange}
              value={this.state.sensibilite}
            />
            <label> g/l</label>
          </div>
        </div>

        <div className="glycemieCible">
          <p className="inputTitle">Glycémie cible : </p>
          <div className="inputAndLabels">
            <input
              id="flecheinput"
              type="number"
              name="glycemiecible"
              onChange={this.handleChange}
              value={this.state.glycemiecible}
            />
            <label> g/l</label>
          </div>
        </div>

      </div>
    </div>
  }

  calculhypoglycemie = () => {
    if (this.state.glycemie < "0.8") {
      this.setState({ hypo: true })
      return this.state.hypo
    }

    if (this.state.glycemie >= "0.80" && this.state.glycemie <= "1.20") {
      this.setState({ hypo: false });
      this.setState({ total: this.state.totalGlucides / this.state.ratio })
      return this.state.total

    }

    else {
      this.setState({ hypo: false });
      const ecart = this.state.glycemie - this.state.glycemiecible
      const correction = ecart / this.state.sensibilite
      this.setState({ total: (this.state.totalGlucides / this.state.ratio) + correction })
      console.log(this.state.total)
      return this.state.total

    }

  }

  render() {
    return (
      <div className="insulinCalculationContainer">

        <div className="totalGlucides">
          <p className="inputTitle">Mon Total de Glucides </p>
          <div className="inputAndLabels">
            <input
              id="totalGlucides"
              type="number"
              name="totalGlucides"
              onChange={this.handleChange}
              value={this.state.totalGlucides}
            />
            <label> g</label>
          </div>
        </div>

        <div className="ratioAndGlycemie">
          <div className="ratio">
            <p className="inputTitle">Mon Ratio : </p>
            <div className="inputAndLabels">
              <label htmlFor="totalGlucides">1 pour  </label>
              <input
                id="ratio"
                type="number"
                name="ratio"
                onChange={this.handleChange}
                value={this.state.ratio}
              />
              <label> g de glucides</label>
            </div>
          </div>

          <div className="glycemie">
            <p className="inputTitle">Ma glycémie avant repas : </p>
            <div className="inputAndLabels">
              <input
                id="glycemie"
                type="number"
                name="glycemie"
                onChange={this.handleChange}
                value={this.state.glycemie}
              />
              <label> g/l</label>
            </div>
          </div>
        </div>

        <div>
          {this.state.glycemie > "1.20" ? this.hyperglycemie() : ""}

        </div>

        <div>
          <button onClick={this.calculhypoglycemie}
          > Valider</button>
        </div>

        {/* test affichage phrase hypoglycemie */}
        <div>
          <p className={this.state.hypo === true ? "hypoglycemie" : "no-hypoglycemie"}>Tu es en hypoglycemie, pense à te resucrer :)</p>
        </div>

        <div className="total">
          <p id="totalTitle">Dose d'insuline suggérée :</p>
          <p id="totalNumber"> Total : {this.state.total} </p>
        </div>

      </div>

    );
  }
}

export default InsulinCalculation;
