import ReactPlayer from "react-player";
import playlist from "./music";
import React from "react";
import { useState } from "react";
import useSound from "use-sound";
import soundselect from "./mp3/selectsound.wav";
import "./app.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [select] = useSound(soundselect);
  const [french, setFrench] = useState(false);
  const [blue, setBlue] = useState(false);
  const [musicPlayer, setMusicPlayer] = useState(false);
  return (
    <div className="App">
      {musicPlayer && (
        <ReactPlayer
          url={playlist[Math.round(Math.random() * 5)].src}
          controls
          width="0"
          height="0"
          playing={true}
          volume={0.3}
        />
      )}
      <NavBar french={french} select={select} blue={blue} />
      <Home
        french={french}
        setFrench={setFrench}
        musicPlayer={musicPlayer}
        setMusicPlayer={setMusicPlayer}
        select={select}
        blue={blue}
        setBlue={setBlue}
      />
      <AboutMe french={french} select={select} blue={blue} />
      <Skills french={french} select={select} blue={blue} />
      <Projects french={french} select={select} blue={blue} />
      <Contact french={french} select={select} blue={blue} />
    </div>
  );
}

export default App;
