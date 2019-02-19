const arrayUtils = require("./arrayUtils.js");
const capitalize = function capitalize(string){
	if(typeof string !== "string"){
		throw "The inputted argument is not of type string";
	}
	let newStr = string.charAt(0).toUpperCase();
	for(let i = 0; i < string.length; ++i){
		newStr += string.charAt(i).toLowerCase(); 

	}
	return newStr;
}
const repeat = function repeat(string,num){
	if(typeof string !== "string"){
		throw "The inputted argument is not of type string";
	}
	if(typeof num !== "number" || num === NaN){
		throw "The inputted argument num is not a number";
	}
	if(num === 0){
		return "";
	}
	return string + repeat(string,num-1);
}
const countChars = function countChars(string){
	return arrayUtils.countElements(string.split(""));
}
module.exports = {
    firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	capitalize,
	repeat,
	countChars
    };
