//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 10428821 Ian Gomez
const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes");

app.use("/public", static);


configRoutes(app);

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
