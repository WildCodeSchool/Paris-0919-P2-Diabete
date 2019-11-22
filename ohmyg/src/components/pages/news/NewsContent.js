import React from "react";

import icon from "../../../assets/icons/pictog-coeur-39.png";
import Youtube from "react-youtube";

import "./NewsContent.css";

class NewsContent extends React.Component {

  render() {
    return (
      <div>
        <div className="Main-Video">
          <h1 className='newsContent-Page'> A la Une !</h1>
          <Youtube
            id="video2"
            videoId="0idJ9XpBFEo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <h2 className='newsContent-testymony'>Temoignages</h2>
          <Youtube
            id="video2"
            videoId="A320QGM80Z8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <h2 className='newsContent-meeting'>Rencontres</h2>
          <Youtube
            id="video3"
            videoId="hVaKaZcQqec"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div className="NewsContent-Article">
          <h2 className='firstArticleTitle'>Tout savoir sur le diabète</h2>
          <p className='textFirstArticle-block1'> Le diabète, c’est avoir trop de sucre dans le sang. On dit que c’est un diabète sucré. Attention ! On n’a pas un diabète sucré parce qu’on mange trop de sucre, comme on le croit trop souvent.
          <br />
            Chez l’enfant, le diabète est dû à la disparition d’une substance appelée l’Insuline. C’est donc un diabète sucré insulinodépendant.</p>

          <h3 className='firstArticle-substitle'>Le traitement</h3>
          <p className='textFirstArticle-block2'>Pour faire baisser le sucre dans le sang, il faut donner l’insuline qui a disparu. Le traitement par l’insuline a trois particularités :

          L’insuline ne peut pas être prise par la bouche, car elle est détruite par la digestion. Il faut donc l’injecter sous la peau.
          Le traitement doit actuellement être poursuivi toute la vie, sans interruption. Des traitements plus simples ont de grandes chances d’être disponibles un jour, mais actuellement, le traitement par l’insuline permet d’avoir une activité physique, scolaire et professionnelle normale.
              Le traitement est effectué par le patient qui a un diabète ou par ses parents. Le médecin est le conseiller: il joue le rôle du moniteur d’auto-école, mais c’est le patient qui tient le volant. Il faut donc apprendre à traiter son diabète.</p>
        </div>

        <div className="NewsContent-Article ">
          <div className='NewsContent-block1'>
            <h2 className="secondArticleTitle">Le sport et le diabète</h2>
          </div>

          <div className='newsContent-block2'>
            <h3 className="Title-sport">Bouger pour aller mieux</h3>
            <div className='sportImageText'>
              <img className="Running-man" src="http://www.blacktiemagazine.com/Society_2009_january/Juvenile_Diabetes_Gary_hall.jpg" alt='Running Man' />
              <p className="text-sportAndDiabete"> Le nageur américain Gary Hall plusieurs fois médaillé aux JO de Sydney en 2000 ou encore Chris Jarvis, rameur, médaillé d'or en championnat du monde... Tous les deux sont diabétiques et leur maladie ne les a pas empêchés d'exercer un sport à haut niveau. Et si leurs parcours sont impressionnants et forcent l'admiration, l'idée reste toutefois de trouver un sport adapté à votre condition physique.
              Pour promouvoir la pratique du sport auprès des personnes diabétiques, la Fédération française de triathlon a mis en place un programme adapté. Des entraîneurs ont reçu une formation spécifique pour mieux accompagner les sportifs atteints de diabète.</p>
            </div>
          </div>

          <div className='NewsContent-block3'>
            <h3 className="Title-sport">Des programmes sportifs adaptés aux diabétiques</h3>
            <p className="text-sportAndDiabete">Presque tous les sports peuvent être pratiqués, l’important est de se faire plaisir. On choisit celui qu’on préfère et qu’on peut pratiquer régulièrement.
            L’exercice musculaire régulier, qui peut se prolonger sans épuiser l’organisme développe la résistance à l’effort. De plus, si on a un diabète, l’exercice améliore le passage du glucose dans le muscle et permet de diminuer les doses d’insuline.
            Certains sports ne sont pas à encourager (voire à déconseiller), parce qu’ils sont potentiellement dangereux avec le diabète. Il peut s’agir d’un danger en cas d’hypoglycémie deltaplane, parapente, parachutisme, alpinisme en montagne, voile en solitaire, sports mécaniques) ; ou d’un risque de lésions rétiniennes (boxe).
              Pour la plongée sous-marine, l’apnée a toujours pu être pratiquée. Avec bouteilles, les jeunes de plus de 18 ans peuvent être accueillis dans les clubs de plongée, mais avec l’obligation de respecter certaines règles.</p>
          </div>

          <div className='NewsContent-block4'>
            <h3 className="Title-sport">Sports et glycémie</h3>
            <p className="text-sportAndDiabete">Le plus souvent, l’exercice physique fait baisser la glycémie pendant le sport et surtout dans les heures qui suivent le sport. Des précautions simples permettent d’éviter l’hypoglycémie :
          <br />
              • Diminuer les doses d’insuline
              <br />
              • Adapter l’alimentation
              <br />
              • Contrôler la glycémie, avant le sport pour savoir d’où on part et après pour savoir si la dose a été corrigée de façon correcte, pourquoi pas à la mi-temps.
              <br />
              Il est important de noter dans le carnet le sport pratiqué, la dose d’insuline, les collations prises, les glycémies. Il faut être d’autant plus attentif au début du diabète, quand on commence une nouvelle activité physique dont on ne connaît pas les effets.
              Peu à peu, on fait sa propre expérience et on apprend, par ses propres réactions, à faire les ajustements nécessaires, en s’aidant des conseils de l’équipe médicale.
              <br />
              Attention ! Ne jamais faire de sport à jeun.</p>
          </div>
        </div>

        <div className="NewsContent-Article">
          <div className='pyctoAndTitle'>
            <img className="picto-coeur" src={icon} alt="pictoCoeur" />
            <h2 className="thirdArticleTitle">Coups de coeur de la semaine</h2>
          </div>
          <div className='imageAndTextThirdArticle'>
            <img className="photo1" src="https://i.etsystatic.com/8886419/r/il/3940ae/1162144846/il_570xN.1162144846_k79i.jpg" alt='Pictures of bag' />
            <p className="text-pocketInsuline">Aujourd'hui, nous vous présentons une jolie pochette "Super Mario" faite mains. Elle vous permet de ranger vos stylos à insuline et tout le nécessaire. Vous pouvez retrouver plein d'autres modèles <span className='newsTarget'><a href='https://www.etsy.com/fr/search?q=pochettes+insuline' target='_blank'>ICI</a></span>.
          </p>
          </div>
        </div>
      </div>
    )
  };
}

export default NewsContent;
