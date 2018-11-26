import React  from 'react';
import { Data } from './types/data';

import './bootstrap-font-awesome';

import './App.css';
import CVHeader from './components/CVHeader/CVHeader';
import CVSection from './components/CVSection/CVSection';
import headshot from './img/bhish-superman.png';

import data from './data.json';
const typedData = data as Data;

const {
  forename, surname, profession, number, email,
  sections: { experience, education, aboutMe }
} = typedData;

const headerProps = { forename, surname, profession, number, email, headshot };

const App: React.FunctionComponent = () => (
  <div className="CV">
    <div className="CVWrapper">
      <CVHeader {...headerProps} />
      <div className="CVContent">
        <CVSection {...experience} />
        <CVSection {...education} />
        <CVSection {...aboutMe} />
      </div>
      <footer className="CVFooter">
        <span>Bebas font courtesy of: <a href="http://bebasfont.com/">http://bebasfont.com/</a></span>
      </footer>
    </div>
  </div>
);

export default App;
