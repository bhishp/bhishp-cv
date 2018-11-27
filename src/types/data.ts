import { IconName as FAIconName } from '@fortawesome/free-solid-svg-icons';

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
  icon: Icon;
  articles: Article[];
}

export interface Article {
  heading: string;
  info: string;
  footnotes?: string;
  techIcons?: TechIcon[];
  aside: Aside;
}

export interface Aside {
  title?: string;
  period?: string;
  icon?: Icon;
}

export type Icon = {
  name: FAIconName;
  small?: boolean;
}
