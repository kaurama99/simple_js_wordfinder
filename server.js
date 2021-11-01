var express = require("express"),
  app = express(),
  port = process.env.PORT || 8081;

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

var routes = require("./routes/routes");

app.use("/", routes);

app.listen(port);
console.log("WordFinder running on port: " + port);
