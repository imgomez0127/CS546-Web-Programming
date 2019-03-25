//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const mongoCollections = require("../data/mongoCollections");
const router = express.Router();
const animalOperations = require("../data/animals");
const postOperations = require("../data/posts");
router.get("/",async (req,res) => {
    try{
        let animalLst = await animalOperations.getAll();
        for(let i = 0; i < animalLst.length; ++i){
            let e = animalLst[i];
            let postArr = await postOperations.getPostsByAuthor(e["_id"]);
            let postObjArr = [];
            let likedPostObjArr = [];
            postArr.forEach((post) =>{
                postObjArr.push({"_id":post["_id"],"title":post["title"]});
            });
            for(let j = 0; j < e["likes"].length; ++j){
                let likedPost = e["likes"][j];
                let post = await postOperations.get(likedPost); 
                likedPostObjArr.push({"_id":post["_id"],"title":post["title"]});
            }
            e["posts"] = postObjArr;
            e["likes"] = likedPostObjArr;
        }
        res.json(animalLst);
    }catch(e){
        res.sendStatus(500);
    }
});
router.post("/",async (req,res) =>{
    const animalInfo = req.body;
    if(!animalInfo){
        res.sendStatus(400);
        return;
    }
    if(!animalInfo.name && !animalInfo.animalType){
        res.sendStatus(400);
        return;
    }
    if(!animalInfo.name){
        res.sendStatus(400);
        return;
    }
    if(!animalInfo.animalType){
        res.sendStatus(400);
        return;
    }
    try{
        const newAnimal = await animalOperations.create(animalInfo.name,animalInfo.animalType);
        res.json(newAnimal);
    }
    catch(e){
        res.sendStatus(500);
    }
});
router.get("/:id",async (req,res) =>{
    try{
        let animal = await animalOperations.get(req.params.id);
        if(animal.empty){
            res.sendStatus(404);
            return;
        }
        let postObjArr = [];
        let likedPostObjArr = [];
        let postArr = await postOperations.getPostsByAuthor(animal["_id"]);
        postArr.forEach((post)=>{
            postObjArr.push({"id":post["_id"],"title":post["title"]});
        });
        for(let j = 0; j < animal["likes"].length; ++j){
            let likedPost = animal["likes"][j];
            let post = await postOperations.get(likedPost); 
            likedPostObjArr.push({"_id":post["_id"],"title":post["title"]});
        }
        animal["posts"] = postObjArr;
        animal["likes"] = likedPostObjArr;
        res.json(animal);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.put("/:id", async(req,res)=>{
    const animalInfo = req.body;
    if(!animalInfo){
        res.sendStatus(400);
        return;
    }
    if(!animalInfo.newName && !animalInfo.newType){
        res.sendStatus(400);
        return;
    }
    try{
        let animal = await animalOperations.get(req.params.id);
        if(animal.empty){
            res.sendStatus(404);
            return
        }
        if(animalInfo.newName && animalInfo.newName !== animal.name){
            animal = await animalOperations.rename(req.params.id,animalInfo.newName);
        }
        if(animalInfo.newType && animalInfo.newType !== animal.animalType){
            animal = await animalOperations.changeType(req.params.id,animalInfo.newType);
        }
        let postObjArr = [];
        let postArr = await postOperations.getPostsByAuthor(animal["_id"]);
        let likedPostObjArr = [];
        for(let i = 0; i < postArr.length; ++i){
            post = postArr[i];
            postObjArr.push({"id":post["_id"],"title":post["title"]});
        }
        for(let j = 0; j < animal["likes"].length; ++j){
            let likedPost = animal["likes"][j];
            let post = await postOperations.get(likedPost); 
            likedPostObjArr.push({"_id":post["_id"],"title":post["title"]});
        }
        animal["posts"] = postArr;
        animal["likes"] = likedPostObjArr;
        res.json(animal);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500); 
    }
});
router.delete("/:id", async (req,res) =>{
    try{
        let animal = await animalOperations.get(req.params.id);
        if(animal.empty){
            res.sendStatus(404);
            return
        }
        let postObjArr = [];
        let postArr = await postOperations.getPostsByAuthor(animal["_id"]);
        let likedPostObjArr = [];
        for(let i = 0; i < postArr.length; ++i){
            post = postArr[i];
            postObjArr.push({"id":post["_id"],"title":post["title"]});
            await postOperations.remove(post["_id"]);
        }
        for(let j = 0; j < animal["likes"].length; ++j){
            let likedPost = animal["likes"][j];
            let post = await postOperations.get(likedPost); 
            likedPostObjArr.push(post);
        }
        animal["posts"] = postArr;
        animal["likes"] = likedPostObjArr;
        let deletedItem = {"deleted":true,"data":animal};
        await animalOperations.remove(req.params.id);
        res.json(deletedItem);
    } 
    catch(e){
        res.sendStatus(500);
    }
});
module.exports = router;
