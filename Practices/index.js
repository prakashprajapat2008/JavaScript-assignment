let a = 10;
let b = 20;
console.log(a+b);

let baseRent = 7000;
let maintainanceCharges = 2000;
console.log(baseRent + maintainanceCharges,"Rs");

let x = 23;
let y = 43;
console.log(x*y,"ans");

x = 23;
y = 43;
console.log(x-y,"ans");


x = 23;
y = 43;
console.log(x%y,"ans");

x = 23;
y = 43;
console.log(x/y,"ans");

x = 23;
y = 43;
console.log(x**y,"ans");

let caloriesperserving = 200;
let numberserving = 45;
console.log(caloriesperserving*numberserving,"ans");

let dailystudent = 20;
let ailystudent= 100;
console.log(dailystudent/ailystudent,"ans");

let login = 5;
console.log(`the login limet= ${login} mints last`)

let score = 25;
score +=10;
console.log(`the bonus Point player scoure= ${score}`)

let steps = 200;
steps += 100;
console.log(`the total steps for  is= ${steps}`)

let price = 200;
let cp = 100;
price -= cp;
console.log(`the total price of cp = ${price}`)

let reduce = 100;
reduce -= 50;
console.log(`the Reduce remaining EMI count after paying one monthly installment = ${reduce}`)

let totalinternetdata = 500;
let totalfamilymembers = 6;
totalinternetdata /= totalfamilymembers;
console.log()

let totalprofit = 1000;
let totalpartner = 10;
totalprofit /= totalpartner;
console.log(`total share in money = ${totalprofit }`)


let prompt = require("prompt-sync")();
let i =  prompt("Enter your Shifg:");
    if(i==0){
        console.log("morning shift")
    }else if(i==1){
        console.log("afternoon shift")
    }else if(i==2){
        console.log("nigth shift")
    }else{
        console.log("No shift")
    }


console.log(7 == 7)
console.log(7 == 8)
console.log(null == false)
console.log(null == undefined)
console.log("" == false)
console.log(7 == 70)
console.log(0 == false)
console.log(7 == "7")
console.log(7 == "07")
console.log(0 == {})
console.log({} == null)
console.log(7 != 7)
console.log(7 === "7")
console.log(7 !== "7")

// true = 1
let num1 = Number(true);
console.log(num1)

// false = 0
let num2 = Number(false);
console.log(num2)

// null = 0
let num3 = Number(null);
console.log(num3)

// undefind = NaN
let num4 = Number(undefined);
console.log(num4)

// Empty Array = 0
let num5 = Number([]);
console.log(num5)

// Empty object = NaN
let num6 = Number({});
console.log(num6)

let enteredPIN = 112603;
let storedPIN = 112603;
console.log(`This is PIN = ${enteredPIN===storedPIN}`)

let savedtheme = "dark";
let currenttheme = "light";
console.log(`The Theme is Same = ${savedtheme==currenttheme}`)

let savedlanguagecode = "Python";
let currentlanguagecode = "js";
console.log(`The Fanil Result = ${savedlanguagecode != currentlanguagecode }`)

let userAge = 18;
let usernotequalAge = 20;
console.log(`The Age is Not Equal to = ${userAge != usernotequalAge}`)

let scannedproductID = "pra1230";
let storedproductID =  "123abc";
let verifyproductID = (scannedproductID === storedproductID) ;
console.log(verifyproductID)

let selectedpayment = "case"
let savedpayment = "online"
let Verifypayment = (selectedpayment  === savedpayment) ;
console.log(`The Payment is = ${Verifypayment}`)

let savedcountrycode = "+91";
let selectedcountrycode = "+89"
let isDifferent = (savedcountrycode !== selectedcountrycode);
console.log(`The Country Code is = ${isDifferent}`)

let roomTemperature = 28;
let ACTemperature = 25;
let isACTemperature = (roomTemperature >ACTemperature);
console.log(isACTemperature)

let StudentAttendance = 85;
let StudentMinimumAttendance = 80;
let isAttendance = (StudentAttendance > StudentMinimumAttendance);
console.log(`The Student Attendance Percentage = ${isAttendance}`)

let isEmailVerified = true;
let isPhoneVerified = false;
let Result = (isEmailVerified && isPhoneVerified );
console.log(`The Verigied is = ${Result}`)

console.log(null && 7);
console.log(7 && undefined);
console.log(0 && 5);             // 0 (first falsy)
console.log(10 && 20);           // 20 (last truthy)
console.log("a" && "b");         // "b"
console.log("" && "b");          // "" (first falsy)
console.log(false && "x");       // false
console.log("x" && false);       // false


for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        break;
    }
    console.log(i)
}

for (let i = 1; i<=15; i++){
    if(i%3 == 0){
        continue;
    }
    console.log(i)
}

for (let i = 1; i<=20; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i)
}



function main() {
    function helper() {
        return "Helper function called";
    }

    return helper();
}

for (let i = 1; i <= 25; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        continue;
    }
    console.log(i);
}




