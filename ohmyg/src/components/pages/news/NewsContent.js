import React from 'react'
import './NewsContent.css'
import Youtube from'react-youtube'

const NewsContent = () => {
    return (
        <>
                <div className="Main-Video">
                <div className ="Big-Video" >

                <h2> A la Une</h2>
                        <Youtube id = "video1" width="600" height="500" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
                 </div>

                          <div className = "Small-Video">
                                            <h2> Temoignage</h2>
                                            <Youtube id = "video2" width="560" height="430" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
                                            <h2> Rencontre</h2>
                                            <Youtube id = "video3" width="560" height="430" src="https://www.youtube.com/embed/0idJ9XpBFEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Youtube>
                                            

                         </div>

                        
                     </div>                
        </>
    )
}

export default NewsContent