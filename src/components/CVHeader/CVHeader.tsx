import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './CVHeader.css';

export interface CVHeaderProps {
  forename: string;
  surname: string;
  profession: string;
  number: string;
  email: string;
  headshot: string;
}

const Nav = () => (
  <nav className="Nav">
    <ul>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#open-source">Open Source</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#about-me">About Me</a></li>
    </ul>
  </nav>
);

const CVHeader: React.FunctionComponent<CVHeaderProps> = ({
  forename = 'Tyrion',
  surname = 'Lannister',
  profession = 'Diplomat',
  number = '+44-0800-121-212',
  email = 'tyrion@gotworld.com',
  headshot = 'https://placehold.it/600x600'
}) => (
  <header className="CVHeader">
    <div className="CVHeader-container">
      <div className="CVHeader-corner-box"><p>This CV is made in React, view online at: <a href="https://bhishp.github.io/bhishp-cv/">https://bhishp.github.io/bhishp-cv/</a></p></div>
      <div className="CVHeader-headshot-wrapper">
        <img
          className="CVHeader-headshot"
          alt="Candidate headshot"
          src={headshot}
        />
      </div>
      <div className="CVHeader-headings">
        <h1 className="CVHeader-name">
          <span className="CVHeader-forename">{forename}</span>
          <span className="CVHeader-surname">{surname}</span>
        </h1>
        <span className="CVHeader-profession">
          {profession.split(' ').map((word, i) => <span key={`${word}-${i}`}>{word}</span>)}
        </span>
      </div>
      <ul className="CVHeader-personal-information">
        {/*<li><FontAwesomeIcon icon={faPhone} /> {number}</li>*/}
        {/*<li><FontAwesomeIcon icon={faEnvelope} /> {email}</li>*/}
        <li><FontAwesomeIcon icon={faLinkedin} /> <a target="_blank" href="https://linkedin.com/in/bhish/">/in/bhish/</a></li>
        <li><FontAwesomeIcon icon={faGithub} /> <a target="_blank" href="https://github.com/bhishp">bhishp</a></li>
      </ul>
    </div>
    <Nav />
  </header>
);

export default CVHeader;
