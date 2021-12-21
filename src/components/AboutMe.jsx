import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import { useState } from "react";
import hacker from "../assets/hacker1.gif";
import "./aboutme.css";
import sounds from "../sound";

const AboutMe = () => {
  const [sound, setSound] = useState(false);
  return (
    <div id="aboutme">
      <div>
        <p className="about-title">ABOUT ME</p>
        <div className="about-container">
          <img className="about-img" src={hacker} alt="hacker" />
          <p className="about-paragraph">
            WELCOME, MY NAME IS VALENTIN, I LIVE IN BAYONNE, FRANCE.
            <br /> I HAVE A PASSION FOR NEW TECHNOLOGIES, GAMING ( AND
            RETROGAMING, OF COURSE, I AM PRETTY SURE YOU HAVE GUESSED IT ) AND
            FOR WHAT IS RELATED TO THE POP CULTURE.
            <br /> I AM CURRENTLY FOLLOWING A FULL STACK WEB DEVELOPER PROGRAM (
            JAVASCRIPT ) AT THE WILD CODE SCHOOL, IN WHICH I HAVE BEEN INVOLVED
            IN DIFFERENT TEAM PROJECTS YOU CAN DISCOVER{" "}
            <Link
              className="about-link"
              to="projects"
              onClick={() => setSound(!sound)}
            >
              HERE
            </Link>
            .
            <br /> I AM MOTIVATED, CURIOUS, AND EASILY INTEGRATE INTO A NEW
            TEAM. READY TO DISCOVER A LOT OF NEW THINGS ABOUT PROGRAMMING, I AM
            OPEN FOR WORK !
            <br /> IF YOU WANT TO LEARN MORE ABOUT ME, DON'T HESITATE TO CONTACT
            ME{" "}
            <Link
              className="about-link"
              to="contact"
              onClick={() => setSound(!sound)}
            >
              HERE
            </Link>
            .
            {sound && (
              <ReactPlayer
                url={sounds[0].src}
                controls
                width="0"
                height="0"
                playing={true}
                volume={1}
              />
            )}
            {!sound && (
              <ReactPlayer
                url={sounds[0].src}
                controls
                width="0"
                height="0"
                playing={true}
                volume={1}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
