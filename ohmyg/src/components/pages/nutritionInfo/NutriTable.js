import React from "react";
import { Link } from "react-router-dom";

import "./NutriTable.css";


const cleanProps = value => {
  let regex1 = /[<>]/g;
  if (typeof value === "string" && value.search(regex1) === 0) {
    value = value;
  } else if (typeof value === "string") {
    value = parseFloat(value).toFixed(1);
  } else {
    value = value.toFixed(1);
  }
  return value;
};

const NutriTable = props => {
  
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
            <td className="NutriTable-Glucides">
              {props.glucides === undefined
                ? "Glucides : non renseigné"
                : `Glucides : ${cleanProps(props.glucides)}g`}
            </td>
            <td>
              {props.sucres === undefined
                ? "Sucres : non renseigné"
                : `dont Sucres : ${cleanProps(props.sucres)}g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.proteines === undefined
                ? "Protéines : non renseigné"
                : `Protéines : ${cleanProps(props.proteines)}g`}
            </td>
            <td>
              {props.lipides === undefined
                ? "Lipides : non renseigné"
                : `Lipides : ${cleanProps(props.lipides)}g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.sel === undefined
                ? "Sel : non renseigné"
                : `Sel : ${cleanProps(props.sel)}g`}
            </td>
            <td>
              {props.fibres === undefined
                ? "Fibres : non renseigné"
                : `Fibres : ${cleanProps(props.fibres)}g`}
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
                ? "Calcium : non renseigné"
                : `Calcium : ${cleanProps(props.calcium)} mg`}
            </td>
            <td>
              {props.magnesium === undefined
                ? "Magnésium : non renseigné"
                : `Magnésium : ${cleanProps(props.magnesium)} mg`}
            </td>
          </tr>
          <tr>
            <td>
              {props.fer === undefined
                ? "Fer : non renseigné"
                : `Fer : ${parseFloat(props.fer).toFixed(1)} mg`}
            </td>
            <td>
              {props.vitamineC === undefined
                ? "Vitamine C : non renseigné"
                : `Vitamine C : ${cleanProps(props.vitamineC)} mg`}
            </td>
          </tr>
          <tr>
            <td>
              {props.vitamineE === undefined
                ? "Vitamine E : non renseigné"
                : `Vitamine E : ${cleanProps(props.vitamineE)} mg`}
            </td>
            <td>
              {props.vitamineD === undefined
                ? "Vitamine D : non renseigné"
                : `Vitamine D : ${cleanProps(props.vitamineD)} ug`}      
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutriTable;
