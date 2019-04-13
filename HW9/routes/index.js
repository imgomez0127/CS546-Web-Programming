//"I pledge my honor that I have abided by the Stevens honor system"-igomez1 10428821 Ian Gomez
const express = require("express");
const router = express.Router();
router.get("/", (req,res) => {
    try{
        res.render("templates/index",{title: "Prime Number Checker"});
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
