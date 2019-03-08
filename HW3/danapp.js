// "I pledge my honor that I have abided by the Stevens Honor System." - Daniel Shapiro

const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){
    // Should pass
    try{
        const test1 = await people.getPersonById(43);
        console.log("Test 1: getPersonById() has passed successfully.");
        console.log(test1);
    }catch(e){
        console.log("test1 has failed incorrectly.");
    }

    // Should fail
    try{
        const test2 = await people.getPersonById(1000);
        console.log("test2 has passed incorrectly.");
    }catch(e){
        console.log("Test 2: getPersonById() has failed successfully.");
    }

    // Should pass
    try{
        const test3 = await people.lexIndex(3);
        console.log("Test 3: lexIndex() has passed successfully.");
        console.log(test3);
    }catch(e){
        console.log("test3 has failed incorrectly.");
    }

    // Should fail
    try{
        const test4 = await people.lexIndex();
        console.log("test4 has passed incorrectly.");
    }catch(e){
        console.log("Test 4: lexIndex() has failed successfully.");
    }

    // Should pass
    try{
        const test5 = await people.firstNameMetrics();
        console.log("Test 5: firstNameMetrics() has passed successfully.");
        console.log(test5);
    }catch(e){
        console.log("test5 has failed incorrectly.");
    }

    // Should pass
    try{
        const test6 = await weather.shouldTheyGoOutside("Brew", "Peat");
        console.log("Test 6: shouldTheyGoOutside() has passed successfully.");
        console.log(test6);
    }catch(e){
        console.log("test6 has failed incorrectly");
    }

    // Should fail
    try{
        const test7 = await weather.shouldTheyGoOutside("Scotty");
        console.log("test7 has passed incorrectly");
    }catch(e){
        console.log("Test 7: shouldTheyGoOutside() has failed successfully.");
    }

    // Should pass
    try{
        const test8 = await work.whereDoTheyWork("Brew", "Peat");
        console.log("Test 8: whereDoTheyWork() has passed successfully.");
        console.log(test8);
    }catch(e){
        console.log("test8 has failed incorrectly.");
    }

    //Should fail
    try{
        const test9 = await work.whereDoTheyWork("", "");
        console.log("test9 has passed incorrectly.");
    }catch(e){
        console.log("Test 9: whereDoTheyWork() has failed successfully.");
    }

    // Should pass
    try{
        const test10 = await work.findTheHacker("11.126.179.152");
        console.log("Test 10: findTheHacker() has passed successfully.");
        console.log(test10);
    }catch(e){
        console.log("test10 has failed incorrectly.");
    }

    // Should fail
    try{
        const test11 = await work.findTheHacker(123);
        console.log("test11 has passed incorrectly.");
    }catch(e){
        console.log("Test 11: findTheHacker() has failed successfully.");
    }
}

main()

