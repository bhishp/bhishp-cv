import React from 'react';

import {Section} from '../../types/data';

import './CVSection.css';

import CVArticle from '../CVArticle/CVArticle';
import CVIcon from '../CVIcon/CVIcon';

/**
 * A section that can include multiple articles
 * @param heading
 * @param icon
 * @param articles
 * @param children
 * @param props
 * @constructor
 */
const CVSection: React.FunctionComponent<Section> = ({
  heading,
  icon,
  articles = [],
  children,
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
    {children}
  </section>
);

export default CVSection;
