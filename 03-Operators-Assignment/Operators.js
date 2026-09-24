//1. Addition +
let collection1=15000;
let collection2=12500;
let totalCollection=collection1+collection2
console.log(`The total collection is ${totalCollection}`)

let readMorning=18;
let readEvening=25;
let totalPage=readEvening+readMorning;
console.log(`the total page read is ${totalPage}`)

let soldMonday=125;
let soldTuesday=178;
let totalItemSold=soldMonday+soldTuesday;
console.log(`the total item sold is ${totalItemSold}`)



//2. Subtraction -
let totalSeat=80;
let occupiedSeat=53;
let emptySeat=totalSeat-occupiedSeat;
console.log(`The total empty seat are availabe is ${emptySeat}`)

let totalMarks=500;
let marksLose=35;
let finalMark=totalMarks-marksLose
console.log(`The final marks is ${finalMark}`)

let totalBox=2500;
let sendBox=875;
let remainingBox=totalBox-sendBox;
console.log(`The remaining box in warehouse are ${remainingBox}`)



//3. Multiplication *
let cost=45;
let notebookQuantity=8;
let totalPrice=cost*notebookQuantity;
console.log(`the total price of 8 notebook is ${totalPrice}`)

let perHour=120;
let hour=6;
let totalBottels=perHour*hour;
console.log(`The total bottel after 6 hour are ${totalBottels}`)

let totalRow=7;
let plant=15;
let totalPlant=totalRow*plant;
console.log(`the total plant in 7 row is ${totalPlant}`)



//4. Division /
let pencils=144;
let totalStudent=12;
let eachStudent=pencils/totalStudent;
console.log(`The number of pencile each student get ${eachStudent}`)

let travelDistance=360;
let timeTaken=6;
let average=travelDistance/timeTaken;
console.log(`The average speed of the train is ${average}`)

let totalMoney=72000;
let depertments=9;
let eachDepertment=totalMoney/depertments;
console.log(`the moiney each depertment get is ${eachDepertment}`)



//5. Modulus %
let totalStudents=53;
let groupOf=5;
let leftStudent=totalStudents%groupOf
console.log(`the remenaning student are ${leftStudent}`)

let totalCandies=128;
let packOf=10;
let leftCandies=totalCandies%packOf;
console.log(`the remaning candies from the pack ${leftCandies}`)

let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}



//6. Exponentiation **
let Side=6;
let volume=Side**3;
console.log(`the volume of cube is ${volume} cm`)

let bacteria=1;
let hours=4;
let bacteriaAfter=bacteria*(2**hours);
console.log(`the bacteria after the 4 hours is ${bacteriaAfter}`)

let oneCell=9;
let sides=4;
let totalCells=oneCell*(sides**2);
console.log(`The total number of cells are ${totalCells}`)




// Part B: Assignment Operators  --------------------------------------------------------------------------------?
// 1. Simple Assignment =
let age = 18;
console.log(`Age = ${age}`)

let penPrice = 15;
console.log(`Total Pen Price = ${penPrice}`)

let daysInWeek = 7;
console.log(`Total Days In Week = ${daysInWeek}`)

let city = "Nagaur";
console.log(`The My City Name is = ${city}`)

let piValue = 3.14159;
console.log(`PI Vaiue = ${piValue}`)



//2. Add and Assign +=
let Marks = 200;
marks += 35;
console.log(`total Marks = ${marks}`)

let balance = 5000;
balance += 1200;
console.log(`Total Balance = ${balance}`)

let Battery = 45;
battery += 30;
console.log(`Total Battery C harge = ${battery}`)

let Score = 1250;
Score += 375;
console.log(`Total Score = ${Score}`)

let books = 840;
books += 160;
console.log(`Total Books = ${books}`)



//3. Subtract and Assign -=
let water = 1000;
water -= 375;
console.log(`Total Water = ${water}`)

let money = 500;
money -= 180;
console.log(`Total Money = ${money}`)

let battery = 90;
battery -= 45;
console.log(`Total Battery = ${battery}`)

let boxes = 2400;
boxes -= 950;
console.log(`Total Boxe = ${boxes}`)

let score1 = 2000;
score1 -= 625;
console.log(`Total Score = ${score1}`)



//4. Multiply and Assign *=
let population = 5000;
population *= 3;
console.log(`Total Population = ${population}`)

let production = 120;
production *= 4;
console.log(`Total Production = ${production}`)

let savings = 2000;
savings *= 2;
console.log(`Total Savings amount = ${savings}`)

