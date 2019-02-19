//I pledge my honor that I have abided by the Stevens honor system - igomez1
const questionOne = function questionOne(arr){
	// Returns the squared sum of all numbers in the array
	let numSum = 0;
	arr.forEach(function(n){
		numSum += n * n;
	});
	return numSum;
}
const questionTwo = function questionTwo(index){
	// Returns the nth fibonacci number
	const questionTwoHelper = function questionTwoHelper(index,a,b){
		if(index <=  0){
			return a;
		}
		return questionTwoHelper(index-1,b,a+b);
	}
	return questionTwoHelper(index,0,1);
}
const questionThree = function questionThree(str){
	// Returns the number of vowels in the given string
	vowelCount = 0;
	str = str.toLowerCase();
	for(i = 0; i < str.length; ++i){
		if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
			vowelCount++;
		}
	}
	return vowelCount
};
const questionFour = function questionFour(index){
	//returns the factorial of a number
	if(index < 0){
		return NaN;
	}
	if(index === 0){
		return 1;
	}
	return questionFour(index-1)*index;
}

module.exports = {
    firstName: "Ian",
    lastName: "Gomez",
    studentId: "10428821",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
