import "./skills.css";
import portrait from "../assets/pink.png";
import portraitblue from "../assets/blue.png";
import computer from "../assets/computer.gif";
import coin from "../assets/coin.gif";
import { useState, useContext } from "react";
import SettingContext from "../context/SettingContext";

const Skills = () => {
  const [selected, setSelected] = useState(false);
  const { blue, french, select } = useContext(SettingContext);
  return (
    <div id="skills">
      <div>
        <p className={blue ? "skills-title-blue" : "skills-title"}>
          {french ? "COMPETENCES" : "SKILLS"}
        </p>
        <div className="skills-container">
          <img
            className={
              selected ? "skills-selected-portrait" : "skills-portrait"
            }
            src={blue ? portraitblue : portrait}
            alt="portrait"
            onClick={() => {
              setSelected(!selected);
              select();
            }}
          />
          {!selected && (
            <p className="skills-player">
              {french ? "SELECTIONNEZ VOTRE JOUEUR" : "SELECT PLAYER"}
            </p>
          )}
          {selected && (
            <div>
              <p className="skills-name">VALENTIN</p>
              <p className="skills-fullstack">
                {french
                  ? "DEVELOPPEUR WEB FULL STACK"
                  : "FULL STACK WEB DEVELOPER"}
              </p>
              <div className="skills-card">
                <img
                  className="skills-computer"
                  src={computer}
                  alt="computer"
                />
                <></>
                <ul className="skills-coins">
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                </ul>
                <ul className="skills-paragraph">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>JAVASCRIPT</li>
                  <li>TYPESCRIPT</li>
                  <li>REACT</li>
                  <li>API REST (AXIOS)</li>
                  <li>MYSQL</li>
                  <li>NODE.JS</li>
                  <li>EXPRESS</li>
                  <li>GITHUB</li>
                  <li>SCRUM, TRELLO</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
