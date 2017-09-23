import React, { Component } from 'react';

class Trello extends Component {
  render() {
    //TODO authenticate via Ajax
    const opts = {
      name: "MHacks",
      success: function() {
        // fetch
      },
      error: function() {
        // alert user
      }
    };
    window.Trello.authorize(opts);
    //TODO Fetch data from Trello API
    return (
      <div>
        TODO return Trello data to client
      </div>
    );
  }
}

export default Trello;
