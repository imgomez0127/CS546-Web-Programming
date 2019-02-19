const extend = function extend(...args){
	if(args.length < 2){
		throw "There have been less than two objects inserted";
	}
	let newObj = {};
	args.forEach(function (obj){
		if(obj === undefined){
			throw "Inserted object is undefined";
		}
		if(Object.prototype.toString.call(obj) !== "[object Object]"){
			throw "inserted arg is not an [object Object]";
		}
		Object.keys(obj).forEach(function (key){
			if(newObj[key] === undefined){
				newObj[key] = obj[key];
			}
		});			
	});
	return newObj;
}
const smush = function smush(...args){
	if(args.length < 2){
		throw "There have been less than two objects inserted";
	}
	let newObj = {};
	args.forEach(function (obj){
		if(obj === undefined){
			throw "Inserted object is undefined";
		}
		if(Object.prototype.toString.call(obj) !== "[object Object]"){
			throw "inserted arg is not an [object Object]";
		}
		Object.keys(obj).forEach(function (key){
			newObj[key] = obj[key];
		});			
	});
	return newObj;
}
const mapValues = function map(object,func){
	if(object === undefined || Object.prototype.toString.call(object) !== "[object Object]"){
			throw "Inserted object is undefined";
	}
	if(typeof func !== "function"){
		throw "Inserted func is not of type function";
	}
	Object.keys(object).forEach(function (key){
		object[key] = func(object[key]);
	});
	return object;
}
module.exports = {
    firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
	extend,
	smush,
	mapValues
    };
