/*eslint-env jquery*/
import React, { Component } from 'react';

class Slack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }
  auth() {
    $.get(
      "https://slack.com/oauth/authorize", [68763704759.245695352610, "channels:history"]
    );
  }
  render() {
    //choose user&generate keys
    //take most recent message in every channel
    //when new message is sent, check underneath
    //check if message has "to" in it
    //if it doesn't, return the message
    //otherwise, it's not an imperative and therefore not a command
    return (
      <div>
        <h2>Slack</h2>
        <button onClick={this.auth.bind(this)}>authorize!</button>
      </div>
    );
  }
}

export default Slack;
