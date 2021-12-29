import "./contact.css";
import useSound from "use-sound";
import jacklaugh from "../mp3/jacklaugh.wav";
import { useState } from "react";
import sonic from "../assets/sonic.gif";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cv from "../docs/Valentin_lagues.pdf";
import jack from "../assets/jackSOR.gif";

const Contact = ({ french, select, blue }) => {
  const [laugh] = useSound(jacklaugh);
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div id="contact">
      <div>
        <p className={blue ? "contact-title-blue" : "contact-title"}>CONTACT</p>
        <div className="contact-container">
          <img className="contact-img-sonic" src={sonic} alt="sonic" />
          <p className="contact-contract">
            {french
              ? "JE SUIS ACTUELLEMENT A LA RECHERCHE D'UNE ENTREPRISE SUSCEPTIBLE DE M'ACCUEILLIR POUR UNE ALTERNANCE D'UN AN EN FORMATION DE DEVELOPPEUR WEB AVANCE (REACT, REACT NATIVE) A PARTIR DU MOIS DE MARS 2022"
              : "I AM CURRENTLY LOOKING FOR A WEB DEVELOPER WORK-STUDY CONTRACT (REACT, REACT NATIVE) FROM MARCH 2022 AND FOR A PERIOD OF ONE YEAR."}
          </p>
          <p className="contact-paragraph">
            {french
              ? "MON PROFIL VOUS INTERESSE ? N'HESITEZ PAS A ME CONTACTER, JE VOUS ATTENDS AVEC IMPATIENCE !"
              : "INTERESTED IN MY PROFILE ? DON'T HESITATE TO CONTACT ME, I AM WAITING FOR YOU !"}
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
                  onClick={() => select()}
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
                  onClick={() => select()}
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
                  onClick={() => select()}
                />
              </a>
            </li>
          </ul>
          {!downloaded && (
            <a href={cv} download="cv_valentin_lagues.pdf">
              <p
                className="contact-download"
                onClick={() => {
                  setDownloaded(!downloaded);
                  laugh();
                }}
              >
                {french
                  ? "CLIQUEZ ICI POUR TELECHARGER MON CV"
                  : "CLICK HERE TO DOWNLOAD MY RESUME"}
              </p>
            </a>
          )}
          {downloaded && (
            <div>
              <p className="contact-thankyou">
                {french ? "MERCI !" : "THANK YOU !"}
              </p>
              <img className="contact-img-jack" src={jack} alt="jack" />
            </div>
          )}
        </div>
        <div>
          {french ? (
            <p className="contact-hypercan">
              J'AIMERAIS REMERCIER LE GROUPE HYPERCAN DE M'AVOIR DONNE
              L'AUTORISATION
              <br /> D'UTILISER LA MUSIQUE DE LEUR ALBUM 'STELLAR ECHOES'.
              <br />
              DECOUVREZ-LES SUR{" "}
              <a
                href="https://hypercan.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                BANDCAMP
              </a>{" "}
              ET{" "}
              <a
                href="https://www.youtube.com/channel/UCZ-V2xGSCYDZfN_dBg89czQ"
                target="_blank"
                rel="noreferrer"
              >
                YOUTUBE
              </a>
              .
            </p>
          ) : (
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
          )}
        </div>
        <p className="contact-copyright">COPYRIGHT. VALENTIN LAGUES. 2021</p>
      </div>
    </div>
  );
};

export default Contact;
