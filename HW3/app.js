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
		let err3 = peopleMod.getPersonById();
	}
	catch(err)
	{
		console.log(succ);
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
		let err1 = await peopleMod.lexIndex(-1);
		let err2 = await peopleMod.lexIndex(1000);
		let err3 = await peopleMod.lexIndex();
	}
let testfirstNameMetrics= async function(){
	let metrics = await peopleMod.firstNameMetrics(-1);
	console.log(metrics);	
} 
let testshouldTheyGoOutside = async function(){
	let yes = await weatherMod.shouldTheyGoOutside("Scotty", "Barajaz");
	let no = await weatherMod.shouldTheyGoOutside("Calli", "Ondrasek");
	let err1 = await weatherMod.shouldTheyGoOutside();
	let err2 = await weatherMod.shouldTheyGoOutside("Bob");
	let err3 = await weatherMod.shouldTheyGoOutside("Bob", "Smith");
	console.log(yes);
	console.log(no);
}
let testwhereDoTheyWork = async function(){
	let fired = await workMod.whereDoTheyWork("Demetra", "Durrand");
	let notFired = await workMod.whereDoTheyWork("Hank","Tarling");
	let err1 = await workMod.whereDoTheyWork();
	let err2 = await workMod.whereDoTheyWork("Bob");
	let err3 = await workMod.whereDoTheyWork("Bob", "Smith");
	console.log(fired);
	console.log(notFired);
}
let testfindTheHacker = async function(){
	let hacker = workMod.findTheHacker("79.222.167.180");
	let err1 = workMod.findTheHacker("foobar");
	let err2 = workMod.findTheHacker();
	let err3 = workMod.findTheHacker(12345);
}
testgetPersonById();
testlexIndex();
testfirstNameMetrics();
testshouldTheyGoOutside();
testwhereDoTheyWork();
testfindTheHacker();
