import React, { Component } from 'react';

class Trello extends Component {
  auth() {
    //TODO Authenticate via ajax()
    const opts = {
      name: "MHacks",
      success: function() {
        // fetch board and get ID
        var data = JSON.stringify(false);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            console.log(this.responseText);
          }
        });
        xhr.open("GET", "https://api.trello.com/1/members/id/boards");
        xhr.send(data);
        console.log(data);
        var b = prompt("What board");
        //filter out completed tasks
        window.Trello.get("boards/"+b+"/cards/open", function(cards) {
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
