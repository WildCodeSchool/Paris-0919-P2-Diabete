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
                <td>{props.glucides === undefined ? 'Glucides : 0g' : `Glucides : ${props.glucides} g`}</td>
                <td>{props.sucres === undefined ? 'Sucres : 0 g' : `Sucres : ${props.sucres} g`}</td>
            </tr>
            <tr>
                <td>{props.proteines === undefined ? 'Protéines : 0g' : `Protéines : ${props.proteines} g`}</td>
                <td>{props.lipides === undefined ? 'Lipides : 0g' : `Lipides : ${props.proteines} g`}</td>
            </tr>
            <tr>
                <td>{props.sel === undefined ? 'Sel : 0g' : `Sel : ${props.sel} g`}</td>
                <td>{props.fibres === undefined ? 'Fibres : 0g' : `Fibres : ${props.fibres} g`}</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}



export default NutriTable;