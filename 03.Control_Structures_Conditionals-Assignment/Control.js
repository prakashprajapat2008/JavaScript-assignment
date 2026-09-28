// Assignment : Conditional Statements   ----------------------------------------------------------------------------------?
// A] if Statement  ----------------------------------------------------------------------------------------------------?
// Q=1 Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.
let number1 = 20;
if (number1 % 5 == 0) {
  console.log(`The Divisible => ${5}`);
}

// Q=2 Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.
let age = 70;
if (age >= 60) {
  console.log("Senior Citizen");
}

// Q=3 Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.
let number2 = 150;
if (number2 > 100) {
  console.log("Big Number");
}

// Q=4 Check if the temperature is less than 10. If true, print “Very Cold”.
let temperature = 5;
if (temperature < 10) {
  console.log("Very Cold");
}

// Q=5 Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.
let marks1 = 100;
if (marks1 === 100) {
  console.log("Perfect Score");
}

// Q=6 Check if a number is negative. If it is, print “Negative Number”.
let number3 = -8;
if (number3 < 0) {
  console.log("Negative Number");
}

// Q=7 Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.
let userInput = "";
if (userInput === "") {
  console.log("No input provided");
}

// Q=8 Check if a given year is divisible by 100. If yes, print “Century Year”.
let year = 2000;
if (year % 100 === 0) {
  console.log("Century Year");
}

// Q=9 Write a program to check if a number is both positive and even using a single if condition. If true, print “Positive Even Number”.
let number4 = 12;
if (number4 > 0 && number4 % 2 === 0) {
  console.log("Positive Even Number");
}

// Q=10 Check if the value of a variable marks is greater than or equal to 35 and less than or equal to 100. If true, print “Valid Marks”.
let marks2 = 75;
if (marks2 >= 35 && marks2 <= 100) {
  console.log("Valid Marks");
}






// B] if...else Statement    -----------------------------------------------------------------------------------------------------------------?
// Q=1 Write a program to check whether a number is even or odd.
let evenOddNumber = 7;
if (evenOddNumber % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q=2 Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.
let votingAge = 20;
if (votingAge >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// Q=3 Write a program that checks whether a number is positive or negative.
let positiveNegativeNumber = -5;
if (positiveNegativeNumber >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Q=4 Check if a student has passed or failed based on marks (pass mark = 35).
let studentMarks = 40;
if (studentMarks >= 35) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// Q=5 Write a program to check whether a given character is an uppercase letter or not.
let character = "P";
if (character >= "A" && character <= "Z") {
  console.log("Uppercase letter");
} else {
  console.log("Not an uppercase letter");
}

// Q=6 Check if a number is divisible by 3 or not. Print appropriate messages.
let divisibleNumber = 50;
if (divisibleNumber % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by 3");
}

// Q=7 Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password".
let password = "admin123";
if (password === "admin123") {
  console.log("Login Successful");
} else {
  console.log("Incorrect Password");
}

// Q=8 Check whether a given year is a leap year or not using the basic rule (divisible by 4).
let leapYear = 2024;
if (leapYear % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// Q=9 Write a program to find the greater of two numbers using if...else.
let firstNumber = 4;
let secondNumber = 5;
if (firstNumber > secondNumber) {
  console.log(firstNumber + " is greater");
} else {
  console.log(secondNumber + " is greater or equal");
}

// Q=10 Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).
let numberToCheck = 1;
if (numberToCheck >=0) {
  console.log("Positive");
} else if (numberToCheck < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}









