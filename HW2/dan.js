// Daniel Shapiro
// "I pledge my honor that I have abided by the Stevens Honor System." - Daniel Shapiro

const imp = require("./arrayUtils");
const imp2 = require("./stringUtils");
const imp3 = require("./objUtils");
console.log(imp, imp2, imp3);

//Last Tests

try{
    // Should Pass
    const lastOne = imp.last([2,3,4]);
    console.log("Test Case 1: last passed successfully");
} catch(e){
    console.error("last failed test case incorrectly.");
}

try {
    // Should Fail
    const lastTwo = imp.last(1234);
    console.error('last did not error');
 } catch (e) {
    console.log('Test Case 2: last failed successfully');
 }


// Remove Tests

 try{
     // Should Pass
     const remOne = imp.remove([1,2,3,4], 2);
     console.log("Test Case 3: remove passed successfully");
 }catch(e){
     
     console.log("remove failed incorrectly");
 }

 try{
     // Should Fail
     const remTwo = imp.remove();
     console.log("remove passed incorrectly");
 }catch(e){
     console.log("Test Case 4: remove failed successfully");
 }

// CountChars Tests

try{
    //Should Pass
    const counChars = imp2.countChars("Hello");
    console.log("Test Case 5: countChars passed successfully");
}catch(e){
    console.log("countChars failed incorrectly");
}

try{
    // Should Fail
    const counChars = imp2.countChars(4523);
    console.log("countChars passed incorrectly");
}catch(e){
    console.log("Test Case 6: countChars failed successfully");
}

// Extend Tests

try{
    // Should Pass
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    const firstSecondThird = imp3.extend(first,second,third);
    console.log("Test Case 7: extend passed successfully");
}catch(e){
    console.log("extend failed incorrectly");
}

try{
    // Should Fail
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    const firstSecondThird = imp3.extend(2, second, third);
    console.log("extend passed incorrectly");
}catch(e){
    console.log("Test Case 8: extend failed successfully");
}

// MapValues Tests
try{
    // Should Pass
    const mv1 = imp3.mapValues({a: 5, b: 24, c: 13}, n=> n*2);
    console.log("Test Case 9: mapValues passed successfully");
}catch(e){
    console.log("mapValues failed incorrectly");
}

try{
    // Should Fail
    const mv2 = imp3.mapValues({a: 10, b:4, c:16}, );
    console.log("mapValues passed incorrerctly");
}catch(e){
    console.log("Test Case 10: mapValues failed successfully");
}

// Head Tests
try{
    // Should Fail
    const h1 = imp.head();
    console.log("head passed incorrectly");
}catch(e){
    console.log("Test Case 11: head failed successfully");
}

// Range Tests
try{
    // Should Fail
    const ran1 = imp.range(-1, "hi");
    console.log("range passed incorrectly");
}catch(e){
    console.log("Test Case 12: range failed successfully");
}

// CountElements Tests

try{
    // Should Fail
    const cE1 = imp.countElements();
    console.log("countElements passed incorrectly");
} catch(e){
    console.log("Test Case 13: countElements failed successfully");
}

// IsEqual Tests

try{
    // Should Pass
    const iE1 = imp.isEqual([1,2,3], [1, "2", 3]);
    console.log("Test Case 14: isEqual passed successfully");
}catch(e){
    console.log("isEqual failed incorrectly");
}

// Capitalize Tests
try{
    // Should Fail
    const cap = imp2.capitalize(1234);
    console.log("capitalize passed incorrectly");
}catch(e){
    console.log("Test Case 15: capitalize failed successfully");
}

// Repeat Tests
try{
    // Should Fail
    const rep = imp2.repeat("hi", -1);
    console.log("repeat passed incorrectly");
}catch(e){
    console.log("Test Case 16: repeat failed successfully");
}

// Smush Tests
try{
    // Should Fail
    const first = { x: 2, y: 3};
    const second = { a: 70, x: 4, z: 5 };
    const third = { x: 0, y: 9, q: 10 };
    const sm = imp3.smush(3, first, second, third);
    console.log("smush passed incorrectly");
}catch(e){
    console.log("Test Case 17: smush failed successfully");
}


