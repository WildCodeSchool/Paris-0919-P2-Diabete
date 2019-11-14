import React, { Component } from "react";
import "./InsulinCalculation.css";
import smileyHypo from "../../../assets/icons/pictos-16.png";
import smileyHyper from "../../../assets/icons/pictos-17.png";
import icon from "../../../assets/icons/checked.png";

class InsulinCalculation extends Component {
  state = {
    totalGlucides: "",
    ratio: "",
    glycemie: "",
    sensibilite: "",
    glycemiecible: "",
    total: "0",
  };

  componentDidMount() {
    this.setState ({totalGlucides : this.props.carbs})
  }

  handleChange = e => {
    if (e.target.value.length > 4) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculhypoglycemie = () => {
    if (this.state.glycemie < "0.8") {
      this.setState({ total: "0" });
    } else if (this.state.glycemie >= "0.80" && this.state.glycemie <= "1.20") {
      this.setState({ total: this.state.totalGlucides / this.state.ratio });
    } else {
      const ecart = this.state.glycemie - this.state.glycemiecible;
      const correction = ecart / this.state.sensibilite;
      const totalCarbs = (this.state.totalGlucides / this.state.ratio + correction)
      this.setState({
        total: totalCarbs.toFixed(2)
      });
    }
  };

  render() {
    console.log(this.state.hypo)
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

              // value={this.props.carbs > 0 ? this.props.carbs : 
              //   this.state.totalGlucides}
            />
            <label className="unit"> g</label>
          </div>
        </div>

        <div className="ratioAndGlycemie">
          <div className="ratio">
            <p className="inputTitle">Mon Ratio</p>
            <div className="inputAndLabels">
              <label className="label" htmlFor="totalGlucides">
                1 pour{" "}
              </label>
              <input
                id="ratio"
                type="number"
                name="ratio"
                onChange={this.handleChange}
                value={this.state.ratio}
              />
              <label className="unit"> g</label>
            </div>
          </div>

          <div className="glycemie">
            <p className="inputTitle">Ma glycémie avant repas</p>
            <div className="inputAndLabels">
              <input
                className={
                  this.state.glycemie > "1.20"
                    ? "glycemieInputHyperColor"
                    : this.state.glycemie > "0.01" && this.state.glycemie < "0.8" ? "glycemieInputHypoColor" : ""
                }
                id="glycemie"
                type="number"
                name="glycemie"
                onChange={this.handleChange}
                value={this.state.glycemie}
              />
              <label className="unit">g/l</label>
            </div>
          </div>
        </div>

        <div>{this.state.glycemie > "1.20" ? 
         <div>
         <img
           className="smileyHyper"
           src={smileyHyper}
           alt="Tu es en hyperglycémie, remplis la suite :)"
         />
         <div className="hyperglycemie">
           <div className="sensibilite">
             <p className="inputTitle">Sensibilité</p>
             <div className="inputAndLabels">
               <label className="label">1 pour </label>
               <input
                 id="sensibiliteinput"
                 type="number"
                 name="sensibilite"
                 onChange={this.handleChange}
                 value={this.state.sensibilite}
               />
               <label className="unit"> g/l</label>
             </div>
           </div>
 
           <div className="glycemieCible">
             <p className="inputTitle">Glycémie cible</p>
             <div className="inputAndLabels">
               <input
                 id="flecheinput"
                 type="number"
                 name="glycemiecible"
                 onChange={this.handleChange}
                 value={this.state.glycemiecible}
               />
               <label className="unit"> g/l</label>
             </div>
           </div>
         </div>
       </div>
        : ""}</div>

        <div>{this.state.glycemie > "0.01" && this.state.glycemie < "0.8" ?
          <div
            className="warning"
          >
            <img
              className="smileyHypo"
              src={smileyHypo}
              alt="Attention, tu es en hypoglycémie, resucre-toi :)"
            />
          </div> : ""}</div>

        <div>
          <button
            className="InsulinCalculation-button"
            onClick={this.calculhypoglycemie}
          >
            <div className="Button-Border"></div>
            <img className="Button-Icon-Checked" src={icon} />
          </button>
        </div>



        <div className="total">
          <p id="totalTitle">Dose d'insuline suggérée</p>
          <div className="totalNumber">
            <p id="number"> {this.state.total} </p>
          </div>
        </div>

        <div className="warningCalcul">
          <p>
            Attention, ce calcul ne prend pas en compte l'évolution de ta
            glycémie à l'instant présent et l'activité physique que tu auras
            après ton repas.
          </p>
        </div>
      </div>
    );
  }
}

export default InsulinCalculation;
