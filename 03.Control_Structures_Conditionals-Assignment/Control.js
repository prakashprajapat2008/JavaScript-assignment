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





//C] if...else if...else Statement  ----------------------------------------------------------------------------------------?
// Q=1 ---------------------------------------------------------------?
let month = Number(prompt("Enter a number: "));
if (month==1 || month==2|| month==12){
    console.log("winter")
} else if (month==3 || month==4 || month==5){
    console.log("summer")
} else if (month==6 || month==7 || month==8){
    console.log("Monsoon")
}else{
    console.log("Autumn")
}


// Q=2 ---------------------------------------------------------------------?
let income = Number(prompt("Enter a income: "));
if (income<300000){
    console.log("no text")
}else if (income>=300000 && income<700000){
    console.log("5% text")
}else if (income>=700000 && income<1000000){
    console.log("10% text")
} else{
    conasole.log("15% discount")
}


// Q=3 -----------------------------------------------------------------------?
let score=Number(prompt("enter student score:-"))
if (score>=90){
    console.log("outstanding")
} else if (score>=70 && score<=89){
    console.log("good")
} else if (score>=40 && score<=69){
    console.log("Average")
} else {
    console.log("Need inprovment")
}


// Q=4 ----------------------------------------------------------------?
let speed=Number(prompt("enter the speed:-"))
if (speed<40){
    console.log("slow")
} else if (speed>=40 && speed<=80){
    console.log("Normal")
} else{
    console.log("Fast")
}


// Q=5 -----------------------------------------------------------------?
let personHeight=Number(prompt("enter your height:-"))
if (personHeight<150){
    console.log("Short")
} else if (personHeight>=150 &&personHeight<=170){
    console.log("Average")
} else{
    console.log("Tall")
}


// Q=6 ---------------------------------------------------------------?
let day=Number(prompt("enter the day:-"))
if (day>=1 && day <=5){
    console.log("weekday")
} else {
    console.log("Weekend")
}


// Q=7 ----------------------------------------------------------------?
let units = Number(prompt("Enter electricity units:"));
let bill;
if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}
console.log("Total Electricity Bill: ₹" + bill);


// Q=8 --------------------------------------------------------------------?
let attendance = Number(prompt("Enter attendance percentage:"));
if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}


// Q=9 ----------------------------------------------------------------------?
let mark1 = Number(prompt("Enter first subject mark:"));
let mark2 = Number(prompt("Enter second subject mark:"));
let mark3 = Number(prompt("Enter third subject mark:"));
if (mark1 >= mark2 && mark1 >= mark3) {
    console.log("Highest Mark: " + mark1);
} else if (mark2 >= mark1 && mark2 >= mark3) {
    console.log("Highest Mark: " + mark2);
} else {
    console.log("Highest Mark: " + mark3);
}


// Q=10 -------------------------------------------------------------------?
let number = Number(prompt("Enter a number:"));
if (number === 0) {
    console.log("Zero");
} else if (number > 0 && number % 2 === 0) {
    console.log("Positive Even");
} else if (number > 0 && number % 2 !== 0) {
    console.log("Positive Odd");
} else if (number < 0 && number % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}





//D. Nested if Statement  -------------------------------------------------------------------------------------------------?
// Q=1 ---------------------------------------------------------------------------?
let num1=Number(prompt("enter an number:-"))
if (num1>10){
    if(num1%3==0){
        console.log("numner is greater tha 10 and divisible by 3")
    }
}


// Q=2 ---------------------------------------------------------------------------?
let age=Number(prompt("enter the age:-"))
let voterId=true
if (age>=18){
    if (voterId==true){
        console.log("can vote")
    }

}


// Q=3 -------------------------------------------------------------------?
let scoreMarkas=Number(prompt("enter score:-"))
if (scoreMarkas>=40){
    if (scoreMarkas>=80){
        console.log("Passed with distinction")
    }
}


// Q=4 ----------------------------------------------------------------?
let pin=Number(prompt("enter your pin"))
let accountBalance=1213111;
if (pin==1213){
    if (accountBalance>0){
        console.log("can withdrawl")
    }
}


// Q=5 ---------------------------------------------------------------?
let year=Number(prompt("enter year:-"))
if (year%4==0){
    if (year%100==0){
        console.log("leap year")
    }
}


// Q=6 -----------------------------------------------------------------?















// Q=7 -------------------------------------------------------------------------?
let cartTotal = Number(prompt("Enter cart total:"));
let isPremium = prompt("Are you a premium member? (yes/no)");
if (cartTotal >= 1000) {
    if (isPremium === "yes") {
        cartTotal = cartTotal - (cartTotal * 20 / 100);
    } else {
        cartTotal = cartTotal - (cartTotal * 10 / 100);
    }
}
console.log("Final Amount: ₹" + cartTotal);


// Q=8 ---------------------------------------------------------------------?
let number = Number(prompt("Enter a number:"));
if (number > 0) {
    if (number % 2 === 0) {
        if (number % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        }
    }
}


