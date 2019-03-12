//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const app = express();
    const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
    console.log("Server being hosted on localhost:3000");
});

