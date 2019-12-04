import React from 'react'
import { Link } from "react-router-dom"

import pictoSectionCalcul from '../../../assets/icons/picto-section-calcul.png';
import pictoSectionInfosNut from '../../../assets/icons/picto-section-infosnut.png';
import pictoSectionNews from '../../../assets/icons/picto-section-news.png';
import pictoSectionRepas from '../../../assets/icons/picto-section-repas.png';

import './HomeNavButtons.css'



const HomeNavButtons = () => {
    return (
        <>
            <div className="fourBoxes">
                <div className="mealAndCalcul">
                    <div className="meal scale-up-center">
                        <Link to="/meal">
                            <img className="iconMeal" src={pictoSectionRepas} />
                        </Link>
                    </div>
                    <div className="calcul scale-up-center">
                        <Link to="/calculation">
                            <img className="iconCalcul" src={pictoSectionCalcul} />
                        </Link>
                    </div>
                </div>
                <div className="newsAndNutri">
                    <div className="news scale-up-center">
                        <Link to="/news">
                            <img className="iconNews" src={pictoSectionNews} />
                        </Link>
                    </div>
                    <div className="nutri scale-up-center">
                        <Link to="/nutritioninfo">
                            <img className="iconInfosNut" src={pictoSectionInfosNut} />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeNavButtons;
