let axios = require("axios");
async function getPeople(){
	try{
		const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
		return data;
	}
	catch(err){
		console.error(`Problem interfacing with database with Error: ${err}`);
	}
}
let personToName = (person) => {
	if(person["firstName"] === undefined || person["lastName"] === undefined){
		throw "This object has no first name or has no last name";
	}
	return person["firstName"] + " " + person["lastName"];
}
let personToFirstName = (person) =>{
	if(person["firstName"] === undefined){
		throw "This object has no first name";
 	}
	return person["firstName"];
}
let personToLastName = (person) =>{
	if(person["lastName"] === undefined){
		throw "This object has no last name";
	}
	return person["lastName"];
}
let getPersonById = async function (id) { 
	try{
		if(id === undefined || id > 500 || id < 1){
			throw "This is not a valid person ID please insert a number in between 1 and 500";
		}
		let peopleArr = await getPeople();
		console.log(personToName(peopleArr[id-1]));
		return personToName(peopleArr[id-1]);
	}
	catch(err){
		console.error("Problem when interfacing with database");
		console.error(err);
	}	
}

let findPerson = function (firstName,lastName,peopleArr){
	let foundPerson = undefined;
	peopleArr.forEach(function(person){
		if(personToName(person) === firstName + " " + lastName){
			foundPerson =  person;
		}
	});
	if(foundPerson === undefined){
		throw "Person not found";
	}
	return foundPerson;
}
let findPersonFromSSN = function(ssn,peopleArr){
	let foundPerson = undefined;
	peopleArr.forEach(function(person){
		if(person["ssn"] === ssn){
			foundPerson =  person;
		}
	});
	if(foundPerson === undefined){
		throw "Person not found";
	}
	return foundPerson;
}

let lexIndex = async function (index){
	try{	
		if(index === undefined || index < 0 || index > 499){
			throw "This is not a valid index for this People dataset";
		}
		let people = await getPeople(); 
		let size = people.length;
		let nameArr = Array(size);
		for(let i = 0; i < size; ++i){
			nameArr[i] = personToLastName(people[i]);
		}
		nameArr.sort();
		let person = undefined;
		for(let i = 0; i < size; ++i){
			if(people[i]['lastName'] === nameArr[index]){
				person = personToName(people[i]); 
			}
		}
		console.log(person);
		return person;
	}
	catch(err){
		console.log("There was an error when interfacing with the database");
		console.log(err);
	}
	
}
let countLetters = function(nameArr){
	let letterCount = 0;
	nameArr.forEach(function(name){
		letterCount+=name.length;
	});
	return letterCount;
}
let countVowels = function(nameArr){
	let vowelCount = 0;
	let vowels = ['a','e','i','o','u'];
	nameArr.forEach(function (name){
		let nameLen = name.length;
		for(let i = 0; i < nameLen; ++i){
			if(vowels.indexOf(name[i].toLowerCase()) !== -1){
				vowelCount++;
			}
		}
	});
	return vowelCount;	
}
let countConsonants = function(nameArr){
	let consonantsCount = 0;
	let vowels = ['a','e','i','o','u'];
	nameArr.forEach(function (name){
		let nameLen = name.length;
		for(let i = 0; i < nameLen; ++i){
			if(vowels.indexOf(name[i].toLowerCase()) === -1){
				consonantsCount++;
			}
		}
	});
	return consonantsCount;	
}
let findLongestName = function(nameArr){
	let longestNameSize = 0;
	let longestName = "";
	nameArr.forEach(function (name){
		if(name.length > longestNameSize){
			longestNameSize = name.length;
			longestName = name;
		}
	});	
	return longestName;
}
let findShortestName = function(nameArr){
	let shortestNameSize = Number.MAX_SAFE_INTEGER;
	let shortestName = "";
	nameArr.forEach(function (name){
		if(name.length < shortestNameSize){
			shortestNameSize = name.length;
			shortestName = name;
		}
	});	
	return shortestName;
}
let firstNameMetrics = async function (){
	try{
		people = await getPeople();
		let size = people.length;
		let nameArr = Array(size);
		for(let i = 0; i < size; ++i){
			nameArr[i] = personToFirstName(people[i]);
		}	
		metrics = {
			totalLetters: `sum of all the letters in all the firstNames: ${countLetters(nameArr)}`,
			totalVowels: `sum of all the vowels in all the firstNames: ${countVowels(nameArr)}`,
			totalConsonants: `sum of all the consonants in all the firstNames: ${countConsonants(nameArr)}`,
			longestName: `the longest firstName in the list: ${findLongestName(nameArr)}`,
			shortestName: `the shortest firstName in the list: ${findShortestName(nameArr)}`
		}
		console.log(metrics);
		return metrics;
	}
	catch(err){
		console.error(err);
	}
}
module.exports = {
    firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	getPeople,	
	personToName,
	findPerson,
	findPersonFromSSN
    };
