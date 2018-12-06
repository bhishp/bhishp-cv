import React from 'react';

import './HeadingIcon.css';
import { HeadingIcon as HeadingIconType } from '../../../types/data';

import yldIcon from './img/yld.jpg';
import trainlineIcon from './img/trainline.png';
import medstarsIcon from './img/medstars.png';
import socIcon from './img/soc.png';
import creditSuisseIcon from './img/credit-suisse.png';

const HeadingIconMap = {
  [HeadingIconType.YLD]: yldIcon,
  [HeadingIconType.TRAINLINE]:  trainlineIcon,
  [HeadingIconType.MEDSTARS]:  medstarsIcon,
  [HeadingIconType.SCHOOL_OF_CODE]:  socIcon,
  [HeadingIconType.CREDIT_SUISSE]:  creditSuisseIcon,
};

export interface HeadingIconProps {
  icon: HeadingIconType;
}

const HeadingIcon: React.FunctionComponent<HeadingIconProps> = ({ icon }) => (
  <img className="HeadingIcon" alt={icon} src={HeadingIconMap[icon]} />
);

export default HeadingIcon;
