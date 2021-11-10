import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { IconName } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CVIcon.css';

const prefix = (icon: string) =>
  ['github'].includes(icon) ? 'fab'
    : 'fas'

export interface CVIconProps {
  name: IconName;
  size?: SizeProp;
}

const CVIcon: React.FunctionComponent<CVIconProps> = ({ name, size = 'lg' }) => (
  <FontAwesomeIcon className="CVIcon" icon={{
    prefix: prefix(name),
    iconName: name,
  }}/>
);

export default CVIcon;
