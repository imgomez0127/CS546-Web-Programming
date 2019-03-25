// I pledge my honor that I have abided by the Stevens Honor System.
// Gary Ung 10428192
const string = require('./stringUtils.js');
const array = require('./arrayUtils.js');
const object = require('./objUtils.js');

// countElements Test
try {
	// should pass
	const countElemsOne = array.countElements([13, '13', 13, 'hello', true, true]);
	console.log('countElements passed successfully');
} catch (e) {
	console.error('countElements failed test case');
}
try {
	// should fail
	const countElemsTwo = array.countElements(undefined);
	console.error('countElements did not error');
} catch (e) {
	console.log('countElements failed successfully');
}

// mapValues Test
try {
	// should pass
	const mapValuesOne = object.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
	console.log('mapValues passed successfully');
} catch (e) {
	console.error('mapValues failed test case');
}
try {
	// should fail 
	const mapValuesTwo = object.mapValues([], n => n + 1)
	console.error('mapValues did not error');
} catch (e) {
	console.log('mapValues failed successfully');
}

// repeat Test
try {
	// should pass 
	const repeatOne = string.repeat("buffalo ", 11);
	console.log('repeat passed successfully');
} catch (e) {
	console.error('repeat failed test case');
}
try {
	// should fail
	const repeatTwo = string.repeat("help", -1);
	console.error('repeat did not error');
} catch (e) {
	console.log('repeat failed successfully');
}

// remove Test
try {
	// should pass
	const removeOne = array.remove([1,2,3,4,5], 2);
	console.log('remove passed successfully');
} catch (e) {
	console.error('remove failed test case');
}
try {
	// should fail
	const removeTwo = array.remove([1,2,3], 4);
	console.error('remove did not error');
} catch (e) {
	console.log('remove failed successfully');
}
try {
	// should pass
	const capitalizeOne = string.capitalize("HELLOWORLD");
	console.log('capitalize passed successfully');
} catch (e) {
	console.error('capitalize failed test case');
}