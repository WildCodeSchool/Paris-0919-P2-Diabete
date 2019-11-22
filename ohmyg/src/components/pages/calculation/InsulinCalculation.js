import React, { Component } from "react";

import icon from "../../../assets/icons/checked.png";
import smileyHyper from "../../../assets/icons/picto-hyper.png";
import smileyHyperMob from "../../../assets/icons/picto-hyper-mob.png";

import "./InsulinCalculation.css";

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
    this.setState({ totalGlucides: this.props.carbs })
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
      this.setState({ total: (this.state.totalGlucides / this.state.ratio).toFixed(2) });
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
    return (
      <div className="insulinCalculationContainer">
        <div className="insulinCalculation-firstParamaters">
          <div className="insulinCalculation-smileys insulinCalculation-hiddenInDesktop">
            <div>{this.state.glycemie === "" || this.state.glycemie === "0" || (this.state.glycemie >= "0.8" && this.state.glycemie <= "1.2") ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileySetParam"
                  src={this.props.mobParam}
                  alt="Saisis tes paramètres"
                />
              </div>
              : <p></p>}
            </div>

            <div>{this.state.glycemie > "1.20" ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileyHyper"
                  src={smileyHyperMob}
                  alt="Tu es en hyperglycémie, remplis la suite :)"
                />
              </div>
              : ""}
            </div>

            <div>{this.state.glycemie > "0.01" && this.state.glycemie < "0.8" ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileyHypo"
                  src={this.props.mobHypo}
                  alt="Attention, tu es en hypoglycémie, resucre-toi :)"
                />
              </div>
              : ""}
            </div>
          </div>


          <div className={`insulinCalculation-totalGlucides ${this.props.color2}`}>
            <p className="insulinCalculation-inputTitle">Les glucides contenus dans mon repas</p>
            <div className="insulinCalculation-inputAndLabels">
              <input
                id="totalGlucides"
                type="number"
                name="totalGlucides"
                onChange={this.handleChange}
                value={this.state.totalGlucides}
              />
              <label className="insulinCalculation-unit"> g</label>
            </div>
          </div>

          <div className={`insulinCalculation-ratioAndGlycemie ${this.props.color2} `}>
            <div className="insulinCalculation-normal">
              <div className="insulinCalculation-ratio">
                <p className="insulinCalculation-inputTitle">Mon Ratio</p>
                <div className="insulinCalculation-inputAndLabels">
                  <label className="insulinCalculation-label" htmlFor="totalGlucides">
                    1 /{" "}
                  </label>
                  <input
                    id="ratio"
                    type="number"
                    name="ratio"
                    onChange={this.handleChange}
                    value={this.state.ratio}
                  />
                  <label className="insulinCalculation-unit"> g</label>
                </div>
              </div>

              <div className="insulinCalculation-glycemie">
                <p className="insulinCalculation-inputTitle">Glycémie avant repas</p>
                <div className="insulinCalculation-inputAndLabels">
                  <input
                    className={
                      this.state.glycemie > "1.20"
                        ? "insulinCalculation-glycemieInputHyperColor"
                        : this.state.glycemie > "0.01" && this.state.glycemie < "0.8" ? "glycemieInputHypoColor" : ""
                    }
                    id="glycemie"
                    type="number"
                    name="glycemie"
                    onChange={this.handleChange}
                    value={this.state.glycemie}
                  />
                  <label className="insulinCalculation-unit">g/l</label>
                </div>
              </div>
            </div>

            <div className="insulinCalculation-notNormal">
              <div>{this.state.glycemie > "1.20" ?
                <div className={`insulinCalculation-hyperglycemie ${this.props.color2}`}>
                  <div className="insulinCalculation-sensibilite">
                    <p className="insulinCalculation-inputTitle">Sensibilité</p>
                    <div className="insulinCalculation-inputAndLabels">
                      <label className="insulinCalculation-label">1 / </label>
                      <input
                        id="sensibiliteinput"
                        type="number"
                        name="sensibilite"
                        onChange={this.handleChange}
                        value={this.state.sensibilite}
                      />
                      <label className="insulinCalculation-unit"> g/l</label>
                    </div>
                  </div>

                  <div className="insulinCalculation-glycemieCible">
                    <p className="insulinCalculation-inputTitle">Glycémie cible</p>
                    <div className="insulinCalculation-inputAndLabels">
                      <input
                        id="flecheinput"
                        type="number"
                        name="glycemiecible"
                        onChange={this.handleChange}
                        value={this.state.glycemiecible}
                      />
                      <label className="insulinCalculation-unit"> g/l</label>
                    </div>
                  </div>
                </div>
                : ""}
              </div>
            </div>
          </div>

          <div className="insulinCalculation-smileys insulinCalculation-hiddenInMobile">
            <div>{this.state.glycemie === "" || this.state.glycemie === "0" || (this.state.glycemie >= "0.8" && this.state.glycemie <= "1.2") ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileySetParam"
                  src={this.props.desktParam}
                  alt="Saisis tes paramètres"
                />
              </div>
              : <p></p>}
            </div>

            <div>{this.state.glycemie > "1.20" ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileyHyper"
                  src={smileyHyper}
                  alt="Tu es en hyperglycémie, remplis la suite :)"
                />
              </div>
              : ""}
            </div>

            <div>{this.state.glycemie > "0.01" && this.state.glycemie < "0.8" ?
              <div className="insulinCalculation-smiley-box">
                <img
                  className="insulinCalculation-smileyHypo"
                  src={this.props.desktHypo}
                  alt="Attention, tu es en hypoglycémie, resucre-toi :)"
                />
              </div>
              : ""}
            </div>
          </div>
        </div>

        <div className="insulinCalculation-button-box">
          <button
            className={`insulinCalculation-button ${this.props.color1}`}
            onClick={this.calculhypoglycemie}
          >
            <div className="insulinCalculation-Button-Border"></div>
            <img className="insulinCalculation-Button-Icon-Checked" src={icon} />
          </button>
        </div>

        <div className={`insulinCalculation-total ${this.props.color2}`}>
          <p id="insulinCalculation-totalTitle">Doses d'insuline suggérées</p>
          <div className="insulinCalculation-totalNumber">
            <p id="insulinCalculation-number"> {this.state.total} </p>
          </div>
          <div className={`insulinCalculation-warningCalcul`}>
            <p>
              Attention, ce calcul ne prend pas en compte l'évolution de ta
              glycémie à l'instant présent et l'activité physique que tu auras
              après ton repas.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InsulinCalculation;
