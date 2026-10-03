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
let month = 7;
if (month == 12 || month == 1 || month == 2) {
    console.log("Winter")
} else if (month == 3 || month == 4 || month == 5) {
    console.log("Summer")
} else if (month == 6 || month == 7 || month == 8) {
    console.log("Monsoon")
} else if (month == 9 || month == 10 || month == 1) {
    console.log("Autumn")
};


// Q=2 ---------------------------------------------------------------------?
let income = 850000;
if (0 <= income < 300000) {
    taxOnIncome = 0
} else if (income <= 70000) {
    taxOnIncome = income * 5 /100
} else if (income <= 1000000) {
    taxOnIncome = income * 10 / 100
} else {
    taxOnIncome = income * 15 / 100
};
console.log(taxOnIncome);


// Q=3 -----------------------------------------------------------------------?
let marks = 100;
if (100 >= marks >= 90) {
    console.log("Outstanding")
} else if (marks >= 70) {
    console.log("Good")
} else if (marks >= 40) {
    console.log("Average")
} else {
    console.log("Needs Improvement")
};


// Q=4 ----------------------------------------------------------------?
let speed = 1000;
if (speed < 40) {
    console.log("Slow")
} else if (speed <= 80) {
    console.log("Normal")
} else {
    console.log("Fast")
};


// Q=5 -----------------------------------------------------------------?
let height = 140;
if (height < 150) {
    console.log("Short")
} else if (height <= 170) {
    console.log("Average")
} else {
    console.log("Tall")
};


// Q=6 ---------------------------------------------------------------?
let dayNumber = 4;
if (5 >= dayNumber >= 1) {
    console.log("Weekday")
} else {
    console.log("Weekend")
};


// Q=7 ----------------------------------------------------------------?
let units = 1;
let electricityBill = 0;
if (units <= 50) {
    electricityBill = units * 2
} else if (units <= 150) {
    electricityBill = units * 4
} else {
    electricityBill = units * 6
};
console.log(electricityBill);



// Q=8 --------------------------------------------------------------------?
let attendancePercentage = 95;
if (attendancePercentage >= 90) {
    console.log("Excellent")
} else if (attendancePercentage >= 75) {
    console.log("Good")
} else if (attendancePercentage >= 50) {
    console.log("Satisfactory")
} else {
    console.log("Poor")
};



// Q=9 ----------------------------------------------------------------------?
let marks1 = 100;
let marks2 = 90;
let marks3 = 95;
if (marks1 > marks2 && marks1 > marks3) {
    console.log("First marks is highest.")
} else if (marks2 > marks1 && marks2 > marks3) {
    console.log("Second marks is highest.")
} else {
    console.log("Third marks is highest.")
}


// Q=10 -------------------------------------------------------------------?
let number = 13;
if (number > 0) {
    if (number % 2 == 0) {
        console.log("Positive Even")
    } else {
        console.log("Positive Odd")
    }
} else if (number < 0) {
    if (number % 2 == 0) {
        console.log("Negative Even")
    } else {
        console.log("Negative Odd")
    }
} else {
    console.log("Zero")
}






//D. Nested if Statement  -------------------------------------------------------------------------------------------------?
// Q=1 ---------------------------------------------------------------------------?
let number = 87;
if (number > 10) {
    if (number % 3 == 0) {
        console.log("The number is greater than 10 and divisible by 3")
    } else {
        console.log("The number is greater than 10")
    }
} else {
    console.log("The number is not greater than 10")
}


// Q=2 ---------------------------------------------------------------------------?
let age = 20;
let voterId = true;
if (age >= 18) {
    if (voterId) {
        console.log("Can Vote")
    }
}


// Q=3 -------------------------------------------------------------------?
let marks = 90;
if (marks >= 40) {
    if (marks >= 80) {
        console.log("Passed with Distinction")
    }
};


// Q=4 ----------------------------------------------------------------?
let pin = 1234;
let hasSufficientBalance = false;
let userPin = 1234
if (pin == userPin) {
    if (hasSufficientBalance) {
        console.log("PIN is correct and balance is sufficient")
    }
}


// Q=5 ---------------------------------------------------------------?
let year = 2026;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year!")
        }
    }
};


// Q=6 -----------------------------------------------------------------?
let email = "prakash.prajapat.cg@gmail.com"
if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if ( email.length > 10) {
            console.log("Valid Email")
        }
    }
};



