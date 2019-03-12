//"I pledge my honor that I have abided by the Stevens honor system" -igomez1 Ian Gomez 10428821
let axios = require("axios");
let peopleMod = require("./people.js");
let weatherMod = require("./weather.js");
let getWork = async function(){
	let {data} = await axios("https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json")
	return data;
}
let findJobFromSSN = function(ssn,jobArr){
	if(typeof ssn !== "string")
	{
		throw "Either ssn is undefined or is not of type string";
	}
	if(Object.prototype.toString.call(jobArr) !== "[object Array]")
	{
		throw "Either jobArr is undefined or not of type Array";	
	}
	let job = undefined;
	jobArr.forEach(function(jobListing){
		if(jobListing["ssn"] === ssn){
			job = jobListing;
		}
	});
	if(job === undefined){
		throw "Job not found";
	}
	return job;
}
let findJobFromIP = function(ip,jobArr){
	if(typeof ip !== "string")
	{
		throw "Either ip is undefined or is not of type string";
	}
	if(Object.prototype.toString.call(jobArr) !== "[object Array]")
	{
		throw "Either jobArr is undefined or not of type Array";	
	}
	let job = undefined;
	jobArr.forEach(function(jobListing){
		if(jobListing["ip"] === ip){
			job = jobListing;
		}
	});
	if(job === undefined){
		throw "Job not found";
	}
	return job;
}
let whereDoTheyWork = async function(firstName,lastName){
		if(typeof firstName !== "string" || typeof lastName !== "string")
		{
			throw "Either the firstName or the lastName are not of type string";
		}
		let peopleArr = await peopleMod.getPeople();
		let person = peopleMod.findPerson(firstName,lastName,peopleArr);
		let jobArr = await getWork();
		let job = findJobFromSSN(person["ssn"],jobArr);
		return `${person["firstName"]} ${person["lastName"]} - ${job["jobTitle"]} at ${job["company"]}. ${(job["willBeFired"]) ? "They will be fired" : "They will not be fired"}`;
}
let findTheHacker = async function(ip)
	{
			if(typeof ip !== "string")
		{
			throw "Ip address is not of type string";
		}
		let jobArr = await getWork();
		let peopleArr = await peopleMod.getPeople();
		let job = findJobFromIP(ip,jobArr);
		let person = peopleMod.findPersonFromSSN(job["ssn"],peopleArr);
		return `${peopleMod.personToName(person)} is the hacker!`;
	}
module.exports = {
	firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	getWork,
	findJobFromSSN,
	findJobFromIP,
	whereDoTheyWork,	
	findTheHacker
}
