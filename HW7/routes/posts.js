//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const mongoCollections = require("../data/mongoCollections");
const router = express.Router();
const animalOperations = require("../data/animals");
const postOperations = require("../data/posts");
router.get("/",async (req,res) => {
    try{
        let postLst = await postOperations.getAll();
        for(let i = 0; i < postLst.length; ++i){
            let e = postLst[i];
            let author = await animalOperations.get(e["author"]); 
            e["author"] = {"_id":e["author"],"name":author["name"]};
        }
        res.json(postLst);
    }catch(e){
        console.log(e);
        res.status(500).send();
    }
});
router.post("/",async (req,res) =>{
    const postInfo = req.body;
    if(!postInfo){
        res.sendStatus(400);
        return;
    }
    if(!postInfo.title && !postInfo.author && !postInfo.content){
        res.sendStatus(400);
        return;
    }
    if(!postInfo.title){
        res.sendStatus(400);
        return;
    }
    if(!postInfo.author){
        res.sendStatus(400);
        return;
    }
    if(!postInfo.content){
        res.sendStatus(400);
    }
    try{
        let authorObj = await animalOperations.get(postInfo.author);
        if(authorObj.empty){
            res.sendStatus(404);
            return;
        }
        const newPost = await postOperations.create(postInfo.title,postInfo.author,postInfo.content);
        authorObj = await animalOperations.get(postInfo.author);
        newPost["author"] = {_id:authorObj["_id"],name:authorObj["name"]};
        res.json(newPost);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get("/:id",async (req,res) =>{
    try{
        let post = await postOperations.get(req.params.id);
        if(post.empty){
            res.sendStatus(404);
            return;
        }
        let author = await animalOperations.get(post["author"]);
        post["author"] = {"_id":author["_id"],"name":author["name"]};
        res.json(post);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.put("/:id", async(req,res)=>{
    const postInfo = req.body;
    if(!postInfo){
        res.sendStatus(400);
        return;
    }
    if(!postInfo.newTitle && !postInfo.newContent){
        res.sendStatus(400);
        return;
    }
    try{
        let post = await postOperations.get(req.params.id);
        if(post.empty){
            res.sendStatus(404);
            return;
        }
        if(postInfo.newTitle && postInfo.newTitle !== post.title){
            post = await postOperations.changeTitle(req.params.id,postInfo.newTitle);
        }
        if(postInfo.newContent && postInfo.newContent !== post.content){
            post = await postOperations.changeContent(req.params.id,postInfo.newContent);
        }
        let author = await animalOperations.get(post["author"]);
        post["author"] = {"_id":author["_id"],"name":author["name"]};
        res.json(post);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500); 
    }
});
router.delete("/:id", async (req,res) =>{
    try{
        let post = await postOperations.get(req.params.id);
        if(post.empty){
            res.sendStatus(404);
            return
        }
        let author = await animalOperations.get(post["author"]);
        post["author"] = {"_id":author["_id"],"name":author["name"]};
        let deletedItem = {"deleted":true,"data":post};
        let allAnimals = await animalOperations.getAll();
        for(let i = 0; i < allAnimals.length; ++i){
            let curAnimal = allAnimals[i];
            await animalOperations.removeLike(curAnimal["_id"],post["_id"]);
        }
        await postOperations.remove(req.params.id);
        res.json(deletedItem);
    } 
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
