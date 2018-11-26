import React from 'react';

import './TechIcon.css';
import { TechIcon as TechIconType } from '../../types/data';

import reactIcon from './img/react-icon.png';
import meteorIcon from './img/meteor-icon.png';
import nodeIcon from './img/node-icon.png';
import reduxIcon from './img/redux-icon.png';
import dockerIcon from './img/64px-docker.png';
import awsIcon from './img/64px-aws.png';
import csharpIcon from './img/csharp-icon.png';
import springIcon from './img/spring.png';
import sqlIcon from './img/sql-icon.png';
import javaIcon from './img/java-logo.png';
import haskellIcon from './img/haskell.png';

const TechIconMap = {
  [TechIconType.REACT]: reactIcon,
  [TechIconType.METEOR]:  meteorIcon,
  [TechIconType.NODE]:  nodeIcon,
  [TechIconType.REDUX]:  reduxIcon,
  [TechIconType.DOCKER]:  dockerIcon,
  [TechIconType.AWS]:  awsIcon,
  [TechIconType.CSHARP]:  csharpIcon,
  [TechIconType.JAVA]:  javaIcon,
  [TechIconType.SPRING]:  springIcon,
  [TechIconType.SQL]:  sqlIcon,
  [TechIconType.HASKELL]:  haskellIcon
};

export interface TechIconProps {
  icon: TechIconType;
}

const TechIcon: React.FunctionComponent<TechIconProps> = ({ icon }) => (
  <img className="TechIcon" alt={icon} src={TechIconMap[icon]} />
);

export default TechIcon;
