const express = require("express");
const router = express.Router();
const peopleMod = require("../data/people");
router.get("/", (req,res) => {
    res.render("templates/People_Finder",{title: "People Finder"});
});
router.post("/search", async (req,res) => {
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
    })
    , title: "People Found",personName:inputtedName,hasPeople:(matchedPeople.length !== 0)});
}); 
router.get("/details/:id",async (req,res) => {
    let data = await peopleMod.getPersonById(parseInt(req.params.id));
    data["name"] = peopleMod.personToName(data);
    data["title"] = "Person Found";
    res.render("templates/Person_Found",data);
});


const constructorMethod = app => {
    app.use("/", router);
    app.use("*", (req,res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;
