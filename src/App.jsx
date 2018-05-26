import React from 'react';
import './App.css';
import Pineapple from './assets/pineapple.png';

const App = () => (
  <div className="presentation">
    <img src={Pineapple} alt="Pineapple icon" className="pineapple" />
    <h1>React Boilerplate</h1>
    <p>
      Issues:{' '}
      <a href="https://github.com/guidovizoso/react-boilerplate/issues">
        https://github.com/guidovizoso/react-boilerplate/issues
      </a>
    </p>
    <p>
      Guido Vizoso {'<'}
      <a href="https://www.linkedin.com/in/guidovizoso/">
        https://www.linkedin.com/in/guidovizoso/
      </a>
      {'>'}
    </p>
    <div className="credits">
      <p>
        Image: Cocktail by <a href="https://thenounproject.com/olgamur_2015/" rel="noopener noreferrer" target="_blank">Olga</a> from the Noun Project
      </p>
    </div>
  </div>
);

export default App;
