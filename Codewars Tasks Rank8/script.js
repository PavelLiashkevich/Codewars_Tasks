// 1. Opposite number
// Very simple, given a number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
	return (number *= -1);
}

// 2. Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples:
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
	if (operation == '+') {
		return value1 + value2;
	}
	if (operation == '-') {
		return value1 - value2;
	}
	if (operation == '*') {
		return value1 * value2;
	}
	if (operation == '/') {
		return value1 / value2;
	}
}

// 3. Printing Array elements with Comma delimiters
// Input: Array of elements:
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

function printArray(array) {
	return array.join(',');
}

// 4. Transportation on vacation
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
	let cost = 40;

	if (d >= 7) {
		return cost * d - 50;
	} else if (d >= 3) {
		return cost * d - 20;
	} else return cost * d;
}

// 5. Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
	let mid = Math.floor(s.length / 2);
	if (s.length % 2 == 0) {
		return s[mid - 1] + s[mid];
	} else {
		return s[mid];
	}
}

// 6. Alan Partridge II - Apple Turnover
// Your job is simple, if (x) squared is more than 1000:
// return 'It's hotter than the sun!!',
// else - return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

function apple(x) {
	if (x ** 2 > 1000) {
		return "It's hotter than the sun!!";
	} else return 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

// 7. String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.

// #Examples:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// a)
function repeatStr(n, s) {
	return s.repeat(n);
}
// b)
function repeatStr(n, s) {
	let str = '';
	for (let i = 0; i < n; i++) str += s;
	return str;
}

// 8. Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'

// a)
function solution(str) {
	return str.split('').reverse().join('');
}

// b)
function solution(str) {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

// 9. Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"

function peopleWithAgeDrink(old) {
	if (old < 14) {
		return 'drink toddy';
	} else if (old < 18 && old >= 14) {
		return 'drink coke';
	} else if (old < 21 && old >= 18) {
		return 'drink beer';
	} else if (old >= 21) {
		return 'drink whisky';
	}
}

// 10. Student's Final Grade
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

//This function should return a number (final grade). There are four types of final grades:
//100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//0, in other cases

const finalGrade = (exam, projects) => {
	if (exam > 90 || projects > 10) {
		return 100;
	} else if (exam > 75 && projects >= 5) {
		return 90;
	} else if (exam > 50 && projects >= 2) {
		return 75;
	} else {
		return 0;
	}
};

// 11. Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
	if (n < 0 || m < 0) return 0;
	return n * m;
}
