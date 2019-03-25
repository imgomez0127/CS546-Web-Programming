//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const mongoCollections = require("../data/mongoCollections");
const router = express.Router();
const animalOperations = require("../data/animals");
const postOperations = require("../data/posts");
router.post("/:animalId", async(req,res)=>{
    try{
        let animal =  animalOperations.get(req.params.animalId);
        if(animal.empty){
            throw "animal does not exist";
        }
        let post = animalOperations.get(req.query.postId);
        if(post.empty){
            throw "post does not exist";
        }
        let updatedAnimal = await animalOperations.addLike(req.params.animalId,req.query.postId);
        if(updatedAnimal.notUpdated){
            res.sendStatus(500);
            console.log("YEET");
            return;
        }
        res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.delete("/:animalId", async(req,res)=>{
    try{
        let animal =  animalOperations.get(req.params.animalId);
        if(animal.empty){
            throw "animal does not exist";
        }
        let post = animalOperations.get(req.query.postId);
        if(post.empty){
            throw "post does not exist";
        }
        let updatedAnimal = await animalOperations.removeLike(req.params.animalId,req.query.postId);
        if(updatedAnimal.notUpdated){
            console.log("YEET");
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
