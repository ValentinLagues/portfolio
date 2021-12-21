import "./skills.css";
import portrait from "../assets/red.png";
import computer from "../assets/computer.gif";
import coin from "../assets/coin.gif";
import { useState } from "react";
import ReactPlayer from "react-player";
import sounds from "../sound";

const Skills = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div id="skills">
      <div>
        <p className="skills-title">SKILLS</p>
        <div className="skills-container">
          <img
            className={
              selected ? "skills-selected-portrait" : "skills-portrait"
            }
            src={portrait}
            alt="portrait"
            onClick={() => setSelected(!selected)}
          />
          {!selected && <p className="skills-player">SELECT PLAYER</p>}
          {selected && (
            <div>
              <p className="skills-name">VALENTIN</p>
              <p className="skills-fullstack">FULL STACK WEB DEVELOPER</p>
              <ReactPlayer
                url={sounds[0].src}
                controls
                width="0"
                height="0"
                playing={true}
                volume={1}
              />
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
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                  </li>
                </ul>
                <ul className="skills-paragraph">
                  <li>HTML</li>
                  <li>CSS</li>
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
