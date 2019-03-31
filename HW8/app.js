//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 10428821 Ian Gomez
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");

const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({defaultLayout : "base"}));
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
