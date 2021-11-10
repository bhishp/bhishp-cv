import React from 'react';

import {Section} from '../../types/data';

import './CVSection.css';

import CVArticle from '../CVArticle/CVArticle';
import CVIcon from '../CVIcon/CVIcon';


const CVSection: React.FunctionComponent<Section> = ({
  heading,
  icon,
  articles = [],
  ...props
}) => (
  <section className="Section" {...props}>
    <header className="Section-header">
      <div className="Section-heading">
        <CVIcon {...icon} />
        <h2>{heading}</h2>
      </div>
      <span className="Section-divider" />
    </header>
    {articles.map(article => <CVArticle key={article.heading} {...article} />)}
  </section>
);

export default CVSection;
