import { useState } from "react";
import heroes from "../assets/wildheroes.png";
import olentzero from "../assets/olentzero.png";
import "./projects.css";

const Projects = ({ french, select, blue }) => {
  const [selectedProject1, setSelectedProject1] = useState(false);
  const [selectedProject2, setSelectedProject2] = useState(false);
  return (
    <div id="projects">
      <div>
        <p className={blue ? "projects-title-blue" : "projects-title"}>
          {french ? "PROJETS" : "PROJECTS"}
        </p>
        <div className="projects-container">
          <p className="projects-select">
            {french ? "SELECTIONNEZ UN PROJET" : "SELECT PROJECTS"}
          </p>
          <div className="projects-list">
            <div className="projects-one">
              <img
                className={
                  selectedProject1 ? "projects-img-selected" : "projects-img"
                }
                src={heroes}
                alt="heroes"
                onClick={() => {
                  setSelectedProject1(!selectedProject1);
                  select();
                }}
              />
              {!selectedProject1 && (
                <p className="projects-name">WILD-HEROES</p>
              )}
              {selectedProject1 && (
                <div className="projects-description">
                  <p className="projects-name-selected">WILD-HEROES</p>
                  {french ? (
                    <p className="projects-paragraph">
                      PROJET
                      <br />
                      DUREE : 5 SEMAINES
                      <br />
                      REACT, API, CSS, AGILE
                      <br />
                      <br />
                      CE PROJET EN EQUIPE DE 5 SEMAINES A ETE REALISE DANS LE
                      CADRE DE MA FORMATION A LA WILD CODE SCHOOL AFIN DE CREER
                      UNE APPLICATION EN REACT DE A A Z EN UTILISANT LA METHODE
                      AGILE AINSI QUE DES APPELS API.
                      <br /> CLIQUEZ{" "}
                      <a
                        className="projects-link"
                        href="https://valentinlagues.github.io/Wild-Heroes/#/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ICI
                      </a>{" "}
                      POUR ACCEDER AU SITE
                    </p>
                  ) : (
                    <p className="projects-paragraph">
                      PROJECT
                      <br />
                      DURATION : 5 WEEKS
                      <br />
                      REACT, API, CSS, AGILE
                      <br />
                      <br />
                      THIS TEAM PROJECT WAS REALIZED IN 5 WEEKS DURING MY WILD
                      CODE SCHOOL PROGRAM IN ORDER TO CREATE A REACT APP FROM A
                      TO Z USING AGILE AND API CALLS.
                      <br />
                      CLICK{" "}
                      <a
                        className="projects-link"
                        href="https://valentinlagues.github.io/Wild-Heroes/#/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      TO VISIT
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="projects-one">
              <img
                className={
                  selectedProject2 ? "projects-img-selected" : "projects-img"
                }
                src={olentzero}
                alt="olentzero"
                onClick={() => {
                  setSelectedProject2(!selectedProject2);
                  select();
                }}
              />
              {!selectedProject2 && (
                <p className="projects-name">OLENTZERO-MUSIC</p>
              )}
              {selectedProject2 && (
                <div className="projects-description">
                  <p className="projects-name-selected">OLENTZERO-MUSIC</p>
                  {french ? (
                    <p className="projects-paragraph">
                      HACKATHON
                      <br />
                      DUREE : 31 HEURES
                      <br />
                      REACT, CSS
                      <br />
                      <br />
                      CE HACKATHON DE 31 HEURES A ETE REALISE DANS LE CADRE DE
                      MA FORMATION A LA WILD CODE SCHOOL. LE THEME IMPOSE ETAIT
                      LA MUSIQUE ET NOUS AVONS DECIDE DE CREER UN CALENDRIER DE
                      L'AVENT MUSICAL.
                      <br />
                      CLIQUEZ{" "}
                      <a
                        className="projects-link"
                        href="https://valentinlagues.github.io/Olentzero-Music/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ICI
                      </a>{" "}
                      POUR ACCEDER AU SITE
                    </p>
                  ) : (
                    <p className="projects-paragraph">
                      HACKATHON
                      <br />
                      DURATION : 31 HOURS
                      <br />
                      REACT, CSS
                      <br />
                      <br />
                      THIS 31 HOURS HACKATHON WAS REALIZED DURING MY WILD CODE
                      SCHOOL PROGRAM. THE IMPOSED THEME WAS THE MUSIC AND WE
                      CHOSE TO CREATE A MUSICAL ADVENT CALENDAR.
                      <br />
                      CLICK{" "}
                      <a
                        className="projects-link"
                        href="https://valentinlagues.github.io/Olentzero-Music/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      TO VISIT
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
