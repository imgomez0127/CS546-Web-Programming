//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821

const mongoCollections = require("./mongoCollections");
const posts = mongoCollections.posts;
const connection = require("./mongoConnection");
const ObjectID = require("mongodb").ObjectID
let getAll = async function (){
    const postsCollection = await posts();
    const allPosts = await postsCollection.find({}).toArray();
    return allPosts;
}

let get = async function(id){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or Object ID to search for");
    }
    let searchid = id
    if(typeof id === "string"){
        searchid = ObjectID(id);
    }
    const postsCollections = await posts();
    const postsLst = await postsCollections.findOne({_id:searchid});
    if(postsLst === null){
        return {empty:true} 
    }
    return postsLst;
}
let getPostsByAuthor = async function(id){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or Object ID to search for");
    }
    let authorId = id;
    if(typeof id === "string"){
        authorId = ObjectID(id);
    }
    const postsCollections = await posts();
    const postsLst = await postsCollections.find({author:authorId}).toArray();
    return postsLst;
}
        
let create = async function(title,author,content){
    if(typeof title !== "string")throw "You must provide a string for the title";

    if(typeof author !== "string" && 
        Object.prototype.toString.call(author) !== "[object Object]"){
        throw "You must provide a string or an ObjectID for the author";
    }

    if(typeof content !== "string") throw "You must prove a string for the content";

    const postsCollection = await posts();
    let authorID = author
    if(typeof author === "string"){
        authorID = ObjectID(author);
    }
    
    let newPost = {
        title: title,
        author:authorID,
        content:content
    }

    const insertInfo = await postsCollection.insertOne(newPost);
    if(insertInfo.insertedCount === 0) throw "Could not add post";
    const post = await get(insertInfo.insertedId);
    return post;
}
let remove = async function remove(id){
    if(!id && typeof id !== "string"){
        throw new Error("You must provide a string or Object ID to search for");
    }
    let searchid = id
    if(typeof id === "string") {
        searchid = ObjectID(id);
    }
    const postsCollection = await posts();
    const post = await get(id);
    let deletedItem = { deleted:true,
                        data :  post };
    const deletionInfo = await postsCollection.removeOne({_id:searchid});
    
    if(deletionInfo.deletedCount === 0){
        throw `Could not delete post with id of ${id}`;
    }
    return deletedItem;
}

let changeTitle = async function(id,newTitle){
    if(!id && typeof id !== "string" ){
        throw new Error("You must provide an Object ID or string to search for");
    }
    if(typeof newTitle !== "string"){
        throw "You must provide a new title to replace the old title";
    }
    let postid = id;
    if(typeof id === "string"){
        postid = ObjectID(id);
    }
    const postsCollection = await posts()
    let updatedPost = {$set:{title:newTitle,}};
    const updatePostInfo = await postsCollection.updateOne({_id:postid},updatedPost);
    if(updatePostInfo.modifiedCount === 0){
        throw "Unable to update the post";
    }
    return await get(id);
}

let changeContent = async function(id,newContent){
    if(!id && typeof id !== "string" ){
        throw new Error("You must provide an Object ID or string to search for");
    }
    if(typeof newContent !== "string"){
        throw "You must provide new content";
    }
    let postid = id;
    if(typeof id === "string"){
        postid = ObjectID(id);
    }
    const postsCollection = await posts()
    let updatedPost = {$set:{content:newContent,}};
    const updatePostInfo = await postsCollection.updateOne({_id:postid},updatedPost);
    if(updatePostInfo.modifiedCount === 0){
        throw "Unable to update the post";
    }
    return await get(id);
}
module.exports = {
    getAll,
    get,
    getPostsByAuthor,
    create,
    remove,
    changeTitle,
    changeContent
}
