import React from "react";
import "./NewsContent.css";
import Youtube from "react-youtube";

class NewsContent extends React.Component  {

  render () {
    // const size1 = {
    //     height: '400',
    //     }
  
      return (

    <>
      <div className="Main-Video">

          <h1> A la Une !</h1>
          <Youtube
            id="video2"
            videoId="0idJ9XpBFEo"
            // opts={size1}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />



          <h2> Temoignages</h2>
          <Youtube
            id="video2"
            videoId="A320QGM80Z8"
            // opts={size1}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <h2> Rencontres</h2>
          <Youtube
            id="video3"
            videoId="hVaKaZcQqec"
            // opts={size1}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

    </>
  );
};
}

export default NewsContent;
