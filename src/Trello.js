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
          //sort by due date
          var due_cards = [];
          for (var i = 0; i < cards.length; i++) {
            if (cards[i].due!=null) {
              due_cards.push(cards[i]);
            }
          }
          due_cards.sort(function(a, b) {
            var dateA = new Date(a.due), dateB = new Date(b.due)
            return dateA-dateB //sort by date ascending
          });
          console.log(due_cards);
          alert(due_cards[0].due);
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
