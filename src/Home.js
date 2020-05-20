import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sup Vic!!!!{' '}
          <span role="img" aria-label="smiling emoji">
            😀
          </span>
        </p>
        <Link to="/contact">
          Say Hi!{' '}
          <span role="img" aria-label="waving emoji">
            👋🏾
          </span>
        </Link>
      </header>
    </div>
  );
}

export default App;
