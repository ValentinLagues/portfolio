import ReactPlayer from "react-player";
import { useState } from "react";
import street from "../assets/street.gif";
import heroes from "../assets/wildheroes.png";
import olentzero from "../assets/olentzero.png";
import sounds from "../sound";
import computerlove from "../assets/computerlove.gif";
import "./projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(false);
  return (
    <div id="projects">
      <div>
        <p className="projects-title">PROJECTS</p>
        <div className="projects-container">
          <img
            className={
              selectedProject ? "projects-selected-card" : "projects-card"
            }
            src={street}
            alt="street"
            onClick={() => setSelectedProject(!selectedProject)}
          />
          {!selectedProject && (
            <p className="projects-select">SELECT PROJECTS</p>
          )}
          {selectedProject && (
            <div>
              <ReactPlayer
                url={sounds[0].src}
                controls
                width="0"
                height="0"
                playing={true}
                volume={1}
              />
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
                  <p className="projects-paragraph">
                    PROJECT
                    <br />
                    DURATION : 5 WEEKS
                    <br />
                    REACT, API, CSS
                  </p>
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
                  <p className="projects-paragraph">
                    HACKATHON
                    <br />
                    DURATION : 31 HOURS
                    <br />
                    REACT, CSS
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
