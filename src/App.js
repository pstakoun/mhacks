/*global gapi*/
import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';
import Card from './Card';
import Google from './Google';
import Trello from './Trello';
import Slack from './Slack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarCards: [],
      gmailCards: [],
      trelloCards: [],
      slackCards: []
    };
  }

  setCalendarCards(cards) {
    this.setState({ calendarCards: cards });
  }

  setGmailCards(cards) {
    this.setState({ gmailCards: cards });
  }

  addGmailCard(card) {
    this.setState({ gmailCards: this.state.gmailCards.concat([card]) });
  }

  setTrelloCards(cards) {
    this.setState({ trelloCards: cards });
  }

  setSlackCards(cards) {
    this.setState({ slackCards: cards });
  }

  renderCards() {
    var cards = [];
    var i;
    var card;

    for (i = 0; i < this.state.calendarCards.length; i++) {
      card = this.state.calendarCards[i];
      cards.push(<Card title={card.summary} subtitle={null} desc={null} />);
    }

    for (i = 0; i < this.state.gmailCards.length; i++) {
      card = this.state.gmailCards[i];
      var subject = '';
      for (var j = 0; j < card.payload.headers.length; j++) {
        if (card.payload.headers[j].name == 'Subject') {
          subject = card.payload.headers[j].value;
          break;
        }
      }
      cards.push(<Card title={subject} subtitle={null} desc={card.payload.snippet} />);
    }

    for (i = 0; i < this.state.trelloCards.length; i++) {
      card = this.state.trelloCards[i];
      cards.push(<Card title={card.name} subtitle={card.due} desc={card.desc} />);
    }

    /*for (card in this.state.slackCards) {
      cards.push(<Card title={null} subtitle={null} desc={null} />);
    }*/

    return cards;
  }

  render() {
		var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true
    };
    return (
      <div className="App">
        <div className="App-header">
          <h1>ushur</h1>
        </div>
        <Slider {...settings}>
          {this.renderCards()}
        </Slider>
        <ul className="integrations">
          <li>
            <Google setCalendarCards={this.setCalendarCards.bind(this)} setGmailCards={this.setGmailCards.bind(this)} addGmailCard={this.addGmailCard.bind(this)} />
          </li>
          <li>
            <Trello setTrelloCards={this.setTrelloCards.bind(this)} />
          </li>
          <li>
            <Slack setSlackCards={this.setSlackCards.bind(this)} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
