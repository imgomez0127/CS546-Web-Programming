const express = require("express");
const router = express.Router();

let data = [{"schoolName":"St. Mary's", "degree":"Pre-School Diploma","favoriteClass":"Music Class", "favoriteMemory":"One memory that I have from this school is when I used to play with my friends in a garden area, and I thought it was really fun since the area had a lot of naturey stuff around it."},{"schoolName":"Roy W Brown Middle School","degree":"Middle School Diploma","favoriteClass":"Physics","favoriteMemory":"Going to a festival with my school's band, and getting a gold rating. It was a good experience because our school had a tradition of getting a gold rating at the fstival, and it was nice to continue the tradition"},{"schoolName":"Bergenfield High School","degree":"High School Diploma","favoriteClass":"AP Biology","favoriteMemory":"My favorite memory was when I was working on a project for a reaserch summit where we created a construction robot. I like this memory the most, because it was when I knew I wanted to do Computer Science for my career. Not to mention that we had won the summit, and we were able to attend the national research summit"}];

router.get("/",async (req,res) => {
    try{
        res.json(data);
    } catch(e){
        res.status(500).send();
    }
});

module.exports = router;