let plants = 50;
plants *= 5;
console.log(`Total Plants = ${plants}`)

let score = 150;
score *= 3;
console.log(`Total Score = ${score}`)



//5. Divide and Assign /=
let cloth = 1200;
cloth /= 4;
console.log(`Total Cloth Length = ${cloth}`)

let budget = 80000;
budget /= 8;
console.log(`Total Budget = ${budget}`)

let sugar = 960;
sugar /= 6;
console.log(`Total Sugar = ${sugar}`)

let distance = 450;
distance /= 5;
console.log(`Total Distance = ${distance}`)

let marks = 2500;
marks /= 10;
console.log(`Total Marks = ${marks}`)

//6. Modulus and Assign %= 
let candies = 137;
candies %= 10;
console.log(`Toyal Candies = ${candies}`)

let students = 250;
students %= 7;
console.log(`Total Students = ${students}`)

let days = 1000;
days %= 7;
console.log(`Total Days = ${days}`)

let chairs = 89;
chairs %= 5;
console.log(`Total Chairs = ${chairs}`)

let months = 365;
months %= 12;
console.log(`Total Months = ${months}`)



//7. Exponentiation and Assign **=
let side = 10;
side **= 2;
console.log(`Total Area = ${side}`);

let edge = 4;
edge **= 3;
console.log(`Total Voiume = ${edge}`);

let factor = 3;
factor **= 2;
console.log(`Total area growth factor = ${factor}`);




// Part C: Comparison & Relational Operators---------------------------------------------------------?
// 1. Loose Equality ==
let StoredPassword = 1234;
let EnteredPassword = "1234";
console.log(StoredPassword==EnteredPassword)

let UserAnswer = 0;
let defaultAnswer = false;
console.log(UserAnswer == defaultAnswer)

let userInput = "";
let submittedFlag = false;
console.log(userInput == submittedFlag)

let backendValue = null;
let frontendValue = undefined;
console.log(backendValue == frontendValue)

let deviceOneScore = 500;
let deviceTwoScore = "500";
console.log(deviceOneScore == deviceTwoScore)



//2. Loose Inequality !=
let code1 = "SAVE10";
let code2 = "SAVE20";
console.log(code1 != code2)

let userRole = "admin";
let defaultRole = "guest";
console.log(userRole != defaultRole)

let correctAnswer = 42;
let userAnswer = "40";
console.log(correctAnswer != userAnswer)

let emailInput = "";
let emptyFlag = false;
console.log(emailInput != emptyFlag)

let userId = null;
let validId = 101;
console.log(userId != validId);



//3. Strict Equality ===
let storedPassword = 1234;
let enteredPassword = "1234";
console.log(storedPassword === enteredPassword)

let account1 = 1234567890;
let account2 = 1234567890;
console.log(account1 === account2)

let featureFlag = true;
let requiredState = 1;
console.log(featureFlag === requiredState)

let databaseValue = null;
let cacheValue = undefined;
console.log(databaseValue === cacheValue)

let Score1 = 85;
let Score2 = 85;
console.log(Score1 === Score2)



//4. Strict Inequality !==
let stringId = "101";
let numberId = 101;
console.log(stringId !== numberId)

let booleanStatus = true;
let numericStatus = 1;
console.log(booleanStatus !== numericStatus)

let password = "abc123";
let confirmPassword = "abc124";
console.log(password !== confirmPassword)

let serverData = null;
let localData = undefined;
console.log(serverData !== localData)

let playerId1 = 10;
let playerId2 = 20;
console.log(playerId1 !== playerId2)


// 5. Greater Than >
let Age = 20;
let VotingAge = 18;
console.log(Age > VotingAge)

let cartTotal = 650;
let freeShippingLimit = 500;
console.log(cartTotal > freeShippingLimit)

let playerScore = 1200;
let requiredScore = 1000;
console.log(playerScore > requiredScore)

let monthlyIncome = 40000;
let minimumIncome = 30000;
console.log(monthlyIncome > minimumIncome)

let stepsToday = 11000;
let stepsTarget = 10000;
console.log(stepsToday > stepsTarget)



//6. Less Than < 
let Mrks = 30;
let failThreshold = 35;
console.log(Marks < failThreshold)

let expenses = 8000;
let Budget = 10000;
console.log(expenses < Budget)

let itemsLeft = 7;
let lowStockLimit = 10;
console.log(itemsLeft < lowStockLimit)