for (let i = 5; i >= 1; i--) {
  console.log(i);
}

let arr = [10, 20, 30, 40, 50];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}



for (let i = 80; i >= 8; i--) {
    if(i%8 == 0){
        console.log(i)
    }
}
  
let arr = [10, 20, 30, 40, 50];
let bag = ""
for (let i = arr.length - 1; i >= 0; i--) {
    bag+= arr[i] +" "
}
 console.log(bag);

let text = "CodingGita";
let reversedText = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}
console.log(reversedText);

let Total = 1;
for (let i = 5; i >= 1 ; i--){
    Total = Total*i
}
console.log(Total)


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row = row + "* ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row);
}


let num = 1;
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

let num = 1;
let row = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    row += num + " ";
    num++;
  }
}
console.log(row);



for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    row += (i * j) + " ";
  }
  console.log(row);
}


for(let i = 1; i<=10; i++){
  let row = ""
  for(let j = 1; j<=10; j++){
    row += (i*j)+ " ";
  }
  console.log(row)
}

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * 3 - (j - 1)) + " ";
  }
  console.log(row);
}


 let row = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    row += (i * 3 - (j - 1)) + " ";
  }
}
console.log(row);


for(let i = 1; i<=5; i++){
    let bag = ""
    for(let j = 1; j<=5; j++){
        bag += "* "
    }
    console.log(bag)
}


for(let i = 1; i<=5; i++){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += "* "
    }
    console.log(bag)
}



for(let i = 1; i<=5; i++){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += j + " "
    }
    console.log(bag)
}

let num = 1;
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }
    console.log(row);
}


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == 5) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}


for(let i = 5; i>=1; i--){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += "* "
    }
    console.log(bag)
}

for(let i = 5; i>=1; i--){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += i + " "
    }
    console.log(bag)
}


for(let i = 5; i>=1; i--){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag +=  j+ " "
    }
    console.log(bag)
}



for(let i = 1; i<=5; i++){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += j + " "
    }
    console.log(bag)
}



for(let i = 5; i>=1; i--){
    let bag = ""
    for(let j = 1; j<=i; j++){
        bag += j + " "
    }
    console.log(bag)
}

let num = 1;
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num + j+ "  ";
        num++;
    }
    console.log(row);
}




let matrix = [[10,20,30], [40,50,60], [70,80,90]];
console.log(matrix[2][0])


let matrix = [[10,20,30], [40,50,60], [70,80,90]];
console.log(matrix[2][2])

0,1,1,2,3,5,8,...

let arr=[0,1];
let prev = 1;
let prevToPrev=0
for(let i=2;i<15;i++){
    let fib_num = arr[prev]+arr[prevToPrev];
    arr.push(fib_num);
    prev+=1;
    prevToPrev+=1;
}
console.log(arr)







function reportCard(name, m1, m2) {
    const total = m1 + m2;
    const average = total / 2;
    return { name, total, average };
}

const course = "JavaScript";
function printCourse() {
    console.log(course);
}
printCourse();

function displayAge() {
    const age = 20;
    console.log(age);
}
displayAge();
console.log(age);
while (condition) {
  // code
  // update the condition (very important!)
}


let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

let sum = 0;
let i = 1;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log("Sum is => " + sum);



let i = 1;
while (i <= 4) {
  console.log(i);
  i++;
}

let i = 4;
while (i >= 1) {
  console.log(i);
  i--;
}


let num = 1234;
let reverse = 0;
while (num > 0) {
    let lastdigit = num % 10;
    reverse = reverse * 10 + lastdigit;
    num = Math.floor(num / 10);
}
console.log(reverse);





function functionName(parameter1, parameter2, ...) {
    // code to run
    return result;
}


function greet(name) {
    return "Welcome to CodingGita => " + name;
}
console.log(greet("prakash prajapat"));


let greet = function(name){
    return "Welcome to Nagaur => " + name
};
console.log(greet("Prakash Prajapat"))

function area() {
    a = 10
    b = 5
    return "Ther Total Answer is => " +  a * b
}
console.log(area());


function multiply(a, b) {
    return a * b;
}
console.log(multiply(5,10))


function fullName(first, last) {
    return first + " " + last
}
console.log(fullName("Prakash","Prajapat"))


function Even(num) {
    if(num % 2 == 0){
        return true
    }else{
        return false
    }
};
console.log(Even(2))


function maxOfTwo(a, b) {
    if(a > b){
        return "larger Number => " + a
    }else{
        return "larger Number => " + b
    }
}
console.log(maxOfTwo(2,1))


function isPositive(num) {
    return num > 0;
}
console.log(isPositive(10));
console.log(isPositive(-5));

function calu(x,y,z){
    let avg = (x+y+z)/3;
    return avg.toFixed(2);
}
let S1avg = calu(45, 75, 97);
let S2avg = calu(48, 74, 87);
console.log(S1avg, S2avg)


