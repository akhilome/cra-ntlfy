import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sup Vic!!!! <span role="img" aria-label="smiling emoji">😀</span>
        </p>
        <a
          className="App-link"
          href="https://twitter.com/kizitoakhilome"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hi! <span role="img" aria-label="waving emoji">👋🏾</span>
        </a>
      </header>
    </div>
  );
}

export default App;
