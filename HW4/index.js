//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const animals = require("./data/animals.js");
const connection = require("./data/mongoConnection.js");
async function main(){
    try{
        let sasha = await animals.create("Sasha","Dog");
        console.log(sasha);
        let lucy = await animals.create("Lucy","Dog");
        let allAnimals1 = await animals.getAll();
        console.log(allAnimals1);
        let duke = await animals.create("Duke","Walrus");
        console.log(duke); 
        let Sashita = await animals.rename(sasha._id,"Sashita");
        console.log(Sashita);
        await animals.remove(lucy._id);
        let allAnimals2 = await animals.getAll();
        console.log(allAnimals2);
    }
    catch(err){
        console.log(err);
       
    }
        
        const db = await connection();
        await db.serverConfig.close();

}
main(); 
