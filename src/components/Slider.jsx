import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import heroes from "../assets/wildheroes.png";
import olentzero from "../assets/olentzero.png";
import "./slider.css";

const Slider = ({ french, blue }) => {
  return (
    <div id="projects">
      <p className={blue ? "projects-title-blue" : "projects-title"}>
        {french ? "PROJETS" : "PROJECTS"}
      </p>
      <div className="projects-container">
        <Carousel>
          <div>
            <img src={heroes} alt="heroes" />{" "}
            {french ? (
              <p className="legend">
                PROJET
                <br />
                DUREE : 5 SEMAINES
                <br />
                REACT, API, CSS
              </p>
            ) : (
              <p className="legend">
                PROJECT
                <br />
                DURATION : 5 WEEKS
                <br />
                REACT, API, CSS
              </p>
            )}
          </div>
          <div>
            <img src={olentzero} alt="olentzero" />
            {french ? (
              <p className="legend">
                HACKATHON
                <br />
                DUREE : 31 HEURES
                <br />
                REACT, CSS
              </p>
            ) : (
              <p className="legend">
                HACKATHON
                <br />
                DURATION : 31 HOURS
                <br />
                REACT, CSS
              </p>
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
