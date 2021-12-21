import "./contact.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import sounds from "../sound";
import sonic from "../assets/sonic.gif";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cv from "../docs/Valentin_lagues.pdf";
import jack from "../assets/jackSOR.gif";

const Contact = () => {
  const [sound, setSound] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div id="contact">
      <div>
        <p className="contact-title">CONTACT</p>
        <div className="contact-container">
          <img className="contact-img-sonic" src={sonic} alt="sonic" />
          <p className="contact-contract">
            I AM CURRENTLY LOOKING FOR A WEB DEVELOPER WORK-STUDY CONTRACT FROM
            MARCH 2022 AND FOR A PERIOD OF ONE YEAR.
          </p>
          <p className="contact-paragraph">
            INTERESTED IN MY PROFILE?
            <br />
            YOU CAN CONTACT ME CLICKING ON THESE LINKS !<br />I AM WAITING FOR
            YOU !
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
          <ul className="contact-logos-list">
            <li>
              <a
                href="mailto:valentin.lagues@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="contact-logos"
                  src={mail}
                  alt="mail"
                  onClick={() => setSound(!sound)}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/valentin-lagues/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="contact-logos"
                  src={linkedin}
                  alt="linkedin"
                  onClick={() => setSound(!sound)}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ValentinLagues"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="contact-logos"
                  src={github}
                  alt="github"
                  onClick={() => setSound(!sound)}
                />
              </a>
            </li>
          </ul>
          {!downloaded && (
            <a href={cv} download="cv_valentin_lagues.pdf">
              <p
                className="contact-download"
                onClick={() => setDownloaded(!downloaded)}
              >
                CLICK HERE TO DOWNLOAD MY RESUME
              </p>
            </a>
          )}
          {downloaded && (
            <div>
              <p className="contact-thankyou">THANK YOU !</p>
              <img className="contact-img-jack" src={jack} alt="jack" />
              <ReactPlayer
                url={sounds[1].src}
                controls
                width="0"
                height="0"
                playing={true}
                volume={1}
              />
            </div>
          )}
        </div>
        <div>
          <p className="contact-hypercan">
            I WOULD LIKE TO THANK HYPERCAN WHO GAVE ME THE AUTHORIZATION
            <br /> OF USING THE MUSIC FROM THEIR ALBUM 'STELLAR ECHOES'.
            <br />
            GO DISCOVER THEM ON{" "}
            <a
              href="https://hypercan.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              BANDCAMP
            </a>{" "}
            AND{" "}
            <a
              href="https://www.youtube.com/channel/UCZ-V2xGSCYDZfN_dBg89czQ"
              target="_blank"
              rel="noreferrer"
            >
              YOUTUBE
            </a>
            .
          </p>
        </div>
        <p className="contact-copyright">COPYRIGHT. VALENTIN LAGUES. 2021</p>
      </div>
    </div>
  );
};

export default Contact;
