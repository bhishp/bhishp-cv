import React from 'react';
import Markdown from 'react-markdown';

import { Article } from '../../types/data';

import './CVArticle.css';
import CVAside from '../CVAside/CVAside';
import TechIcon from '../TechIcon/TechIcon';

const CVArticle: React.FunctionComponent<Article> = ({
  heading, info, footnotes, techIcons, aside
}) => (
  <article className="Article">
    <div className="Article-wrapper">
      <CVAside {...aside} />
      <div className="Article-info">
        <header className="Article-header">
          <h3>{heading}</h3>
        </header>
        <div className="Article-body">
          <div className="Article-copy">
            <Markdown>{info}</Markdown>
            <p className="Article-footnotes">{footnotes}</p>
          </div>
          <ul className="Article-icons">
            {techIcons && techIcons.map(icon => <li key={icon}><TechIcon icon={icon} /></li>)}
          </ul>
        </div>
      </div>
    </div>
  </article>
);

export default CVArticle;
