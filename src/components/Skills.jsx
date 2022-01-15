import "./skills.css";
import portrait from "../assets/pink.png";
import portraitblue from "../assets/blue.png";
import computer from "../assets/computer.gif";
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
                {/* <ul className="skills-coins">
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
                </ul> */}
                {/* <ul className="skills-paragraph">
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    HTML
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    CSS
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    SCSS
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    JAVASCRIPT
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    TYPESCRIPT
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    REACT
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    API REST (AXIOS)
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    MYSQL
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    NODE.JS
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    EXPRESS
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    GITHUB
                  </li>
                  <li>
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    <img className="coin" src={coin} alt="coin" />
                    SCRUM, TRELLO
                  </li>
                </ul> */}
                <div className="skills-paragraph">
                  <p className="skills-skill">
                    <span className="skills-stars">***&nbsp;</span> HTML
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">***&nbsp;</span> CSS
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">*&nbsp;</span> SCSS
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">**&nbsp;</span> JAVASCRIPT
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">*&nbsp;</span> TYPESCRIPT
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">**&nbsp;</span> REACT
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">**&nbsp;</span> API
                    REST(AXIOS)
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">***&nbsp;</span> MYSQL
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">*&nbsp;</span> NODE.JS
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">**&nbsp;</span> EXPRESS
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">***&nbsp;</span> GITHUB
                  </p>
                  <p className="skills-skill">
                    <span className="skills-stars">***&nbsp;</span> SCRUM,TRELLO
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

export default Skills;
