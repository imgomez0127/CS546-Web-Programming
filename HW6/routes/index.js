//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const aboutRoutes = require("./about");
const storyRoutes = require("./story");
const educationRoutes = require("./education");
const constructorMethod = app => {
    app.use("/about", aboutRoutes);
    app.use("/story", storyRoutes);
    app.use("/education", educationRoutes);
    app.use("*", (req,res) =>{
        res.status(404).json({error:"Not found"});
    });
};

module.exports = constructorMethod;
