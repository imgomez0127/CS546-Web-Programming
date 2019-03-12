//"I pledge my honor that I have abided by the Stevens honor system - igomez1 10428821 Ian Gomez"
const arrayUtils = require('./arrayUtils.js');
const stringUtils = require('./stringUtils.js');
const objUtils = require('./objUtils.js');
try{
	const lastTestOne = arrayUtils.last([6,9,420]);
	console.log(lastTestOne);
	console.log("last function has passed successfully");
} catch(e) {
		console.error("last has failed the test case and produced the error '" + e.toString() + "'");
}
try{
	const lastTestTwo = arrayUtils.last();
	console.error("last function failed to produce an error");
}
catch(e){
		console.log("last has failed the test case successfully and produced the error '" + e.toString() + "'");
}
try{
	const repeatTestOne = stringUtils.repeat("yeet",5);
	console.log(repeatTestOne);
	console.log("repeat has passed successfully");
}
catch(e){
	console.error("repeat has failed the test case and produced the error '" + e.toString() + "'");
}
try{
	const repeatTestTwo = stringUtils.repeat("yerrr",[]);
	console.error("repeat function failed to produce an error");
}
catch(e){
		console.log("repeat has successfully failed the test case and produced the error '" + e.toString() + "'");
}
try{
	const rangeTestOne = arrayUtils.range(2,"har");
	console.log(rangeTestOne);
	console.log("range has passed successfully");
}
catch(e){
	console.error("range has failed the test case and produced the error '" + e.toString() + "'");
}
try{
	const rangeTestTwo = arrayUtils.range(0);
	console.error("range function failed to produce an error");
}
catch(e){
		console.log("range has successfully failed the test case and produced the error '" + e.toString() + "'");
}
try{
	const obj1 = {a:2,b:"hee",c:[]};
	const obj2 = {a:3,yeet:"yuh",o:"kay"};
	const obj3 = {b:"har"};
	const smushTestOne = objUtils.smush(obj1,obj2,obj3);
	console.log(smushTestOne);
	console.log("smush has passed successfully");
}
catch(e){
	console.error("smush has failed the test case and produced the error '" + e.toString() + "'");

}
try{
	const smushTestTwo = objUtils.smush();
	console.error("smush function failed to produce an error");
}
catch(e){
	console.log("smush has successfully failed the test case and produced the error '" + e.toString() + "'");
}
try{
    const helloworld = stringUtils.capitalize("HELLOWORLD");
    if(helloworld === "Helloworld"){
        console.log("capitalize has passed successfully");
    }
    else{
        console.log("capitalize has failed");
    }
}
catch(e){
    console.log("capitalize has failed the test case and produced the error '" + e.toString() + "'");
}
try{
    const HELLOWORLD = stringUtils.capitalize("helloworld");
    if(HELLOWORLD === "Helloworld"){
        console.log("capitalize has passed successfully");
    }
    else{
        console.log("capitalize has failed");
    }
}
catch(e){
    console.log("capitalize has failed the test case and produced the error '" + e.toString() + "'");
}
try{
    const has1 = stringUtils.capitalize("h");
    if(has1 === "H"){
        console.log(has1);
        console.log("capitalize has passed successfully");
    }
    else{
        console.log("capitalize has failed");
    }
}
catch(e){
    console.log("capitalize has failed the test case and produced the error '" + e.toString() + "'");
}
try{
    const shouldFail = stringUtils.capitalize();
    console.log("capitalize failed unsuccessfully");
}
catch(e){
    console.log("capitalize failed successfully");
}
