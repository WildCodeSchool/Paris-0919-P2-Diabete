import React from "react";
import './NutriTable.css'
import { Link } from 'react-router-dom';


const NutriTable = (props) => {
  
  return (
    <div className ="NutriTable-content">
        <Link to="/nutritioninfo"><h2> Retour</h2></Link>
        <h3>{props.name}</h3>

    <table className="NutriTable-Tab">
        <thead>
            <tr>
                <th colSpan="2">Infos Nutritionnelles pour 100g</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan="2" >Energie : {props.energie} kcal </td>
            </tr>
            <tr>
                <td>Glucides : {props.glucides} g </td>
                <td>dont Sucres : {props.sucres} g </td>
            </tr>
            <tr>
                <td>Protéines : {props.proteines} g</td>
                <td>Lipides : {props.lipides} g</td>
            </tr>
            <tr>
                <td>Sel : {props.sel} g</td>
                <td>Fibres : {props.fibres} g</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}



export default NutriTable;