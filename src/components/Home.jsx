import ReactPlayer from "react-player";
import { useState } from "react";
import "./home.css";
import playlist from "../music";

const Home = () => {
  const [english, setEnglish] = useState(true);
  const [musicPlayer, setMusicPlayer] = useState(false);
  return (
    <div id="home">
      <div className="home-title">
        <p className="home-name">VALENTIN LAGUES</p>
        <p className="home-developper">WEB DEVELOPER</p>
        <p
          className={musicPlayer ? "home-close" : "home-start"}
          onClick={() => setMusicPlayer(!musicPlayer)}
        >
          * PRESS START BUTTON *
        </p>
        {musicPlayer && (
          <div>
            <ReactPlayer
              url={playlist[Math.round(Math.random() * 5)].src}
              controls
              width="0"
              height="0"
              playing={true}
              volume={0.3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
