import useSound from "use-sound";
import soundoption from "../mp3/option-sound2.wav";
import { useState } from "react";
import "./home.css";

const Home = ({
  french,
  setFrench,
  musicPlayer,
  setMusicPlayer,
  select,
  blue,
  setBlue,
}) => {
  const [option] = useSound(soundoption);
  const [start, setStart] = useState(false);
  return (
    <div id="home">
      <div className="home-title">
        <p className={blue ? "home-name-blue" : "home-name"}>VALENTIN LAGUES</p>
        <p className={blue ? "home-developer-blue" : "home-developer"}>
          {french ? "DEVELOPPEUR WEB" : "WEB DEVELOPER"}
        </p>
        {!start && (
          <p
            className="press-start"
            onClick={() => {
              setStart(!start);
              select();
            }}
          >
            {french ? "APPUYER SUR START" : "PRESS START BUTTON"}
          </p>
        )}
        {start && (
          <div className="settings">
            <div className="settings-container">
              <p className="start-selected">
                {french ? "PARAMETRES" : "SETTINGS"}
              </p>
              <div className="settings-list">
                <div className="settings-card">
                  <p className="settings-select">
                    {french ? "LANGUE" : "LANGUAGE"}
                  </p>
                  <button
                    type="button"
                    className="settings-choice"
                    onClick={() => {
                      setFrench(!french);
                      option();
                    }}
                  >
                    {french ? "FR" : "EN"}
                  </button>
                </div>
                <div className="settings-card">
                  <p className="settings-select">
                    {french ? "COULEUR" : "COLOR"}
                  </p>
                  <button
                    type="button"
                    className={blue ? "settings-blue" : "settings-pink"}
                    onClick={() => {
                      setBlue(!blue);
                      option();
                    }}
                  >
                    {blue && french
                      ? "BLEU"
                      : blue
                      ? "BLUE"
                      : french
                      ? "ROSE"
                      : "PINK"}
                  </button>
                </div>
                <div className="settings-card">
                  <p className="settings-select">
                    {french ? "MUSIQUE" : "MUSIC"}
                  </p>
                  <button
                    type="button"
                    className={musicPlayer ? "music-on" : "settings-choice"}
                    onClick={() => {
                      setMusicPlayer(!musicPlayer);
                      option();
                    }}
                  >
                    {musicPlayer ? "ON" : "OFF"}
                  </button>
                </div>
              </div>
            </div>
            <p
              className="settings-save"
              onClick={() => {
                setStart(!start);
                select();
              }}
            >
              {french ? "SAUVEGARDER" : "SAVE"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
