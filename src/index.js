const express = require("express");
const app = express();
const path = require("path");
const request = require("request");

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/auth/slack", (req, res) => {
	var options = {
			uri: 'https://slack.com/api/oauth.access?code='
					+req.query.code+
					'&client_id=68763704759.245695352610'+
					'&client_secret=42202ad1b69296ae37695378e7d7993b'+
					'&redirect_uri=https://mhacksx.herokuapp.com',
			method: 'GET'
	};
	request(options, (error, response, body) => {
			var JSONresponse = JSON.parse(body)
			if (!JSONresponse.ok){
					console.log(JSONresponse)
					res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
			} else {
					console.log(JSONresponse)
					res.send("Success!")
			}
	});
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
