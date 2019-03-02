const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;
const connection = require("./mongoConnection");
const ObjectID = require("mongodb").ObjectID
let getAll = async function (){
    const animalCollection = await animals();
    const allAnimals = await animalCollection.find({}).toArray();
    return allAnimals;
}

let get = async function(id){
    if(!id){
        throw new Error("You must provide an ID object to search for");
    }
    const animalCollections = await animals();
    const animal = await animalCollections.findOne({_id:id});
    if(animal === null){
         throw "No animal with that id";
    }
    return animal;
}

let create = async function(name, animalType){
    if(typeof name !== "string")throw "You must provide a string for the name";
    if(typeof animalType !== "string")throw "You must provide a string for the breed";
    const animalCollection = await animals();
    let newAnimal = {
        name: name,
        animalType:animalType
    }
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if(insertInfo.insertedCount === 0) throw "Could not add animal";
    const newId = insertInfo.insertedId;
    const animal = await get(insertInfo.insertedId);
    return animal;
}
let remove = async function remove(id){
    if(!id){
        throw new Error("You must provide an ID object to search for");
    }
    const animalCollection = await animals();
    const animal = await get(id);
    let deletedItem = { deleted:true,
                        data :  animal };
    const deletionInfo = await animalCollection.removeOne({_id:id});
    
    if(deletionInfo.deletedCount === 0){
        throw `Could not delete dog with id of ${id}`;
    }
    return deletedItem;
}

let rename = async function(id,newName){
    if(!id){
        throw new Error("You must provide an ID object to search for");
    }
    if(!newName){
        throw "You must provide a new name to replace the old name";
    }
    const animalCollection = await animals()
    let updatedAnimal = {$set:{name:newName,}};
    const updateAnimalInfo = await animalCollection.updateOne({_id:id},updatedAnimal,{upsert:true});
    if(updateAnimalInfo.modifiedCount === 0){
        throw "Unable to update the animal";
    }
    return await get(id);
}

module.exports = {
    getAll,
    get,
    create,
    remove,
    rename
} 
