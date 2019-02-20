let axios = require("axios");
let peopleMod = require("./people.js")
let getWeather = async function (){
	const {data} = await axios.get("https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json");
	return data;
}
let findRegion = function(zip,weatherArr){
	weatherArr.forEach(function(region){
		if(region["zip"] === zip){
			return region;
		}
	});
		throw "Location could not be found";
}
let shouldTheyGoOutside = async function(firstName,lastName){
	try{
		if(firstName === undefined || lastName === undefined){
			throw "Either the firstName or the lastName are undefined";
		}
		let weatherArr = await getWeather();	
		let people = await peopleMod.getPeople();
		let person = peopleMod.findPerson(firstName,lastName,people); 			
		let region = findRegion(person["zip"],weatherArr); 
		if(region["temp"] >= 34){
			return `Yes, ${firstName} should go outside.`;
		}
	}
	catch(err){
		console.error(err);
	}
}
shouldTheyGoOutside("Scotty","Barajaz");
