import React from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Music from "./components/music";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { MusicContextProvider } from "./context/MusicContext";
import { SettingContextProvider } from "./context/SettingContext";

function App() {
  const changeBackground = () => {
    document.getElementById("app").classList.toggle("blue");
  };
  return (
    <SettingContextProvider>
      <div id="app" className="App">
        <NavBar />
        <MusicContextProvider>
          <Home changeBackground={changeBackground} />
          <Music />
        </MusicContextProvider>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </SettingContextProvider>
  );
}

export default App;
