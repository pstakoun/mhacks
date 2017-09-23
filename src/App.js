/*global gapi*/
import React, { Component } from 'react';
import './App.css';
import Next from './Next';
import Calendar from './Calendar';
import Gmail from './Gmail';
import Trello from './Trello';
import Slack from './Slack';

class App extends Component {
	componentDidMount() {
		// Client ID and API key from the Developer Console
		var CLIENT_ID = '88507036182-9le6272pnktncthu409bji7pk68a13q1.apps.googleusercontent.com';

		// Array of API discovery doc URLs for APIs used by the quickstart
		var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest", "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

		// Authorization scopes required by the API; multiple scopes can be
		// included, separated by spaces.
		var SCOPES = "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/gmail.readonly";

		var authorizeButton = document.getElementById('authorize-button');
		var signoutButton = document.getElementById('signout-button');

		/**
		 *  On load, called to load the auth2 library and API client library.
		 */
		gapi.load('client:auth2', initClient);

		/**
		 *  Initializes the API client library and sets up sign-in state
		 *  listeners.
		 */
		function initClient() {
			gapi.client.init({
				discoveryDocs: DISCOVERY_DOCS,
				clientId: CLIENT_ID,
				scope: SCOPES
			}).then(function () {
				// Listen for sign-in state changes.
				gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

				// Handle the initial sign-in state.
				updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
				authorizeButton.onclick = handleAuthClick;
				signoutButton.onclick = handleSignoutClick;
			});
		}

		/**
		 *  Called when the signed in status changes, to update the UI
		 *  appropriately. After a sign-in, the API is called.
		 */
		function updateSigninStatus(isSignedIn) {
			if (isSignedIn) {
				authorizeButton.style.display = 'none';
				signoutButton.style.display = 'block';
				listUpcomingEvents();
        listLabels();
			} else {
				authorizeButton.style.display = 'block';
				signoutButton.style.display = 'none';
			}
		}

		/**
		 *  Sign in the user upon button click.
		 */
		function handleAuthClick(event) {
			gapi.auth2.getAuthInstance().signIn();
		}

		/**
		 *  Sign out the user upon button click.
		 */
		function handleSignoutClick(event) {
			gapi.auth2.getAuthInstance().signOut();
		}

		/**
		 * Append a pre element to the body containing the given message
		 * as its text node. Used to display the results of the API call.
		 *
		 * @param {string} message Text to be placed in pre element.
		 */
		function appendCalendar(message) {
			var pre = document.getElementById('calendar-content');
			var textContent = document.createTextNode(message + '\n');
			pre.appendChild(textContent);
		}

		/**
		 * Append a pre element to the body containing the given message
		 * as its text node. Used to display the results of the API call.
		 *
		 * @param {string} message Text to be placed in pre element.
		 */
		function appendGmail(message) {
			var pre = document.getElementById('gmail-content');
			var textContent = document.createTextNode(message + '\n');
			pre.appendChild(textContent);
		}

		/**
		 * Print the summary and start datetime/date of the next ten events in
		 * the authorized user's calendar. If no events are found an
		 * appropriate message is printed.
		 */
		function listUpcomingEvents() {
			gapi.client.calendar.events.list({
				'calendarId': 'primary',
				'timeMin': (new Date()).toISOString(),
				'showDeleted': false,
				'singleEvents': true,
				'maxResults': 10,
				'orderBy': 'startTime'
			}).then(function(response) {
				var events = response.result.items;
				appendCalendar('Upcoming events:');

				if (events.length > 0) {
					for (var i = 0; i < events.length; i++) {
						var event = events[i];
						var when = event.start.dateTime;
						if (!when) {
							when = event.start.date;
						}
						appendCalendar(event.summary + ' (' + when + ')')
					}
				} else {
					appendCalendar('No upcoming events found.');
				}
			});
		}

		/**
		 * Print all Labels in the authorized user's inbox. If no labels
		 * are found an appropriate message is printed.
		 */
		function listLabels() {
			gapi.client.gmail.users.labels.list({
				'userId': 'me'
			}).then(function(response) {
				var labels = response.result.labels;
				appendGmail('Labels:');

				if (labels && labels.length > 0) {
					for (var i = 0; i < labels.length; i++) {
						var label = labels[i];
						appendGmail(label.name)
					}
				} else {
					appendGmail('No Labels found.');
				}
			});
		}
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MHacks</h1>
				  <button id="authorize-button" style={{display: `none`}}>Authorize</button>
				  <button id="signout-button" style={{display: `none`}}>Sign Out</button>
        </div>
        <div className="card card-wide">
          <Next />
        </div>
        <div className="card">
          <Calendar />
        </div>
        <div className="card">
          <Gmail />
        </div>
        <div className="card">
          <Trello />
        </div>
        <div className="card">
          <Slack />
        </div>
      </div>
    );
  }
}

export default App;
