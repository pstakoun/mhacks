const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.post("/gmail", (req, res) => {
    // TODO
});

app.post("/calendar", (req, res) => {
    // TODO
});

app.post("/trello", (req, res) => {
    // TODO
});

app.post("/slack", (req, res) => {
    // TODO
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
