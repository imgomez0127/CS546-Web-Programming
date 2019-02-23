// "I pledge my honor that I have abided by the Stevens honor system" - igomez1 Ian Gomez 10428821
let axios = require("axios");
let peopleMod = require("./people.js")
let getWeather = async function ()
{
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json");
	return data;
}
let findRegion = function(zip,weatherArr)
{
	if(typeof zip !== "string")
	{
		throw "Either zip is undefined or is not of type string";
	}		
	if(Object.prototype.toString.call(weatherArr) !== "[object Array]")
	{
		throw "Either weatherArr is undefined or is not of type array";
	}
	let foundRegion = undefined;
	weatherArr.forEach(function(region){
		if(region["zip"] === zip){
			foundRegion = region;
		}
	});
	if(foundRegion === undefined){
		throw "Location could not be found";
	}
	else{
		return foundRegion;
	}
}
let shouldTheyGoOutside = async function(firstName,lastName){
	try{
		if(typeof firstName !== "string" || typeof lastName !== "string")
		{
			throw "Either the firstName or the lastName are not of type string";
		}
		let weatherArr = await getWeather();	
		let people = await peopleMod.getPeople();
		let person = peopleMod.findPerson(firstName,lastName,people); 			
		let region = findRegion(person["zip"],weatherArr); 
		if(region["temp"] >= 34){
			return `Yes, ${firstName} should go outside.`;
		}
		else{
			return `No, ${firstName} should not go outside.`;
		}
	}
	catch(err){
	}
}
module.exports = {
	firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	getWeather,
	findRegion,
	shouldTheyGoOutside
}
