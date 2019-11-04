import React from 'react'
import './HomeNavButtons.css'



import pictoSectionRepas from '../../../assets/icons/picto-section-repas.png';
import pictoSectionCalcul from '../../../assets/icons/picto-section-calcul.png';
import pictoSectionNews from '../../../assets/icons/picto-section-news.png';
import pictoSectionInfosNut from '../../../assets/icons/picto-section-infosnut.png';



const HomeNavButtons = () => {
    return (
        <>
            <div className="fourBoxes">
                <div className="mealAndCalcul">
                    <div className="meal">
                        <a href="">
                            <img className = "iconMeal" src={pictoSectionRepas}/>                   
                        </a>
                    </div>
                    <div className="calcul">
                        <a href="">
                            <img className = "iconCalcul" src={pictoSectionCalcul}/>
                        </a>
                    </div>
                </div>
                <div className="newsAndNutri">
                    <div className="news">
                        <a href="">
                            <img className = "iconNews" src={pictoSectionNews}/>
                        </a>
                    </div>
                    <div className="nutri">
                        <a href="">
                            <img className = "iconInfosNut" src={pictoSectionInfosNut}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNavButtons;