function sumOfThree(a, b, c) {
    return a + b + c;
}
console.log(sumOfThree(10, 20, 30));


function showMarks() {
    let marks = 90;
    console.log(marks);
}
showMarks();
console.log(marks); // Error: marks is not defined


let batch = "CSE";
function printBatch() {
    console.log(batch);
}
printBatch(); // CSE


function displayAge() {
    const age = 20;
    console.log(age); // 20
}
displayAge();
console.log(age); // ReferenceError: age is not defined

let course = "JavaScript";
function printCourse() {
    console.log(course);
}

printCourse();

let x = 10;
function myFunc(){
    console.log(x)
}
myFunc();
console.log(x);


function processStudent(name, m1, m2, m3) {
        let total = m1 + m2 + m3;
        let avg = (total/3).toFixed(2);
        return { total, average: total / 3 };
}


function checkPass(avg) {
    if(avg>=40){
        return "Pass"
    }else{
        return "Fail"
    }
};
let result = checkPass(82) ;
console.log(result)


function checkPass(avg) { 
  return avg >= 40 ? "Pass" : "Fail";
}
console.log(checkPass(80))


function main() {
    function helper() {
        return "Helper function called";
    }
    return helper();
}
console.log(main());



function calculatedimentions(r){
    function findarea(r){
        let area = 3.14*r*r;
        return area.toFixed(2); 
    };
function findperameter(r){
    let perameter = 2*(22/7)*r;
    return perameter.toFixed(2)
};
let area = findarea(r);
let perameter = findperameter(r);
return `The area is cricle => ${area} & a perameter => ${perameter}`
};
console.log( calculatedimentions(3))





var college = "CodingGita";
function showCollege() {
    console.log(college);
}
showCollege();       // CodingGita
console.log(college); // CodingGita

var name = "Prakash"; 
function studentname() {
    console.log(name); //Prakash
}
studentname(); // 85
console.log(name); // Prakash


function studentname() {
    var name = "Prakash"; 
    console.log(name); //Prakash
}
studentname(); // 85
console.log(name); // Error: marks is not defined


if (true) {
    let name = "Prakash";
    console.log(name); // Prakash
}
console.log(name); // ReferenceError: name is not defined
    
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();

let variable1 = "Hello";

function functionOfVariable() {
    let variable2 = "World";

    console.log(variable1);
    console.log(variable2);
}

functionOfVariable();

console.log(variable1);

function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);

function main(){
    function inner(){
        return "dwev"
    }
    console.log(inner());
    return "Prakash"
}
console.log(main());


function processStudent(name, m1, m2, m3) {
    function calculate() {
        let total = m1 + m2 + m3;
        let average = total / 3;
        return { total, average };
    }

    let { total, average } = calculate();
    let result = m1 >= 33 && m2 >= 33 && m3 >= 33 ? "Pass" : "Fail";

    return (`Student Name => ${name}\n` + `Marks => ${m1}, ${m2}, ${m3}\n` + `Total => ${total}\n` + `Average => ${average.toFixed(2)}\n` + `Result => ${result}\n`);
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) return "First average is higher";
    if (avg2 > avg1) return "Second average is higher";
    return "Both averages are equal";
}

console.log(processStudent("Prakash", 80, 75, 90));
console.log(processStudent("Dev", 60, 70, 65));
console.log(processStudent("Dev P", 30, 80, 75));

console.log(compareAverages(81.67, 65.00));


function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";
    return ` Student Name => ${name}\n Total marks => ${total}\n Average => ${average.toFixed(2)}\n Result => ${result} `;
}
console.log(generateReport("Prakash", 80, 75, 90)); 
console.log(generateReport("Dev", 30, 35, 25));


let school = "Sunrise School";
function showSchool() {
    console.log(school)
};
function updateSchool() {
    school = "Green Valley School"
};
showSchool();
updateSchool();
console.log(school);

let variable1 = "Hello";
function functionOfVariable() {
    let variable2 = "World";
    console.log(variable1);
    console.log(variable2);
}
functionOfVariable();
console.log(variable1);

function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);
 // Output
 // 300
 // Error

var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();

function calculateArea() {
    let length = 8;
    let width = 4;
    let area = length * width;

    console.log(area); 
}
calculateArea();

function calculateArea() {
    let length = 8
    let width = 4
    let area = length * width
    console.log(area)
}



for(var i = 0; i <= 5; i++){
    console.log(i)
}
console.log(i)



for(let i = 0; i <= 5; i++){
    console.log(i)
}
console.log(i)


for(const i = 0; i <= 5; i++){
    console.log(i)
}
console.log(i)


function test() {
    for (var i = 1; i <= 3; i++) {
        console.log(i); // 1 2
    }

    console.log(i); //4
}


test();
console.log(i); // ReferenceError: i is not defined


var a = 10;
console.log(a); //10


console.log(a);
var a = 10;  // undefined


var a 
console.log(a);  // undefined


 console.log(a);
let a = 10; // ReferenceError: Cannot access 'a' before initialization












