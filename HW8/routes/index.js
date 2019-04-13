//"I pledge my honor that I have abided by the Stevens honor system"-igomez1 10428821 Ian Gomez
const express = require("express");
const router = express.Router();
const peopleMod = require("../data/people");
router.get("/", (req,res) => {
    try{
        res.render("templates/People_Finder",{title: "People Finder"});
    }
    catch(e){
        res.sendStatus(500);
    }
});
router.post("/search", async (req,res) => {
    if(!req.body.personName){
        res.status(400).render("templates/Error", {title:"People Found"});
        return;
    }
    try{
        let peopleArr = await peopleMod.getPeople();
        let inputtedName = req.body.personName.toLowerCase();
        let matchedPeople = peopleArr.filter((person) => {
            let personsName = peopleMod.personToName(person).toLowerCase()  
            if(personsName.includes(inputtedName)){
                return person;
            } 
        });
        matchedPeople.splice(20);
        res.render("templates/People_Found",{person : matchedPeople.map((person) => {
            return {name : peopleMod.personToName(person), id:person.id};
        }),
        title: "People Found",
        personName:inputtedName,hasPeople:(matchedPeople.length !== 0)});
    }
    catch(e){
        res.sendStatus(500);
    }
}); 
router.get("/details/:id",async (req,res) => {
    try{
        let data = await peopleMod.getPersonById(parseInt(req.params.id));
        data["name"] = peopleMod.personToName(data);
        data["title"] = "Person Found";
        res.render("templates/Person_Found",data);
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
