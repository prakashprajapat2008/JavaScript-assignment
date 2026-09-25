//1. Addition +   ------------------------------------------------------------------------------------------------------------------------?
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



//2. Subtraction -    ---------------------------------------------------------------------------------------------------------------------?
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



//3. Multiplication *  --------------------------------------------------------------------------------------------------------------------?
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



//4. Division /     ----------------------------------------------------------------------------------------------------------------------?
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



//5. Modulus %    -----------------------------------------------------------------------------------------------------------------------?
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



//6. Exponentiation **  --------------------------------------------------------------------------------------------------------------------?
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




// Part B: Assignment Operators  -----------------------------------------------------------------------------------------------------------?
// 1. Simple Assignment =   -----------------------------------------------------------------------------------------------------------------?
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



//2. Add and Assign +=    --------------------------------------------------------------------------------------------------------------------?
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



//3. Subtract and Assign -=    ---------------------------------------------------------------------------------------------------------------?
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



//4. Multiply and Assign *=    ----------------------------------------------------------------------------------------------------------------?
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



//5. Divide and Assign /=   -------------------------------------------------------------------------------------------------------------------?
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



//6. Modulus and Assign %=    --------------------------------------------------------------------------------------------------------------?
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



//7. Exponentiation and Assign **=   -------------------------------------------------------------------------------------------------------?
let side = 10;
side **= 2;
console.log(`Total Area = ${side}`);

let edge = 4;
edge **= 3;
console.log(`Total Voiume = ${edge}`);

let factor = 3;
factor **= 2;
console.log(`Total area growth factor = ${factor}`);




// Part C: Comparison & Relational Operators-------------------------------------------------------------------------------------------?
// 1. Loose Equality ==    ----------------------------------------------------------------------------------------------------------------?
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



//2. Loose Inequality !=    ----------------------------------------------------------------------------------------------------------------?
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



//3. Strict Equality ===     ---------------------------------------------------------------------------------------------------------------?
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



//4. Strict Inequality !==    ------------------------------------------------------------------------------------------------------------?
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



// 5. Greater Than >    --------------------------------------------------------------------------------------------------------------------?
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



//6. Less Than <    -------------------------------------------------------------------------------------------------------------------------?
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



//7. Greater Than or Equal >=  --------------------------------------------------------------------------------------------------------------?
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



//8. Less Than or Equal <=     -----------------------------------------------------------------------------------------------------------?
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

let X = 5;
let Y = "3";
let Result1 = X+ Y;
console.log(Result1)      ;53

let R = "Hello";
let K = "World";
let result2 = R + " " + K;
console.log(result2)        ;"Hello World"

let O = 0;
let I = false;
let result3 = O + I;
console.log(result3)         ;0

let Val1 = 100;
let Val2 = "200";
let Val3 = Val1 + Val2;
console.log(Val3)           ;100200


// 2. Subtraction -  ------------------------------------------------------------------------------------------------------------------------?
let N = "10";
let V = 3;
let result4 = N - V;
console.log(result4)         ;7

let E = "20";
let S = "5";
let result5 = E - S;
console.log(result5)           ;15

let o = "abc";
let u = 1;
let Result6 = o - u;
console.log(Result6)          ;NaN

let W = 10;
let Q = 0;
let result9 = W / Q;
console.log(result9)           ;Infinity

let val4 = 0 / 0;
console.log(val4)              ;NaN


// 3. Multiplication *  ----------------------------------------------------------------------------------------------------------------------?
let l = "5";
let e = 4;
let result8 = l * e;
console.log(result8)            ;20

let d = "10";
let f = "2";
let result7 = d * f;
console.log(result7)             ;20

let h = "hello";
let j = 2;
let reSult = h * j;
console.log(reSult)              ;NaN

let ak = 5;
let pd = "0";
let resUlt = ak * pd;
console.log(resUlt)               ;0


let val5 = 3;
let val6 = "4";
let val7 = val5 * val6;
console.log(val7)                  ;12


// 4. Division /    ---------------------------------------------------------------------------------------------------------------------------?
let ka = "20";
let dp = 4;
let rEsult = ka / bp;
console.log(rEsult)               ;5

let ZX = "100";
let XZ = "5";
let resultS = ZX / XZ;
console.log(resultS)             ;20

let MN = 10;
let NM = 0;
let resultM = MN / NM;
console.log(resultM)              ;Infinity

let mn = -10;
let nm = 0;
let results = mn / nm;
console.log(results)              ;-Infinity

let val = 0 / 0;
console.log(val)                ;NaN


// 5. Modulus %   -----------------------------------------------------------------------------------------------------------------------------?
let a = 10;
let b = 0;
let resultl = a % b;
console.log(resultl)            ;NaN

let x = 0;
let y = 5;
let resultes = x % y;
console.log(resultes)             ;0

let p = -10;
let q = 3;
let resulte = p % q;
console.log(resulte)                ;-1

