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
    return (
        <div>
        <h2>Slack</h2>
        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=68763704759.245695352610"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
      </div>
      app.get('/auth/redirect', (req, res) =>{
    var options = {
        uri: 'https://slack.com/api/oauth.access?code='
            +req.query.code+
            '&client_id='+process.env.CLIENT_ID+
            '&client_secret='+process.env.CLIENT_SECRET+
            '&redirect_uri='+process.env.REDIRECT_URI,
        method: 'GET'
    }
    request(options, (error, response, body) => {
        var JSONresponse = JSON.parse(body)
        if (!JSONresponse.ok){
            console.log(JSONresponse)
            res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
        }else{
            console.log(JSONresponse)
            res.send("Success!")
        }
    })
})
    );
  }
}

export default Slack;
