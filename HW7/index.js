//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
    console.log("Server being hosted on localhost:3000");
});

