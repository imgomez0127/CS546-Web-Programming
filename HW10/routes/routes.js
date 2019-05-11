//"I pledge my honor that I have abided by the Stevens honor system"-igomez1 10428821 Ian Gomez
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const path = require("path");
const saltRounds = 16;
const users = require("../data/users")
let findUserBySession = function(sessionID){
    let output = {};
    for(let user in users){
        users[user]["validSessionAccessors"].forEach(function(validID){
            if(validID == sessionID){ 
                output = users[user];
                output["username"] = user;
            }
        });
    }
    return output; 
}

router.get("/", (req,res) => {
    try{
        if(req.session.loginStatus){
            res.redirect("/private");
        }
        else{
            res.render("templates/Login_Page",{title:"Login"});
        }
    }
    catch(e){
        res.sendStatus(500);
    }
});
router.post("/login", async (req,res) => {
    if(!req.body.username || !req.body.password){
        res.status(401).render("templates/Login_Page",{title:"Login",error:true});
        return;
    }    
    try{
        if(!users[req.body.username]){
            res.status(401).render("templates/Login_Page",{title:"Login",error:true});
            return;
        }
        inputUser = users[req.body.username];
        let samePassword = await bcrypt.compare(req.body.password,inputUser["password"]);
        if(samePassword){
                req.session.loginStatus = true; 
                inputUser["validSessionAccessors"].push(req.session.id);
                res.redirect("/private");
        }
        else{
            res.status(401).render("templates/Login_Page",{title:"Login",error:true});
            return;
        }
    }
    catch(e){
        res.sendStatus(500);
    }
});
router.get("/private",(req,res) => {
    try{
        let user = findUserBySession(req.session.id);
        let {_id,firstName,lastName,profession,bio,...rest} = user;
        res.render("templates/Private_Page",{"firstName":firstName,"lastName":lastName,"profession":profession,"bio":bio,username:user["username"]});
    }catch(e){
        res.sendStatus(500);
    }
});

router.get("/logout", (req,res) => {
    try{
        req.session.destroy();    
        res.render("templates/Logout");
    }catch(e){
        res.sendStatus(500);
    }
});
       
module.exports = router
