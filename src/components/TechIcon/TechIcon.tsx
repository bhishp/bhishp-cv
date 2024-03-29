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
import reduxObservablesIcon from './img/redux-observables.png';
import swaggerIcon from './img/swagger-logo.png';
import lambdaIcon from './img/aws-lambda.png';
import webpackIcon from './img/webpack.png';
import firebaseIcon from './img/firebase.png';
import formikIcon from './img/formik.png';
import pwaIcon from './img/pwa.png';
import reduxSagaIcon from './img/redux-saga.png';
import typescriptIcon from './img/typescript.png';
import jestIcon from './img/jest.png';
import circleCiIcon from './img/circle-ci.png';
import apolloIcon from './img/apollo.png';
import graphqlIcon from './img/graphql.png';
import cypressIcon from './img/cypress.png';
import chakraIcon from './img/chakra.jpg';
import gqlCodegenIcon from './img/gql-codegen.png';

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
  [TechIconType.HASKELL]:  haskellIcon,
  [TechIconType.REDUX_OBSERVABLES]:  reduxObservablesIcon,
  [TechIconType.SWAGGER]:  swaggerIcon,
  [TechIconType.AWS_LAMBDA]:  lambdaIcon,
  [TechIconType.WEBPACK]:  webpackIcon,
  [TechIconType.FIREBASE]:  firebaseIcon,
  [TechIconType.FORMIK]:  formikIcon,
  [TechIconType.PWA]:  pwaIcon,
  [TechIconType.REDUX_SAGA]:  reduxSagaIcon,
  [TechIconType.TYPESCRIPT]:  typescriptIcon,
  [TechIconType.JEST]:  jestIcon,
  [TechIconType.CIRCLE_CI]:  circleCiIcon,
  [TechIconType.APOLLO]:  apolloIcon,
  [TechIconType.GRAPHQL]:  graphqlIcon,
  [TechIconType.CYPRESS]:  cypressIcon,
  [TechIconType.CHAKRA]:  chakraIcon,
  [TechIconType.GQL_CODEGEN]:  gqlCodegenIcon,
};

export interface TechIconProps {
  icon: TechIconType;
}

const TechIcon: React.FunctionComponent<TechIconProps> = ({ icon }) => (
  <img className="TechIcon" alt={icon} src={TechIconMap[icon]} />
);

export default TechIcon;
