import React, { Component } from 'react';
//component refers to 1 file
import logo from './logo.svg'; //logo is the image imported
import './App.css';
import Welcome from './Welcome'; 
import game from './index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Welcome/>
          
        
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {Welcome}
        </p>

      </div>
    );
  }
}

export default App;
