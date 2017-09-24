/*global gapi*/
import React, { Component } from 'react';
import './App.css';
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
      cards.push(<Card title={card.id} subtitle={null} desc={null} />);
    }

    for (i = 0; i < this.state.trelloCards.length; i++) {
      card = this.state.trelloCards[i];
      cards.push(<Card title={card.id} subtitle={null} desc={null} />);
    }

    /*for (card in this.state.slackCards) {
      cards.push(<Card title={null} subtitle={null} desc={null} />);
    }*/

    console.log(this.state);
    return cards;
  }

  render() {
    return (
<div id="text-carousel" class="carousel slide" data-ride="carousel">
<div className="App-header">
  <h1>MHacks</h1>
</div>
    <div class="row">
        <div class="col-xs-offset-3 col-xs-6">
            <div class="carousel-inner">
                <div class="item active">
                    <div class="carousel-content">
                        <div>
                            <p>Sapiente, ducimus, voluptas, mollitia voluptatibus nemo explicabo sit blanditiis laborum dolore illum fuga veniam quae expedita libero accusamus quas harum ex numquam necessitatibus provident deleniti tenetur iusto officiis recusandae corporis culpa quaerat?</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="carousel-content">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sint fuga temporibus nam saepe delectus expedita vitae magnam necessitatibus dolores tempore consequatur dicta cumque repellendus eligendi ducimus placeat! </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="carousel-content">
                        <div>
                            <p>Sapiente, ducimus, voluptas, mollitia voluptatibus nemo explicabo sit blanditiis laborum dolore illum fuga veniam quae expedita libero accusamus quas harum ex numquam necessitatibus provident deleniti tenetur iusto officiis recusandae corporis culpa quaerat?</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <a class="left carousel-control" href="#text-carousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
 <a class="right carousel-control" href="#text-carousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
  <div className="App">
    <ul className="cards">
      {this.renderCards()}
    </ul>
    <br></br>
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
</div>

    );
  }
}

export default App;
