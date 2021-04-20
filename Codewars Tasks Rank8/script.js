// 1.Very simple, given a number, find its opposite.

//Examples:
//1: -1
//14: -14
//-34: 34

function opposite(number) {
	return number *= -1;
}

// 2. Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

//Examples
//basicOp('+', 4, 7)         // Output: 11
//basicOp('-', 15, 18)       // Output: -3
//basicOp('*', 5, 5)         // Output: 25
//basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
	if (operation == "+") {
    	return value1 + value2;
	}
  	if (operation == "-") {
    	return value1 - value2;
 	}
  	if (operation == "*") {
    	return value1 * value2;
  	}
  	if (operation == "/") {
    	return value1 / value2;
  	}	
}

// 3. Input: Array of elements:
//["h","o","l","a"]
//Output: String with comma delimited elements of the array in th same order.
//"h,o,l,a"

function printArray(array){
	return array.join(',');
}