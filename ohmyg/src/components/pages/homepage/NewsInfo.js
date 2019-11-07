import React from 'react'
import './NewsInfo.css'
import Youtube from'react-youtube'

const NewsInfo = () => {
    return (
        <>
            <div class="frameContainer">
                <div className="frame">
                    <div className="pageLogo">

                        <div className = "content">
                        <h2> A la Une</h2>
                        <iframe width="560" height="430" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                <div className = "saucise"> 

                        <div className = "rencontre">
                        <h3>Rencontre</h3>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className = "temoignage">
                        <h3>Témoignage</h3>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                </div> 
                        
                     </div>                
                </div>
            </div>
        </>
    )
}

export default NewsInfo