const head = function head(array){
	if(!Array.isArray(array)){
		throw "The inputted object is not of type Array";
	}
	if(array.length === 0){
		throw "The inputted arrayay has no elements";
	}
	return array[0];
}
const last = function last(array){
	if(!Array.isArray(array)){
		throw "The inputted object is not of type Array";
	}
	if(array.length === 0){
		throw "The inputted arrayay has no elements";
	}
	return array[array.length-1];
}
const remove = function remove(array,index){
	if(!Array.isArray(array)){
		throw "The inputted object is not of type Array";
	}
	if(array.length === 0){
		throw "The inputted arrayay has no elements";
	}
	if(typeof index !== "number"){
		throw "The inputted index is not of type number";
	}
	if(index >= array.length){
		throw "The inputted index is outside of the arrayay"
	}
	let newArr = [];
	let i = 0;
	for(i; i < array.length; i++){
		if(i !== index){
			newArr.push(array[i]);
		} 	
	}
	return newArr;
}
const range = function range(end,value){
	if(typeof end !== "number" || end === NaN){ 
		throw "The inputted end is not a number";
	}
	if(end <= 0){
		throw "The inputted end value is not a greater than 0";
	}
	let newArr = [];
	let i = 0;
	for(i; i < end; i++){
		newArr.push(((value !== undefined) ? value : i));	
	}
	return newArr;
}
const countElements = function countElements(array){
	if(!Array.isArray(array)){
		throw "The inputted object is not of type Array";
	}
	let counts = {};
	for(let i = 0; i < array.length;++i){
		if(counts[array[i]] === undefined){
			counts[array[i]]= 1;
		}else{
			counts[array[i]]++;
		}
	}
	return counts; 
}
const isEqual = function isEqual(arrayOne,arrayTwo){
	if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
		throw "The inputted object is not of type Array";
	}
	if(arrayOne.length !== arrayTwo.length){
		return false;
	}
	for(let i = 0; i < arrayOne.length; ++i){
		if(arrayOne[i] !== arrayTwo[i]){
			return false;
		}
	}
	return true; 

}
module.exports = {
    firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	head,
	last,
	remove,
	range,
	countElements,
	isEqual
    };
