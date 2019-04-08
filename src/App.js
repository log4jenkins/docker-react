import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             The app.js file is volume mounted to the docker continer
            Docker run -p 3000:3000 -v /app/node_module -v$(pwd):/app reactapp
          </a>
        </header>
      </div>
    );
  }
}

export default App;
