//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const router = express.Router();

let data = {"storyTitle":"My first choir audition",
            "story":"My first choir audition was during my Seniry yea of high school where I auditioned for county choir. The whole process of it was fun, because I spent the whole month practicing for something that I wanted to achieve. However, ot was really unfortunate come time for my audition, because I had lost my voice \n In a panic I tried to do everything I could to get my voice well. Some of the things that I tried were drinking as much water as I could, Downing 5 canisters of ginger tea, eating ginger candy, and not speaking until my audtion. However, I was unable to get my voice back by the time the audition had came. \n Thus afterwards I went to the warmup room where I warmed up by doing some scales, however my voice was struggling to do really trivial scales. After warming up for a little bit I went with my friends to the area where our audition rooms were, and waited for my turn. When it was my turn I went in and did my audition. Surprisingly it was not terrible, and I was happy with my performance. I then went to do the second half of my audition which was tonal memory, and I think I did amazing in that section, because I was in the flow of performing.\n Finally when the score came back I learned that I was only 6 points away from the cutoff, and in the end I was happy with how I did. While I might have done better if I had my voice that day, I do not think I did the worst job in the world, and did way better that I could have imagined."}

router.get("/",async (req,res) => {
    try{
        res.json(data);
    } catch(e){
        res.status(500).send();
    }
});

module.exports = router;
