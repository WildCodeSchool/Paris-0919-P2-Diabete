
import React from "react";
import ContentFrame from "../../layout/ContentFrame";
import Footer from "../../layout/Footer";
import HeaderMobile from "../../layout/HeaderMobile";
import icon from "../../../assets/icons/picto-section-infosnut.png";
import logo from "../../../assets/pictures/logoOMG.svg";
import Navbar from "../../layout/Navbar";
import NutriTable from "./NutriTable";
import axios from "axios";
import "./InfoNutApi.css";
import "./NutriTable.css";

class DisplayInfoNut extends React.Component {
  state = {
    food: "",
    isLoaded: false
  };

  getInfoNut = () => {
    const foodId = this.props.match.params.origfdcd;
    console.log("test props", foodId);
    axios
      .get(
        `https://plateforme.api-agro.fr/api/records/1.0/search/?dataset=tables-ciqual&rows=5&facet=origfdcd&q=${foodId}`
      )
      .then(response => response.data)
      .then(data => {
        console.log("test API foodId", data) ||
          this.setState({ food: data.records, isLoaded: true });
      });
  };

  componentDidMount() {
    this.getInfoNut();
  }

  render() {
    return (
      <div className="info-background">
        {this.state.isLoaded ? (
          <>
            <Navbar src={logo} color="icones-nutritionInfo" />
            <HeaderMobile src={logo} />
            <ContentFrame
              src={icon}
              content={
                <NutriTable
                  name={this.state.food[0].fields.origfdnm}
                  energie={
                    this.state.food[0].fields
                      .energie_n_x_facteur_jones_avec_fibres_kcal_100g
                  }
                  glucides={this.state.food[0].fields.glucides_g_100g}
                  sucres={this.state.food[0].fields.sucres_g_100g}
                  proteines={this.state.food[0].fields.proteines_g_100g}
                  lipides={this.state.food[0].fields.lipides_g_100g}
                  sel={this.state.food[0].fields.sel_chlorure_de_sodium_g_100g}
                  fibres={this.state.food[0].fields.fibres_alimentaires_g_100g}
                  vitamineE={this.state.food[0].fields.vitamine_e_mg_100g}
                  vitamineD={this.state.food[0].fields.vitamine_d_ug_100g}
                  vitamineC={this.state.food[0].fields.vitamine_c_mg_100g}
                  vitamineB2={this.state.food[0].fields.vitamine_b2_ou_riboflavine_mg_100g}
                  vitamineB1={this.state.food[0].fields.vitamine_b1_ou_thiamine_mg_100g}
                  calcium={this.state.food[0].fields.calcium_mg_100g}
                  magnesium={this.state.food[0].fields.magnesium_mg_100g}
                  fer={this.state.food[0].fields.fer_mg_100g}
                />
              }
            />
            <Footer color="footer-info" />
          </>
        ) : (
          <>
            <Navbar src={logo} color="icones-nutritionInfo" />
            <HeaderMobile src={logo} />
            <div className="Loading">
              <p className="Loading-text">Loading...</p>
            </div>
            <Footer color="footer-info" />
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfoNut;