let vehicleSpeed = 40;
let minimumSpeed = 50;
console.log(vehicleSpeed < minimumSpeed)

let remainingTime = 4;
let warningLimit = 5;
console.log(remainingTime < warningLimit)



//7. Greater Than or Equal >= 
let AGE = 18;
let votingAge = 18;
console.log( AGE >= votingAge)

let percentage = 75;
let minimumRequired = 75;
console.log(percentage >= minimumRequired)

let userAge = 14;
let minimumAge = 13;
console.log(userAge >= minimumAge)

let currentScore = 500;
let minimumScore = 500;
console.log(currentScore >= minimumScore)

let experience = 3;
let requiredExperience = 2;
console.log(experience >= requiredExperience)



//8. Less Than or Equal <=
let peopleInLift = 7;
let maxCapacity = 8;
console.log(peopleInLift + 1 <= maxCapacity)

let fileSize = 5;
let maxAllowedSize = 5;
console.log(fileSize <= maxAllowedSize)

let participantAge = 12;
let maxJuniorAge = 12;
console.log(participantAge <= maxJuniorAge)

let dataUsed = 9.5;
let dataLimit = 10;
console.log(dataUsed <= dataLimit)

let classStrength = 40;
let maxAllowed = 40;
console.log(classStrength <= maxAllowed)






// Additional Questions (Addition +)-----------------------------------------------------------------------------------------------------------?
// 1. Addition +  -----------------------------------------------------------------------------------------------------------------------------?
let A = "10";
let B = 5;
let Result = A + B;
console.log(Result)     ;105

let x = 5;
let y = "3";
let result = x + y;
console.log(result)      ;53

let p = "Hello";
let q = "World";
let result = p + " " + q;
console.log(result)        ;"Hello World"

let m = 0;
let n = false;
let result = m + n;
console.log(result)         ;0

let val1 = 100;
let val2 = "200";
let val3 = val1 + val2;
console.log(val3)           ;100200


// 2. Subtraction -  ----------------------------------------------------------------------------------------------------------------------------?
let a = "10";
let b = 3;
let result = a - b;
console.log(result)         ;7

let x = "20";
let y = "5";
let result = x - y;
console.log(result)           ;15

let p = "abc";
let q = 1;
let result = p - q;
console.log(result)          ;NaN

let m = 10;
let n = 0;
let result = m / n;
console.log(result)           ;Infinity

let val = 0 / 0;
console.log(val)              ;NaN


// 3. Multiplication *  ----------------------------------------------------------------------------------------------------------------------?
let a = "5";
let b = 4;
let result = a * b;
console.log(result)            ;20

let x = "10";
let y = "2";
let result = x * y;
console.log(result)             ;20

let p = "hello";
let q = 2;
let result = p * q;
console.log(result)              ;NaN

let m = 5;
let n = "0";
let result = m * n;
console.log(result)               ;0


let val1 = 3;
let val2 = "4";
let val3 = val1 * val2;
console.log(val3)                  ;12


// 4. Division /    ---------------------------------------------------------------------------------------------------------------------------?
let a = "20";
let b = 4;
let result = a / b;
console.log(result)               ;5

let x = "100";
let y = "5";
let result = x / y;
console.log(result)             ;20

let p = 10;
let q = 0;
let result = p / q;
console.log(result)              ;Infinity

let m = -10;
let n = 0;
let result = m / n;
console.log(result)              ;-Infinity

let val = 0 / 0;
console.log(val)                ;NaN


// 5. Modulus %   -----------------------------------------------------------------------------------------------------------------------------?
let a = 10;
let b = 0;
let result = a % b;
console.log(result)            ;NaN

let x = 0;
let y = 5;
let result = x % y;
console.log(result)             ;0

let p = -10;
let q = 3;
let result = p % q;
console.log(result)                ;-1

let m = 10;
let n = -3;
let result = m % n;
console.log(result)                ;1

let val1 = -10;
let val2 = -3;
let val3 = val1% val2;
console.log(val3)                  ;-1


// 6. Exponentiation **   --------------------------------------------------------------------------------------------------------------------?
let side = -2;
let area = side ** 2;
console.log(area)              ;4

let base = 2;
let power = -1;
let result = base ** power;
console.log(result)                ;0.5

let val = 2 ** -2;
console.log(val)                 ;0.25

let x = 3;
let y = 2;
let z = x ** y;
console.log(z)                  ;9

let a = 10;
let b = 0;
let result = a ** b;
console.log(result)              ;1


















