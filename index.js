const express = require("express");

var app = express();
var port = 8080;

const randomWord = require("./routes/randomWord");

app.get("/", randomWord);

app.listen(port, () => {
  console.log("Server running on :>> ", port);
});
