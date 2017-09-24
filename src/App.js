import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Google from './Google';
import Trello from './Trello';
import Slack from './Slack';

class App extends Component {
  renderCards() {
    var cards = [];
    var cards_mail = [];
    for (var card in cards_mail) {
      cards.push(<Card title="" subtitle="" desc="" />);
    }
    var cards_trello = [];
    for (var card in cards_trello) {
      cards.push(<Card title="" subtitle="" desc="" />);
    }
    var cards_calendar = [];
    for (var card in cards_calendar) {
      cards.push(<Card title="" subtitle="" desc="" />);
    }
    var cards_slack = [];
    for (var card in cards_slack) {
      cards.push(<Card title="" subtitle="" desc="" />);
    }
    return cards;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MHacks</h1>
        </div>
        <ul className="cards">
          {this.renderCards()}
        </ul>
        <ul className="integrations">
          <li>
            <Google />
          </li>
          <li>
            <Trello />
          </li>
          <li>
            <Slack />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
