import React, { Component } from 'react';

class Trello extends Component {
  auth() {
    //TODO Authenticate via ajax()
    const opts = {
      name: "MHacks",
      success: function() {
        // Get member info
        window.Trello.get("members/me/boards", function(boards) {
          console.log(boards);
          // Get boards 
          var due_cards = [];
          for (var i = 0; i < boards.length; i++) {
            // Filter out completed tasks
            window.Trello.get("boards/"+boards[i]+"/cards/open", function(cards) {
              // Sort by due date
              for (var i = 0; i < cards.length; i++) {
                if (cards[i].due != null) {
                  due_cards.push(cards[i]);
                }
              }
            });
          }
          due_cards.sort(function(a, b) {
            // Sort by date ascending
            var dateA = new Date(a.due), dateB = new Date(b.due);
            return dateA-dateB;
          });
          console.log(due_cards);
          alert(due_cards[0].due);
        });
      },
      error: function() {
        // Alert user
      }
    };
    window.Trello.authorize(opts);
  }
  render() {
    //TODO Fetch data from Trello API
    return (
      <div>
        <h2>Trello</h2>
        <button onClick={this.auth.bind(this)}>Click me</button>
      </div>
    );
  }
}

export default Trello;
