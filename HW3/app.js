//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
const peopleMod = require("./people.js");
const weatherMod = require("./weather.js");
const workMod = require("./work.js");
let succ = "Successfully passed test case";
let fail = "Failed test case";
let testgetPersonById = async function()
{
	let brew = await peopleMod.getPersonById(43);
	if(brew === "Brew Peat"){
		console.log(succ);
	}
	else{
		console.log(fail)
	}
	try
	{
		let err1 = await peopleMod.getPersonById(-1);
	}
	catch(err)
	{
		console.log(succ);
	}
	try
	{
		let err2 = await peopleMod.getPersonById(1000);
	}
	catch(err)
	{
		console.log(succ);
	}
	try
	{
        let err3 = await peopleMod.getPersonById();
    }
	catch(err)
	{
		console.log(succ);
	}
    try{
        let err4 = await peopleMod.getPersonById("foo");
    }
    catch(err){
        console.log(err);
    }
}

let testlexIndex = async function (){
	let dermot = await peopleMod.lexIndex(2);
	if(dermot == "Dermot Abberley"){
		console.log(succ);
	}	
	else{
		console.log(fail);
	}	
    try{
		let err1 = await peopleMod.lexIndex(-1);
    }
    catch(e){
        console.log("err 1 threw successfully");
    } 
    try{
		let err2 = await peopleMod.lexIndex(1000);
    }
    catch(e){
        console.log("err 2  was thrown successfully");
    } 
    try{
		let err3 = await peopleMod.lexIndex();
    }
    catch(e){
        console.log("err 3 was thrown successfully");
    } 

}
let testfirstNameMetrics= async function(){
	let metrics = await peopleMod.firstNameMetrics(-1);
	console.log(metrics);	
} 
let testshouldTheyGoOutside = async function(){
   try{ 
	let yes = await weatherMod.shouldTheyGoOutside("Scotty", "Barajaz");
	console.log(yes);
    }
    catch(e){
        console.log(e);
    } 
    try{
	let no = await weatherMod.shouldTheyGoOutside("Calli", "Ondrasek");
	console.log(no);
    }
    catch(e){
        console.log(e);
    } 
    try{
	let err1 = await weatherMod.shouldTheyGoOutside();
    }
    catch(e){
        console.log(e);
    } 
    try{
	let err2 = await weatherMod.shouldTheyGoOutside("Bob");
    }
    catch(e){
        console.log(e);
    } 
    try{
	let err3 = await weatherMod.shouldTheyGoOutside("Bob", "Smith");
    }
    catch(e){
        console.log(e);
    } 

}
let testwhereDoTheyWork = async function(){
    try{
	let fired = await workMod.whereDoTheyWork("Demetra", "Durrand");
	console.log(fired);
    } 
    catch(e){
        console.log(e);
    }
    try{
	let notFired = await workMod.whereDoTheyWork("Hank","Tarling");
	console.log(notFired);
    }
    catch(e){
        console.log(e);
    }
    try{
	let err1 = await workMod.whereDoTheyWork();
    } 
    catch(e){
        console.log(e);
    }
    try{
	let err2 = await workMod.whereDoTheyWork("Bob");
    }
    catch(e){
        console.log(e);
    }
    try{
	let err3 = await workMod.whereDoTheyWork("Bob", "Smith");
    }
    catch(e){
        console.log(e);
    }

}
let testfindTheHacker = async function(){
    try{
	let hacker = await workMod.findTheHacker("79.222.167.180");
    }
    catch(e){
        console.log(e);
    }

    try{	
    let err1 = await workMod.findTheHacker("foobar");
    }
    catch(e){
        console.log(e);
    }
    try{
	let err2 = await workMod.findTheHacker();
    }
    catch(e){
        console.log(e);
    }
    try{
	let err3 = await workMod.findTheHacker(12345);
    }
    catch(e){
        console.log(e);
    }

}
testgetPersonById();
testlexIndex();
testfirstNameMetrics();
testshouldTheyGoOutside();
testwhereDoTheyWork();
testfindTheHacker();
