/*eslint-env jquery*/
import React, { Component } from 'react';

class Slack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  render() {
    //choose user&generate keys
    //take most recent message
    //check if message has "to" in it
    //if it doesn't, return the message
    //otherwise, it's not an imperative and therefore not a command
    var that = this;
    $.get(
        "https://slack.com/api/conversations.history?token=xoxp-68763704759-68880662663-245706084850-3c78532638a327e0ab5088e75a27d6d8&channel=C20NJ65Q9&limit=1&pretty=1",
        function(data) {
          that.setState({ message: data.messages[0].text });
        }
      );
    return (
      <div>
        <h2>Slack</h2>
        <p>{this.state.message || "Loading..."}</p>
      </div>
    );
  }
}

export default Slack;
