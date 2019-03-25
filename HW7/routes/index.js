//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const animalRoutes = require("./animals");
const postsRoutes = require("./posts");
const likeRoutes = require("./likes");
const constructorMethod = app => {
    app.use("/animals",animalRoutes);
    app.use("/posts", postsRoutes);
    app.use("/likes", likeRoutes);
    app.use("*", (req,res) =>{
        res.status(404).json({error:"Not found"});
    });
};

module.exports = constructorMethod;
