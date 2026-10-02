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

let x = 50;
let y = ++x;
console.log(x,y)       ;51,51

  let x = 50;
  let y = x++;
  console.log(x,y)    ;51,50


  let x = 50;
  let y = --x;
  console.log(x,y)     ;49,49

let x = 50;
let y = x--;
console.log(x,y,y,x)        ;49,50,50,49

let Number = 50;
Number++;
console.log(Number)       ;51

let Timer = 10;
Timer--;
console.log(Timer)          ;9


console.log(typeof 123);         // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"

console.log(typeof null);        // "object"

console.log(typeof {});          // "object"
console.log(typeof []);          // "object"

console.log(typeof function(){});// "function"

console.log(typeof NaN);         // "number"
console.log(typeof Infinity);    // "number"



let a = "10";
let b = 5;
console.log(a - b);             // 5  ("10" → 10)
console.log(a * b);              // 50 ("10" → 10)
console.log(a / b);                // 2  ("10" → 10)
console.log("20" - 8);             // 12
console.log("3" * 4);              // 12
console.log("100" / 5);             // 20
console.log("50" - "20");           // 30
console.log("10" + 5);              // "105" (string)



let str = "25";
let num1 = Number(str);           // 25
let num2 = +str;                  // 25 (shorthand)
console.log(num1 + 10);            // 35
console.log(num2 + 10);             // 35

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }

for (let i = 9; i <= 90; i += 9) {
  console.log(i);
}

let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}
console.log("Sum from 1 to 10 is:", total);

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

let product = 1;
for (let i = 1; i <= 10; i++) {
  product *= i;
  
console.log("Multiplication =", product);

}

let bag = ""
for (let i = 1; i <= 10; i++) {
    console.log(i);
    bag +=i+ " ";
}
console.log(bag)


for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

let bag = ""
for (let i = 1; i <= 5; i++) {
     bag +="* "

  }
  console.log(bag)
 


let arr = [1, 2, 3, 4, 5];
for(let i=0; i<= arr.length-1; i++){
    console.log(arr[i]**2)
}


let str = "Prakash Prajapat"
for(let i = 0; i <= str.length-1; i++){
    console.log(str[i])
    str += ""
}
console.log(str)




