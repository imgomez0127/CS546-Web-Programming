//"I pledge my honor that I have abided by the Stevens honor system" - igomez1
const express = require("express");
const routes = require("./routes");

const constructorMethod = app => {
    app.use("/", routes);
    app.use("*", (req,res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
