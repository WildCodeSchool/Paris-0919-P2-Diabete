import React from "react";
import "./NutriTable.css";
import { Link } from "react-router-dom";

const NutriTable = props => {
  console.log( "youpi", props.vitamineD)
  return (
    <div className="NutriTable-content">
      <div className="backTo">
        <svg
          height="30"
          width="30"
          viewBox="0 0 24 24"
          class="ccl-0f24ac4b87ce1f67 ccl-ed34b65f78f16205 ccl-0f084ffde1637b39"
        >
          <path d="M9.6 5.5L11.1556 7.05558L7.21126 11H21V13H7.21126L11.1556 16.9443L9.6 18.5L3 12L9.6 5.5Z"></path>
        </svg>
        <Link className="backTo-link" to="/nutritioninfo">
          <h4 className="backTo-link"> Retour </h4>
        </Link>
      </div>

      <h1 className="NutriTable-Title">{props.name}</h1>
      <table className="NutriTable-Tab">
        <thead>
          <tr>
            <th colSpan="2">Infos Nutritionnelles pour 100g</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">Energie : {props.energie} kcal </td>
          </tr>
          <tr>
            <td>
              {props.glucides === undefined
                ? "Glucides : 0g"
                : `Glucides : ${props.glucides.toFixed(1)}g`}
            </td>
            <td>
              {props.sucres === undefined
                ? "Sucres : 0g"
                : `Sucres : ${props.sucres.toFixed(1)}g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.proteines === undefined
                ? "Protéines : 0g"
                : `Protéines : ${props.proteines.toFixed(1)}g`}
            </td>
            <td>
              {props.lipides === undefined
                ? "Lipides : 0g"
                : `Lipides : ${props.proteines.toFixed(1)}g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.sel === undefined
                ? "Sel : 0g"
                : `Sel : ${props.sel.toFixed(1)}g`}
            </td>
            <td>
              {props.fibres === undefined
                ? "Fibres : 0g"
                : `Fibres : ${props.fibres.toFixed(1)}g`}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="NutriTable-SubTitle">Infos Vitaminées</h3>
      <table className="NutriTable-Vit">
        <thead>
          <tr>
            <th colSpan="2">Vitamines et Minéraux pour 100g</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.calcium === undefined
                ? "Calcium : 0 mg"
                : `Calcium : ${parseFloat(props.calcium).toFixed(1)} mg`}
            </td>
            <td>
              {props.magnesium === undefined
                ? "Magnésium : 0 mg"
                : `Magnésium : ${parseFloat(props.magnesium).toFixed(1)} mg`}
            </td>
          </tr>
          <tr>
            <td>
              {props.fer === undefined
                ? "Fer : 0 mg"
                : `Fer : ${parseFloat(props.fer).toFixed(1)} mg`}
            </td>
            <td>
              {props.vitamineC === undefined
                ? "Vitamine C : 0 mg"
                : `Vitamine C : ${parseFloat(props.vitamineC).toFixed(1)}mg`}
            </td>
          </tr>
          <tr>
            <td>
              {props.vitamineE === undefined
                ? "Vitamine E : 0 mg"
                : `Vitamine E : ${parseFloat(props.vitamineE).toFixed(1)} mg`}
            </td>
            <td>
              {props.vitamineD === undefined
                ? "Vitamine D : 0 ug"
                : `Vitamine D : ${parseFloat(props.vitamineD).toFixed(1)} ug`}
                
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutriTable;
