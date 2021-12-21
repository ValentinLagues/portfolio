import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import "./navbar.css";
import sounds from "../sound";

const NavBar = () => {
  const [sound, setSound] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <ul className={scroll ? "navbar-scroll" : "navbar"}>
      <li>
        <Link className="neon" to="home" onClick={() => setSound(!sound)}>
          HOME
        </Link>
        {sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
        {!sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
      </li>
      <li>
        <Link className="flicker" to="aboutme" onClick={() => setSound(!sound)}>
          ABOUT ME
        </Link>
        {sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
        {!sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
      </li>
      <li>
        <Link className="neon" to="skills" onClick={() => setSound(!sound)}>
          SKILLS
        </Link>
        {sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
        {!sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
      </li>
      <li>
        <Link className="neon" to="projects" onClick={() => setSound(!sound)}>
          PROJECTS
        </Link>
        {sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
        {!sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
      </li>
      <li>
        <Link
          className="flicker2"
          to="contact"
          onClick={() => setSound(!sound)}
        >
          CONTACT
        </Link>
        {sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
        {!sound && (
          <ReactPlayer
            url={sounds[0].src}
            controls
            width="0"
            height="0"
            playing={true}
            volume={0.3}
          />
        )}
      </li>
    </ul>
  );
};

export default NavBar;