// Q=9 ---------------------------------------------------------------------------?
let age = Number(prompt("Enter your age:"));
let hasDegree = prompt("Do you have a graduation degree? (yes/no)");
let experience = Number(prompt("Enter your years of experience:"));

if (age >= 21 && age <= 30) {
    if (hasDegree === "yes") {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        }
    }
}


// Q=10 -----------------------------------------------------------------------------?
let present = prompt("Is the student present? (yes/no)");
let internalMarks = Number(prompt("Enter internal marks:"));
let externalMarks = Number(prompt("Enter external marks:"));

if (present === "yes") {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }
    }
}






// switch Statement – 10 Questions -------------------------------------------------------------------------------------?
// Q=1 --------------------------------------------------------------------?
let month = 7;
switch (month) {
	case 1:
		console.log(31);
		break;
	case 2:
		console.log(28);
		break;
	case 3:
		console.log(31);
		break;
	case 4:
		console.log(30);
		break;
	case 5:
		console.log(31);
		break;
	case 6:
		console.log(30);
		break;
	case 7:
		console.log(31);
		break;
	case 8:
		console.log(31);
		break;
	case 9:
		console.log(30);
		break;
	case 10:
		console.log(31);
		break;
	case 11:
		console.log(30);
		break;
	case 12:
		console.log(31);
		break;
	default:
		console.log("Invalid month number");
}


// Q=2 --------------------------------------------------------------------------?
let characterToCheck = "a";
switch (characterToCheck) {
		case "a":
		console.log("Vowewl");
		break;
	case "e":
		console.log("Vowewl");
		break;
	case "i":
		console.log("Vowewl");
		break;
	case "o":
		console.log("Vowewl");
		break;
	case "u":
		console.log("Vowewl");
		break;
    case "A":
		console.log("Vowewl");
		break;
	case "E":
		console.log("Vowewl");
		break;
	case "I":
		console.log("Vowewl");
		break;
	case "O":
		console.log("Vowewl");
		break;
	case "U":
		console.log("Vowewl");
		break;
    default:
		console.log("Consonant")
}


//  Q=3 ------------------------------------------------------------------?
Number = "2";
switch(true){
case Number == 1 || Number == 2:
		console.log("Winter");
		break;
	case Number == 3 || Number == 4:
		console.log(" Summer");
		break;
	default:
        console.log("Other")
}


// Q=4 -----------------------------------------------------------------?
let Marks = "90";
switch (true) {
	case (Marks >= 75):
		console.log("Distinction");
		break;
	case (Marks >= 60):
		console.log("1st class");
		break;
	case (Marks >= 50):
		console.log("2nd class");
		break;
	case (Marks >= 35):
		console.log("3nd class");
		break;
	default:
		console.log("Fail");
}


// Q=5 ------------------------------------------------------------------------?
let role = "admin";
let action = "create";
switch (role) {
	case "admin":
		switch (action) {
			case "create":
				console.log("create");
				break;
			case "edit":
				console.log("edit");
				break;
			case "delete":
				console.log("delete");
				break;
		}
		break;
	case "user":
		console.log("Limited Access");
		break;
	default:
		console.log("Invalid role");
}


// Q=6 -------------------------------------------------------------------?
let fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
}

// Q=7 -------------------------------------------------------------------------?
let x = null;
switch(typeof(x)){
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("string");
        break;
    case "boolean":
        console.log("Boolean");
        break;
    case "undefined":
        console.log("Undefined");
        break;
    case "object":
        console.log("null");
        break;
    default:
        console.log("Invalid datatype!")
}


// Q=8 --------------------------------------------------------------------------?
let operator = "/";
let a = 20;
let b = 0;
switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    switch (b){
    case 0:
        console.log(0);
        break;
      default:
        console.log(a/b)
    }
    break;
  case "%":
    console.log(a % b);
    break;
  case "**":
    console.log(a ** b);
    break;
  default:
    console.log("Invalid operator");
}


// Q=9 -----------------------------------------------------------?
let data = 20;
switch (true) {
	case data >= 1 && data <= 10:
		console.log("Beginning of the month");
		break;
	case data >= 11 && data <= 20:
		console.log("Middle of the month");
		break;
	case data >= 21 && data <= 31:
		console.log("End of the month");
		break;
	default:
		console.log("Invalid day of the month");
}


// Q=10 ----------------------------------------------------------------------?
let Category = "veg";
let Item = "pav";
let Size = "half";
let foodPrice;
switch (Category) {
    case "veg":
        switch (Item) {
            case "Pasta":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "paneer":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "pav":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
        }
        break;
    case "nonveg":

        switch (Item) {

            case "item1":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "item2":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "item3":
                switch (Size) {
                    case "full":
                        foodPrice = 999;
                        break;

                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
        }
        break;
}
console.log(`Food Category => ${Category}`);
console.log(`Food Item => ${Item}`);
console.log(`Food Plate => ${Size}`);
console.log(`Food Price => ${foodPrice}`);