let m = 10;
let n = -3;
let result = m % n;
console.log(result)                ;1

let val1 = -10;
let val2 = -3;
let val3 = val1% val2;
console.log(val3)                  ;-1


// 6. Exponentiation **   --------------------------------------------------------------------------------------------------------------------?
let SIde = -2;
let area = SIde ** 2;
console.log(area)              ;4

let base = 2;
let power = -1;
let resulT = base ** power;
console.log(resulT)                ;0.5

let val9 = 2 ** -2;
console.log(val9)                 ;0.25

let L = 3;
let M = 2;
let z = L ** M;
console.log(z)                  ;9

let T = 10;
let P = 0;
let result1 = T ** P;
console.log(result1)              ;1




// Part B: Assignment Operators    -----------------------------------------------------------------------------------------------------------------------------------?
// 1. Simple Assignment =   -----------------------------------------------------------------------------------------------------------------------------------------?
let g, G, H;
g = G = H = 10;
console.log(g, G, H)               ;10 ,10 ,10

let le = 5;
let Le = x;
x = 10;
console.log(le, Le)                ;10 ,5

let p = 100;
let q = p;
let r = q;
console.log(p, q, r)             ;100 ,100 ,100

let m = "Hello";
let n = m;
m = "World";
console.log(m, n)              ;Word ,Hello

let val1 = 25;
let val2 = val1;
let val3 = val2;
console.log(val1, val2, val3)   ;25 ,25 ,25


// 2. Add and Assign +=  -----------------------------------------------------------------------------------------------------------------------?
let a = "10";
a += 5;
console.log(a)               ;105

let x = 5;
x += "3";
console.log(x)             ;53

let p = 0;
p += false;
console.log(p)               ;0

let m = 10;
m += true;
console.log(m)              ;11

let val = "Hello";
val += "World";
console.log(val)            ;HelloWorld


// 3. Subtract and Assign -=  --------------------------------------------------------------------------------------------------------------?
let a = "20";
a -= 5;
console.log(a)                 ;15

let x = "100";
x -= "50";
console.log(x)                ;50

let p = 10;
p -= "abc";
console.log(p)                ;NaN

let m = 5;
m -= true;
console.log(m)               ;4

let val = 20;
val -= false;
console.log(val)             ;20


// 4. Multiply and Assign *=  ----------------------------------------------------------------------------------------------------------------?
let a = "10";
a *= 2;
console.log(a)             ;20

let x = "5";
x *= "4";
console.log(x)               ;20

let p = "hello";
p *= 2;
console.log(p)             ;NaN

let m = 5;
m *= "0";
console.log(m)             ;0

let val = 3;
val *= "4";
console.log(val)              ;12


// 5. Divide and Assign /=  --------------------------------------------------------------------------------------------------------------------?
let a = "100";
a /= 5;
console.log(a)            ;20

let x = "200";
x /= "4";
console.log(x)             ;50

let p = 10;
p /= 0;
console.log(p)               ;Infinity

let m = -10;
m /= 0;
console.log(m)             ;-Infinity

let val = 0;
val /= 0;
console.log(val)              ;NaN


// 6. Modulus and Assign %=   -------------------------------------------------------------------------------------------------------------------?
let a = 10;
a %= 0;
console.log(a)              ;NaN

let x = 0;
x %= 5;
console.log(x)              ;0

let p = -10;
p %= 3;
console.log(p)                  ;-1

let m = 10;
m %= -3;
console.log(m)                  ;1

let val = -10;
val %= -3;
console.log(val)               ;-1


// 7. Exponentiation and Assign **=   ----------------------------------------------------------------------------------------------------------?
let side = -2;
side **= 2;
console.log(side)               ;4

let base = 2;
base **= -1;
console.log(base)                ;0.5

let val = 2;
val **= -2;
console.log(val)                 ;0.25

let x = 3;
x **= 0;
console.log(x)                 ;1

let a = 10;
a **= 1;
console.log(a)                   ;10





// Part C: Comparison & Relational Operators  -------------------------------------------------------------------------------------------------?
// 1. Loose Equality ==   ----------------------------------------------------------------------------------------------------------------------?
let a = 0;
let b = false;
console.log(a == b)             ;true

let x = "";
let y = false;
console.log(x == y)             ;true

let p = "0";
let q = 0;
console.log(p == q)              ;true

let m = [];
let n = 0;
console.log(m == n)             ;true

let val1 = [];
let val2 = false;
console.log(val1 == val2)         ;true


//2. Loose Inequality !=  -----------------------------------------------------------------------------------------------------------------------?
let a = 0;
let b = false;
console.log(a != b)               ;false

let x = "";
let y = false;
console.log(x != y)                ;false

let p = "0";
let q = 0;
console.log(p != q)                ;false

let m = null;
let n = undefined;
console.log(m != n)                    ;false

let val1 = [];
let val2 = 0;
console.log(val1 != val2)             ;false


