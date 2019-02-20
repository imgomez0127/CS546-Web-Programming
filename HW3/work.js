let axios = require("axios");
let peopleMod = require("./people.js");
let weatherMod = require("./weather.js");
let getWork = async function(){
	let {data} = await axios("https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json")
	return data;
}
let findWork = function(ssn,jobArr){
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
	try{
		if(firstName === undefined || lastName === undefined){
			throw "Either the firstName or the lastName were undefined";
		}
		let peopleArr = await peopleMod.getPeople();
		let person = peopleMod.findPerson(firstName,lastName,peopleArr);
		let jobArr = await getWork();
		let job = findWork(person["ssn"],jobArr);
		console.log(`${person["firstName"]} ${person["lastName"]} - ${job["jobTitle"]} at ${job["company"]}. ${(job["willBeFired"]) ? "They will be fired" : "They will not be fired"}`);
}
	catch(err){
		console.log(`Error: ${err}`);
	}
}
let findTheHacker = async function(ip){
	try{
		if(ip === undefined){
			throw "Ip address is undefined";
		}
		let jobArr = await getWork();
		let peopleArr = await peopleMod.getPeople();
		let job = findJobFromIP(ip,jobArr);
		let person = peopleMod.findPersonFromSSN(job["ssn"],peopleArr);
		console.log(`${peopleMod.personToName(person)} is the hacker!`);
	}
	catch(err){
		console.log(`Error : ${err}`);
	}
}
whereDoTheyWork("Demetra","Durrand");	
findTheHacker("79.222.167.180");
