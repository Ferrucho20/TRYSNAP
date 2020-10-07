var express = require("express");

var app = express();

var port = process.env.port || 3000;

var cors = require("cors");

var path = require("path");

app.use(cors());
app.use("/assets", express.static("assets"));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./dist")));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/snap.svg.html"));
});

app.get("/SMichel", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/saintMichel.html"));
});

app.get("/Arrecife", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/arrecife.html"));
});

app.get("/loira", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/loira.html"));
});

app.listen(port, function () {
  console.log("server is running on :" + port);
});
