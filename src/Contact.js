import React from 'react';
import './App.css';
import logo from './logo.svg';

const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact Me{' '}
          <span role="img" aria-label="hug emoji">
            🤗
          </span>
        </p>
        <p>
          Say hello on {' '}
          <a
            className="App-link"
            href="https://twitter.com/kizitoakhilome"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
      </header>
    </div>
  );
};

export default Contact;
