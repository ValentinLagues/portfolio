import { useState } from "react";
import street from "../assets/street.gif";
import heroes from "../assets/wildheroes.png";
import olentzero from "../assets/olentzero.png";
import computerlove from "../assets/computerlove.gif";
import "./projects.css";

const Projects = ({ french, select, blue }) => {
  const [selectedProject, setSelectedProject] = useState(false);
  return (
    <div id="projects">
      <div>
        <p className={blue ? "projects-title-blue" : "projects-title"}>
          {french ? "PROJETS" : "PROJECTS"}
        </p>
        <div className="projects-container">
          <img
            className={
              selectedProject ? "projects-selected-card" : "projects-card"
            }
            src={street}
            alt="street"
            onClick={() => {
              setSelectedProject(!selectedProject);
              select();
            }}
          />
          {!selectedProject && (
            <p className="projects-select">
              {french ? "SELECTIONNEZ UN PROJET" : "SELECT PROJECTS"}
            </p>
          )}
          {selectedProject && (
            <div className="projects-list">
              <div className="projects-one">
                <a
                  href="https://valentinlagues.github.io/Wild-Heroes/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="projects-img" src={heroes} alt="heroes" />
                </a>
                <p className="projects-name">WILD-HEROES</p>
                {french ? (
                  <p className="projects-paragraph">
                    PROJEt
                    <br />
                    DUREE : 5 SEMAINES
                    <br />
                    REACT, API, CSS
                  </p>
                ) : (
                  <p className="projects-paragraph">
                    PROJECT
                    <br />
                    DURATION : 5 WEEKS
                    <br />
                    REACT, API, CSS
                  </p>
                )}
              </div>
              <img
                className="computer-love"
                src={computerlove}
                alt="computerlove"
              />
              <div className="projects-one">
                <a
                  href="https://valentinlagues.github.io/Olentzero-Music/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-img"
                    src={olentzero}
                    alt="olentzero"
                  />
                </a>
                <p className="projects-name">OLENTZERO-MUSIC</p>
                {french ? (
                  <p className="projects-paragraph">
                    HACKATHON
                    <br />
                    DUREE : 31 HEURES
                    <br />
                    REACT, CSS
                  </p>
                ) : (
                  <p className="projects-paragraph">
                    HACKATHON
                    <br />
                    DURATION : 31 HOURS
                    <br />
                    REACT, CSS
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
