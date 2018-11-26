import React from 'react';

import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import './CVIcon.css';

export interface CVIconProps {
  name: IconName;
  size?: SizeProp;
}

const CVIcon: React.FunctionComponent<CVIconProps> = ({ name, size = 'lg' }) => (
  <FontAwesomeIcon className="CVIcon" icon={name}  />
);

export default CVIcon;
