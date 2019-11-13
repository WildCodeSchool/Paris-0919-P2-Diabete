import React from "react";
import "./NutriTable.css";
import { Link } from "react-router-dom";

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

      <h3>{props.name}</h3>
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
                : `Glucides : ${props.glucides} g`}
            </td>
            <td>
              {props.sucres === undefined
                ? "Sucres : 0 g"
                : `Sucres : ${props.sucres} g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.proteines === undefined
                ? "Protéines : 0g"
                : `Protéines : ${props.proteines} g`}
            </td>
            <td>
              {props.lipides === undefined
                ? "Lipides : 0g"
                : `Lipides : ${props.proteines} g`}
            </td>
          </tr>
          <tr>
            <td>
              {props.sel === undefined ? "Sel : 0g" : `Sel : ${props.sel} g`}
            </td>
            <td>
              {props.fibres === undefined
                ? "Fibres : 0g"
                : `Fibres : ${props.fibres} g`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutriTable;
