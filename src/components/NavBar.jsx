import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import SettingContext from "../context/SettingContext";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const { blue, french, select } = useContext(SettingContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <ul className={scroll ? "navbar-scroll" : "navbar"}>
      <li>
        <Link
          className={blue ? "neonblue" : "neon"}
          to="home"
          onClick={() => select()}
        >
          {french ? "ACCUEIL" : "HOME"}
        </Link>
      </li>
      <li>
        <Link
          className={blue ? "flickerblue" : "flicker"}
          to="aboutme"
          onClick={() => select()}
        >
          {french ? "A PROPOS" : "ABOUT ME"}
        </Link>
      </li>
      <li>
        <Link
          className={blue ? "neonblue" : "neon"}
          to="skills"
          onClick={() => select()}
        >
          {french ? "COMPETENCES" : "SKILLS"}
        </Link>
      </li>
      <li>
        <Link
          className={blue ? "neonblue" : "neon"}
          to="projects"
          onClick={() => select()}
        >
          {french ? "PROJETS" : "PROJECTS"}
        </Link>
      </li>
      <li>
        <Link
          className={blue ? "flicker2blue" : "flicker2"}
          to="contact"
          onClick={() => select()}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
