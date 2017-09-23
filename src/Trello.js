import React, { Component } from 'react';

class Trello extends Component {
  render() {
    //TODO Authenticate via ajax()
    const opts = {
      name: "MHacks",
      success: function() {
        // fetch
        window.Trello.get("boards/0OsfbJ6A/cards", function(cards) {
          alert("aljflksjbghogbhsg");
        });
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
