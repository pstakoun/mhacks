import React, { Component } from 'react';
import './App.css';
import Trello from './Trello';
import Slack from './Slack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MHacks</h1>
        </div>
        <div className="card">
          <Trello />
        </div>
        <div className="card">
          <Slack />
        </div>
      </div>
    );
  }
}

export default App;