// Q=7 -------------------------------------------------------------------------?
let cartTotal = 1200;
let isPremiumMember = true;
if (cartTotal >= 1000) {
    if (isPremiumMember) {
        let finalAmount = cartTotal * 20 / 100
    } else {
        let finalAmount = cartTotal * 10 / 100
    }
};
console.log(finalAmount);


// Q=8 ---------------------------------------------------------------------?
let number = 44;
if (number > 0) {
    if (number % 2 == 0) {
        if (number % 4 == 0) {
            console.log("Positive Even and Divisible by 4")
        }
    }
};


// Q=9 ---------------------------------------------------------------------------?
let age = 16;
let hasGraduationDegree = true;
let experience = 3;
if (21 <= age <= 30) {
    if (hasGraduationDegree) {
        if (experience >= 2) {
            console.log("Eligible for Interview")
        }
    }
};


// Q=10 -----------------------------------------------------------------------------?
let isStudentPresent = true;
let internalMarks = 90;
let externalMarks = 90;
if (isStudentPresent) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam")
        }
    }
};






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
let Item = "pasta";
let Size = "half";
let foodPrice;
switch (Category) {
    case "veg":
        switch (Item) {
            case "Pasta":
                switch (Size) {
                    case "full":
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
                        break;
                }
                break;
            case "paneer":
                switch (Size) {
                    case "full":
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
                        break;
                }
                break;
            case "pasta":
                switch (Size) {
                    case "full":
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
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
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
                        break;
                }
                break;
            case "item2":
                switch (Size) {
                    case "full":
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
                        break;
                }
                break;
            case "item3":
                switch (Size) {
                    case "full":
                        foodPrice = 899;
                        break;

                    case "half":
                        foodPrice = 499;
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






// F] Ternary Operator Questions ---------------------------------------------------------------------------------------------?
// Q=1 ------------------------------------------------------------------------------------?
let number = 49;
console.log(number % 7 == 0 ? "Divisible by 7" : "Not Divisible by 7");


// Q=2 ------------------------------------------------------------------------------------?
let temperature = 35;
console.log(temperature >= 30 ? "Hot Day" : "Pleasant Day");


// Q=3 --------------------------------------------------------------------------------?
let string = ""
console.log(string == "" ? "Empty String" : "String has content");


// Q=4 --------------------------------------------------------------------------------?
let age = 17;
console.log(age < 13 ? "Child" : age <= 19 ? "Teenager" : "Adult");


// Q=5 ---------------------------------------------------------------------------------?
let a = 280;
let b = 8957;
let c = 489;
console.log(a > b && a > c ? "1st number is greatest" : b > a && b > c ? "2st number is greatest." : "3st number is greatest.");


// Q=6 -------------------------------------------------------------------------------?
let marks = 95;
console.log(marks >= 75 ? "Distinction" : marks >= 60 ? "First Class" : marks >= 50 ? "Second Class" : marks >= 35 ? "Pass" : "Fail");


// Q=7 -----------------------------------------------------------------------------------?
let number = -5;
console.log(number % 2 == 0 ? number >= 0 ? number > 0 ? "Positive Even" : "Zero" : "Negative Even" : number%2 == 1 ? "Positive Odd" : "Negative Odd");


// Q=8 -------------------------------------------------------------------------------?
let year = 2025;
console.log(year % 4 == 0 ? year % 100 != 0 || year % 400 == 0 ? "Leap Year" : "Not a Leap Year" : "Not a Leap Year");


// Q=9 ------------------------------------------------------------------------------?
let role = "admin";
let action = "delete";
console.log(role == "admin" ? action == "delete" ? "Admin Delete" : action == "edit" ? "Admin Edit" : "Admin Other" : role == "user" ? action == "View" ? "User View" : "User Restricted" : "Invalid Role");


// Q=10 --------------------------------------------------------------------------------?
let cartTotal = 1000;
let discountPercentage;
console.log(cartTotal >= 5000 ? discountPercentage = 20 : cartTotal >= 2000 ? discountPercentage = 10 : cartTotal >= 1000 ? discountPercentage = 5 : discountPercentage = 0);
let finalPayableAmount = cartTotal - (cartTotal * discountPercentage /100);
console.log(`The Final payable amount after adding a discount of ${discountPercentage}% is Rs. ${finalPayableAmount}`);



