import { Link } from "react-scroll";
import hacker from "../assets/hacker1.gif";
import "./aboutme.css";
import SettingContext from "../context/SettingContext";
import { useContext } from "react";

const AboutMe = () => {
  const { blue, french, select } = useContext(SettingContext);
  return (
    <div id="aboutme">
      <div>
        <p className={blue ? "about-title-blue" : "about-title"}>
          {french ? "A PROPOS DE MOI" : "ABOUT ME"}
        </p>
        <div className="about-container">
          <img className="about-img" src={hacker} alt="hacker" />
          {french && (
            <p className="about-paragraph">
              BIENVENUE, JE M'APPELLE VALENTIN, J'HABITE A BAYONNE, FRANCE.
              <br /> JE SUIS PASSIONNE PAR LES NOUVELLES TECHNOLOGIES, LES
              JEUX-VIDEOS (ET BIEN EVIDEMMENT, PAR LE RETRO-GAMING, JE PENSE QUE
              VOUS L'AVEZ DEVINE) ET POUR TOUT CE QUI TOUCHE A LA POP CULTURE.
              <br /> JE SUIS ACTUELLEMENT EN FORMATION INTENSIVE DEVELOPPEUR WEB
              FULL STACK (JAVASCRIPT) A LA WILD CODE SCHOOL DE BIARRITZ, DURANT
              LAQUELLE J'AI PRIS PART A DIFFERENTS PROJETS EN EQUIPE QUE VOUS
              POUVEZ DECOUVRIR{" "}
              <Link
                className="about-link"
                to="projects"
                onClick={() => select()}
              >
                ICI
              </Link>
              .
              <br /> JE SUIS MOTIVE, CURIEUX, ET JE M'INTEGRE FACILEMENT DANS
              UNE NOUVELLE EQUIPE. AVIDE DE DECOUVRIR DE NOUVELLES CHOSES SUR LA
              PROGRAMMATION, JE SUIS OUVERT A TOUTE OFFRE D'EMPLOI !
              <br /> SI VOUS SOUHAITEZ EN APPRENDRE DAVANTAGE, N'HESITEZ PAS A
              ME CONTACTER{" "}
              <Link
                className="about-link"
                to="contact"
                onClick={() => select()}
              >
                ICI
              </Link>
              .
            </p>
          )}
          {!french && (
            <p className="about-paragraph">
              WELCOME, MY NAME IS VALENTIN, I LIVE IN BAYONNE, FRANCE.
              <br /> I HAVE A PASSION FOR NEW TECHNOLOGIES, GAMING ( AND
              RETROGAMING, OF COURSE, I AM PRETTY SURE YOU HAVE GUESSED IT ) AND
              FOR WHAT IS RELATED TO THE POP CULTURE.
              <br /> I AM CURRENTLY FOLLOWING A FULL STACK WEB DEVELOPER PROGRAM
              ( JAVASCRIPT ) AT THE WILD CODE SCHOOL, IN WHICH I HAVE BEEN
              INVOLVED IN DIFFERENT TEAM PROJECTS YOU CAN DISCOVER{" "}
              <Link
                className="about-link"
                to="projects"
                onClick={() => select()}
              >
                HERE
              </Link>
              .
              <br /> I AM MOTIVATED, CURIOUS, AND EASILY INTEGRATE INTO A NEW
              TEAM. READY TO DISCOVER A LOT OF NEW THINGS ABOUT PROGRAMMING, I
              AM OPEN FOR WORK !
              <br /> IF YOU WANT TO LEARN MORE ABOUT ME, DON'T HESITATE TO
              CONTACT ME{" "}
              <Link
                className="about-link"
                to="contact"
                onClick={() => select()}
              >
                HERE
              </Link>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
