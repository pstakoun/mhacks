import React, { Component } from 'react';
import './App.css';
import Next from './Next';
import Calendar from './Calendar';
import Gmail from './Gmail';
import Trello from './Trello';
import Slack from './Slack';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MHacks</h1>
        </div>
        <div className="card card-wide">
          <Next />
        </div>
        <div className="card">
          <Calendar />
        </div>
        <div className="card">
          <Gmail />
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
