import React, { Component } from 'react';

class Trello extends Component {
  render() {
    //TODO Authenticate via ajax()
    const opts = {
      name: "MHacks",
      success: function() {
        // fetch board
        //filter out completed tasks
        window.Trello.get("boards/0OsfbJ6A/cards/open", function(cards) {
          console.log(cards);
          //sort by due date
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
        <h2>Trello</h2>
      </div>
    );
  }
}

export default Trello;
