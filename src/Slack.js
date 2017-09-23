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
    //take most recent message in every channel
    //when new message is sent, check underneath
    //check if message has "to" in it
    //if it doesn't, return the message
    //otherwise, it's not an imperative and therefore not a command
    var that = this;
    $.get(
        "https://slack.com/api/conversations.history?token=xoxp-68763704759-68880662663-246878030631-21135532198d76440e87f74d3c098b55&channel=C20NJ65Q9&limit=1&pretty=1",
        function(data) {
          that.setState({ message: data.messages[0].text });
        }
      );
    return (
      <div>
        <h2>Slack</h2>
        <p>{ this.state.message ||
          <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=68763704759.245695352610"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
        }</p>
      </div>
    );
  }
}

export default Slack;