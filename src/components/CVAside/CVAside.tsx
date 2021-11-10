import React from 'react';

import { Aside } from '../../types/data';

import CVIcon from '../CVIcon/CVIcon';

/**
 * Left aside for detailing a title with accompanying period
 * Otherwise just an icon
 * @param title
 * @param period
 * @param icon
 * @constructor
 */
const CVAside: React.FunctionComponent<Aside> = ({
  title, period, icon
}) => (
  <aside className="Article-aside">
    {(title && period && (
      <>
        <span className="Article-aside-title">{title}</span>
        <br />
        <span className="Article-aside-period">{period}</span>
      </>
    )) || (
      icon && (
        <CVIcon {...icon} />
      )
    ) }
  </aside>
);

export default CVAside;
