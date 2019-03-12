//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const express = require("express");
const router = express.Router();

let data = {"name":"Ian Gomez",
            "cwid":"10428821",
            "biography":"I am a CS major at Stevens, and I really like Machine Leraning. The Neural Network architecture I find the most interesting is GAN's because they incorporate some really cool Game Theory knowledge to facilitate optimization. Also it was created by Ian Goodfellow who has the same first name as me. I like this field of CS because I think the idea of having a program find patterns in data that humans may have trouble finding is really interesting, and I am inspired by a lot of the cool things that I have seen from machine learning algorithms. Some of the things I find cool are computer vision algorithms which use Convolutional Neural Networks to extract features from a picture and make predictions from them.I also think they have some really cool applications like using the Kernels to try and transform an image to be in the style of another image \n I am half Colombian and half Filipino, and have 5 siblings. I grew up in Bergenfield, however I would really like to move to California just to  experience life somewhere else. I also want to travel around the world.  The main reason for this is to get a different perspective on life, and see how people from other cultural backgrounds view life. Some of the places I have been to are Colombia, Canada, California, Las Vegas, Bahamas, Grand Cayman, Cancun, Florida. Also my favorite genres of music are RnB, Rap, Classical, Kpop, and Jazz. I am dragon, and I like eating goats and breathing  fire. I find it pretty entertaining.Also vim is the best the best text editor",
            "favoriteShows":["Psycho-pass","Neon Genesis Evangelion","Bob's burgers"],
            "hobbies":["coding","Playing video games","Listening to music"]
}

router.get("/",async (req,res) => {
    try{
        res.json(data);
    } catch(e){
        res.status(500).send();
    }
});

module.exports = router;
