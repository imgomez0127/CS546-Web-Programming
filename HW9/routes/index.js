//"I pledge my honor that I have abided by the Stevens honor system"-igomez1 10428821 Ian Gomez
const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req,res) => {
    try{
        res.sendFile(path.resolve("public/base.html"));
    }
    catch(e){
        res.sendStatus(500);
    }
});


const constructorMethod = app => {
    app.use("/", router);
    app.use("*", (req,res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
