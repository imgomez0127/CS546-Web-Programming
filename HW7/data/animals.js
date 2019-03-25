//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821

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
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or ObjectID to search for");
    }
    let searchid = id;
    if(typeof id === "string"){
        searchid = ObjectID(id);
    }
    const animalCollections = await animals();
    const animal = await animalCollections.findOne({_id:searchid});
    if(animal === null){
         return {empty:true};
    }
    return animal;
}

let create = async function(name, animalType){
    if(typeof name !== "string")throw "You must provide a string for the name";
    if(typeof animalType !== "string")throw "You must provide a string for the breed";
    const animalCollection = await animals();
    let newAnimal = {
        name: name,
        animalType:animalType,
        likes:[]
    }
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if(insertInfo.insertedCount === 0) throw "Could not add animal";
    const newId = insertInfo.insertedId;
    const animal = await get(insertInfo.insertedId);
    return animal;
}
let remove = async function remove(id){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or ObjectID to search for");
    }
    let searchid = id
    if(typeof id === "string"){
        searchid = ObjectID(id);
    }
    const animalCollection = await animals();
    const animal = await get(id);
    let deletedItem = { deleted:true,
                        data :  animal };
    const deletionInfo = await animalCollection.removeOne({_id:searchid});
    
    if(deletionInfo.deletedCount === 0){
        throw `Could not delete animal with id of ${id}`;
    }
    return deletedItem;
}

let rename = async function(id,newName){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or ObjectID to search for");
    }
    let searchid = id
    if(typeof id === "string"){
        searchid = ObjectID(id);
    }
    if(!newName){
        throw "You must provide a new name to replace the old name";
    }
    const animalCollection = await animals();
    let updatedAnimal = {$set:{name:newName,}};
    const updateAnimalInfo = await animalCollection.updateOne({_id:searchid},updatedAnimal);
    if(updateAnimalInfo.modifiedCount === 0){
        throw "Unable to update the animal";
    }
    return await get(id);
}
let changeType = async function(id,newType){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or ObjectID to search for");
    }
    let searchid = id;
    if(typeof id === "string"){
        searchid = ObjectID(id);
    }
    if(!newType){
        throw "You must provide a new breed to replace the old type";
    }
    const animalCollection = await animals();
    let updatedAnimal = {$set:{animalType:newType,}};
    const updateAnimalInfo = await animalCollection.updateOne({_id:searchid},updatedAnimal);
    if(updateAnimalInfo.modifiedCount === 0){
        throw "Unable to update the animal";
    }
    return await get(id);
}
let addLike = async function(animalId, postId){
    if(!animalId && typeof animalId !== "string"){
        throw "You must provide a string or ObjectID to search for an animal";
    }
    if(!postId && typeof postId !== "string"){
        throw "You must provide a string or ObjectID to search for a post";
    }
    let searchAnimalId = animalId;
    if(typeof animalId === "string"){
        searchAnimalId = ObjectID(animalId);
    }
    let searchPostId = postId;
    if(typeof postId === "string"){
        searchPostId = ObjectID(postId);
    } 
    let animal = await get(animalId);
    if(foundPost < 0){
        animal["likes"].push(searchPostId);
    }
    updatedAnimal = {$set:{likes:animal["likes"]}};
    let likesArr = animal["likes"].map((id) => {
        return id.str;
    });
    let foundPost = likesArr.indexOf(searchPostId);
    const animalCollection = await animals();
    const updateAnimalInfo = await animalCollection.updateOne({_id:searchAnimalId},updatedAnimal);
    if(updateAnimalInfo.modifiedCount === 0){
        return {notUpdated:true};
    }
    return await get(searchAnimalId)
}
let removeLike = async function(animalId, postId){
     if(!animalId && typeof animalId !== "string"){
        throw "You must provide a string or ObjectID to search for an animal";
    }
    if(!postId && typeof postId !== "string"){
        throw "You must provide a string or ObjectID to search for a post";
    }
    let searchAnimalId = animalId;
    if(typeof animalId === "string"){
        searchAnimalId = ObjectID(animalId);
    }
    let searchPostId = postId;
    if(typeof postId === "string"){
        searchPostId = ObjectID(postId);
    } 
    let animal = await get(animalId);
    let likesArr = animal["likes"].map((id) => {
        return id.str;
    });
    let foundPost = likesArr.indexOf(searchPostId);
    if(foundPost >= 0){
        animal["likes"].splice(foundPost,1);
    }
    updatedAnimal = {$set:{likes:animal["likes"]}};
    const animalCollection = await animals();
    const updateAnimalInfo = await animalCollection.updateOne({_id:searchAnimalId},updatedAnimal);
    if(updateAnimalInfo.modifiedCount === 0){
        return {notUpdated:true};
    }
    return await get(searchAnimalId)
}
module.exports = {
    getAll,
    get,
    create,
    remove,
    rename,
    changeType,
    addLike,
    removeLike
} 