// 3. Strict Equality ===  ---------------------------------------------------------------------------------------------------------------------?
let a = 0;
let b = false;
console.log(a === b)                  ;false

let x = "";
let y = false;
console.log(x === y)                  ;false

let p = "0";
let q = 0;
console.log(p === q)                ;false

let m = null;
let n = undefined;
console.log(m === n)               ;false

let val = NaN;
console.log(val === val)               ;false


// 4. Strict Inequality !==  --------------------------------------------------------------------------------------------------------------------?
let a = 0;
let b = false;
console.log(a !== b)                  ;true

let x = "";
let y = false;
console.log(x !== y)                  ;true

let p = "0";
let q = 0;
console.log(p !== q)                ;true

let m = null;
let n = undefined;
console.log(m !== n)                 ;true

let val = NaN;
console.log(val !== val)                 ;true


// 5. Greater Than >  --------------------------------------------------------------------------------------------------------------------------?
let a = 5;
let b = 5;
console.log(a > b)                  ;false

let x = "10";
let y = "2";
console.log(x > y)                  ;false

let p = "5";
let q = 10;
console.log(p > q)                   ;false

let m = null;
let n = 0;
console.log(m > n)                    ;false

let val = undefined;
console.log(val > 0)                 ;false


// 6. Less Than <   -----------------------------------------------------------------------------------------------------------------------------?
let a = 5;
let b = 5;
console.log(a < b)                  ;false

let x = "10";
let y = "2";
console.log(x < y)                 ;false

let p = null;
let q = 1;
console.log(p < q)                 ;false

let m = null;
let n = 0;
console.log(m < n)                ;false

let val = undefined;
console.log(val < 0)               ;false


// 7. Greater Than or Equal >=   ---------------------------------------------------------------------------------------------------------------?
let a = 5;
let b = 5;
console.log(a >= b)                  ;true

let x = null;
let y = 0;
console.log(x >= y)                    ;true

let p = undefined;
let q = 0;
console.log(p >= q)                ;false

let m = "5";
let n = 5;
console.log(m >= n)                 ;true

let val = "10";
let limit = 5;
console.log(val >= limit)            ;true


// 8. Less Than or Equal <=   -------------------------------------------------------------------------------------------------------------------?
let a = 5;
let b = 5;
console.log(a <= b)                  ;true

let x = null;
let y = 0;
console.log(x <= y)                 ;true

let p = undefined;
let q = 0;
console.log(p <= q)                  ;false

let m = "5";
let n = 5;
console.log(m <= n)                    ;true

let val = "3";
let limit = 5;
console.log(val <= limit)             ;true





// Part D: Logical Operators  --------------------------------------------------------------------------------------------------------------------?
// 1. Logical AND &&  ---------------------------------------------------------------------------------------------------------------------------?
let a = 0;
let b = 10;
let Result = a && b;
console.log(Result)                ;0

let xx = 5;
let yy = 10;
let rEsult = (xx > 3 && yy) || 0    
console.log(rEsult)                 ;10

let p = "Hello";
let q = "";
let r = "World";
let reSult = p && q && r;
console.log(reSult)                   ;

let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val)                      ;0,0

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result)                   ;false


//2. Logical OR ||  ---------------------------------------------------------------------------------------------------------------------------?
let A = 0;
let B = false;
let c = "";
let d = null;
let e = 42;
let reSult = A || B || c || d || e;
console.log(reSult)                             ;42

let X = "Hello" || 0;
let y = 0 || "Hi";
console.log(X, y)                    ;Hello ,Hi

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result)                    ;true

let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log(val)                            ;5,5

let x = "" || 0 || false || null || undefined || "OK";
console.log(x)                                                       ;ok


// 3. Logical NOT !   -------------------------------------------------------------------------------------------------------------------------?
let A = 0;
let B = 1;
console.log(!A, !B)              ;true ,false

let X = "Hello";
let Y = "";
console.log(!X, !Y)                  ;false ,true

let val = 5;
let reSult = !val;
console.log(reSult)                ;false

let a = 10;
let b = 20;
let rEsult = !(a && b);
console.log(rEsult)                  ;false

let x = 0;
let y = 1;
let result = !(x || y);
console.log(result)                   ;false


// 4. Mixed Logical Operators (&&, ||, !)  ------------------------------------------------------------------------------------------------------?
let A = 0;
let B = 10;
let C = 20;
let resUlt = A || B && C;
console.log(resUlt)                    ;20

let p = true;
let q = false;
let r = true;
let rEsult = p && q || r;
console.log(rEsult)                     ;true

let x = 10;
let y = 20;
let resuLt = !(x && y) || (x > 5 && y < 30) && true;
console.log(resuLt)                                                  ;true

let a = 5;
let b = 0;
let c = 10;
let resulT = a && b || c;
console.log(resulT)                                ;10

let val1 = false;
let val2 = true;
let val3 = false;
let result = !(val1 || val2) && val3 || true;
console.log(result)                              ;true




