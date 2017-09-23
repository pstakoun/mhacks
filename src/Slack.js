/*eslint-env jquery*/
import React, { Component } from 'react';
class Slack extends Component {
  render(){
    //choose user&generate keys
    //take most recent message
    //check if message has "to" in it
    //if it doesn't, return the message
    //otherwise, it's not an imperative and therefore not a command
    $.get(
        "https://slack.com/api/conversations.history?token=xoxp-68763704759-68880662663-245174514321-6efaaa3af7ad72ce65d57517cc91ab48&channel=C20NJ65Q9&pretty=1",
        function(data) {
          alert("It worked");
        }
      );
    return(
      <div>todo</div>
    );
  }
}

export default Slack;
