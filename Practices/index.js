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







