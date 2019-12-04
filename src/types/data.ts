import { IconName as FAIconName } from '@fortawesome/free-solid-svg-icons';

export enum HeadingIcon {
  SHELL = 'shell',
  SAILMETRIX = 'sailmetrix',
  YLD = 'yld',
  TRAINLINE = 'trainline',
  MEDSTARS = 'medstars',
  SCHOOL_OF_CODE = 'soc',
  CREDIT_SUISSE = 'credit-suisse',
}

export enum TechIcon {
  REACT = 'react',
  METEOR = 'meteor',
  NODE = 'node',
  REDUX = 'redux',
  DOCKER = 'docker',
  AWS = 'aws',
  CSHARP = 'csharp',
  JAVA = 'java',
  SPRING = 'spring',
  SQL = 'sql',
  HASKELL = 'haskell',
  REDUX_OBSERVABLES = 'redux-observables',
  SWAGGER = 'swagger',
  AWS_LAMBDA = 'aws-lambda',
  WEBPACK = 'webpack',
  FIREBASE = 'firebase',
  FORMIK = 'formik',
  PWA = 'pwa',
  REDUX_SAGA = 'redux-saga',
  TYPESCRIPT = 'typescript',
  JEST = 'jest',
  CIRCLE_CI = 'circle-ci',
}

export interface Data {
  forename: string;
  surname: string;
  profession: string;
  number: string;
  email: string;
  sections: {
    experience: Section;
    education: Section;
    aboutMe: Section;
  };
}

export interface Section {
  heading: string;
  icon: FAIcon;
  articles: Article[];
}

export interface Article {
  heading: string;
  headingIcons?: HeadingIcon[];
  info: string;
  footnotes?: string;
  techIcons?: TechIcon[];
  aside: Aside;
}

export interface Aside {
  title?: string;
  period?: string;
  icon?: FAIcon;
}

export type FAIcon = {
  name: FAIconName;
  small?: boolean;
}
