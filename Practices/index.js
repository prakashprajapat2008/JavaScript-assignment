// let a = 10;
// let b = 20;
// console.log(a+b);

// let baseRent = 7000;
// let maintainanceCharges = 2000;
// console.log(baseRent + maintainanceCharges,"Rs");

// let x = 23;
// let y = 43;
// console.log(x*y,"ans");

// x = 23;
// y = 43;
// console.log(x-y,"ans");

// x = 23;
// y = 43;
// console.log(x%y,"ans");

// x = 23;
// y = 43;
// console.log(x/y,"ans");

// x = 23;
// y = 43;
// console.log(x**y,"ans");

// let caloriesperserving = 200;
// let numberserving = 45;
// console.log(caloriesperserving*numberserving,"ans");

// let dailystudent = 20;
// let ailystudent= 100;
// console.log(dailystudent/ailystudent,"ans");

// let login = 5;
// console.log(`the login limet= ${login} mints last`)

// let score = 25;
// score +=10;
// console.log(`the bonus Point player scoure= ${score}`)

// let steps = 200;
// steps += 100;
// console.log(`the total steps for  is= ${steps}`)

// let price = 200;
// let cp = 100;
// price -= cp;
// console.log(`the total price of cp = ${price}`)

// let reduce = 100;
// reduce -= 50;
// console.log(`the Reduce remaining EMI count after paying one monthly installment = ${reduce}`)

// let totalinternetdata = 500;
// let totalfamilymembers = 6;
// totalinternetdata /= totalfamilymembers;
// console.log()

// let totalprofit = 1000;
// let totalpartner = 10;
// totalprofit /= totalpartner;
// console.log(`total share in money = ${totalprofit }`)


// let prompt = require("prompt-sync")();
// let i =  prompt("Enter your Shifg:");
//     if(i==0){
//         console.log("morning shift")
//     }else if(i==1){
//         console.log("afternoon shift")
//     }else if(i==2){
//         console.log("nigth shift")
//     }else{
//         console.log("No shift")
//     }


// console.log(7 == 7)
// console.log(7 == 8)
// console.log(null == false)
// console.log(null == undefined)
// console.log("" == false)
// console.log(7 == 70)
// console.log(0 == false)
// console.log(7 == "7")
// console.log(7 == "07")
// console.log(0 == {})
// console.log({} == null)
// console.log(7 != 7)
// console.log(7 === "7")
// console.log(7 !== "7")

// // true = 1
// let num1 = Number(true);
// console.log(num1)

// // false = 0
// let num2 = Number(false);
// console.log(num2)

// // null = 0
// let num3 = Number(null);
// console.log(num3)

// // undefind = NaN
// let num4 = Number(undefined);
// console.log(num4)

// // Empty Array = 0
// let num5 = Number([]);
// console.log(num5)

// // Empty object = NaN
// let num6 = Number({});
// console.log(num6)

// let enteredPIN = 112603;
// let storedPIN = 112603;
// console.log(`This is PIN = ${enteredPIN===storedPIN}`)

// let savedtheme = "dark";
// let currenttheme = "light";
// console.log(`The Theme is Same = ${savedtheme==currenttheme}`)

// let savedlanguagecode = "Python";
// let currentlanguagecode = "js";
// console.log(`The Fanil Result = ${savedlanguagecode != currentlanguagecode }`)

// let userAge = 18;
// let usernotequalAge = 20;
// console.log(`The Age is Not Equal to = ${userAge != usernotequalAge}`)

// let scannedproductID = "pra1230";
// let storedproductID =  "123abc";
// let verifyproductID = (scannedproductID === storedproductID) ;
// console.log(verifyproductID)

// let selectedpayment = "case"
// let savedpayment = "online"
// let Verifypayment = (selectedpayment  === savedpayment) ;
// console.log(`The Payment is = ${Verifypayment}`)

// let savedcountrycode = "+91";
// let selectedcountrycode = "+89"
// let isDifferent = (savedcountrycode !== selectedcountrycode);
// console.log(`The Country Code is = ${isDifferent}`)

// let roomTemperature = 28;
// let ACTemperature = 25;
// let isACTemperature = (roomTemperature >ACTemperature);
// console.log(isACTemperature)

// let StudentAttendance = 85;
// let StudentMinimumAttendance = 80;
// let isAttendance = (StudentAttendance > StudentMinimumAttendance);
// console.log(`The Student Attendance Percentage = ${isAttendance}`)

// let isEmailVerified = true;
// let isPhoneVerified = false;
// let Result = (isEmailVerified && isPhoneVerified );
// console.log(`The Verigied is = ${Result}`)

// console.log(null && 7);
// console.log(7 && undefined);
// console.log(0 && 5);             // 0 (first falsy)
// console.log(10 && 20);           // 20 (last truthy)
// console.log("a" && "b");         // "b"
// console.log("" && "b");          // "" (first falsy)
// console.log(false && "x");       // false
// console.log("x" && false);       // false


// console.log(0 || 5);             // 5 (first truthy)
// console.log("" || "hello");      // "hello"
// console.log(false || 0);         // 0 (all falsy, returns last)
// console.log(null || undefined || "ok"); // "ok"
// console.log(false || null || 0 || "yes"); // "yes"

// let isnewuser = true;
// let ifuserpurchased = false;
// let isspecialofferbanner = ( isnewuser || ifuserpurchased );
// console.log(`The answer is = ${isspecialofferbanner}`)


// console.log(!0);                 // true (0 → false → !false = true)
// console.log(!1);                 // false (1 → true → !true = false)
// console.log(!"");                // true ("" → false)
// console.log(!"text");            // false ("text" → true)
// console.log(![]);                // false (arrays are truthy)
// console.log(!{});                // false (objects are truthy)
// console.log(!null);              // true (null → false)
// console.log(!undefined);         // true (undefined → false)
// console.log(!NaN);               // true (NaN → false)
// console.log(!false);             // true
// console.log(!true);              // false

// let islogin = true;
// let signup = !islogin;
// console.log(signup)



// let marks = 50;
// if(marks >= 35){
//     console.log("Pass")
// }


// let number = 5
// if(number >= 0){
//     console.log(`The Number is => ${"+ve"}`)
// }

// let number = 2;
// if (number % 2 === 0) {
//   console.log("The Number is =>","Even");
// } 
  
// let number = 3;
// if (number % 2 === 1) {
//   console.log("The Number is =>","Odd");
// } 

// let Temperature = 40;
// if (Temperature >=30){
//     console.log(Temperature )
// }

// let age = 18;
// if(age>=18){
//     console.log("Eligible to vote");
// }



// let number = 7;
// if (number % 2 === 0) {
//   console.log("The Number is =>","Even");
// } else {
//   console.log("The Number is =>","Odd");
// }

// let score = 28;
// if (score >= 35) {
//   console.log("Passed");
// } else {
//   console.log("Failed");
// }

// let score = 28;
// if (score >= 0) {
//   console.log("The Number is =>","+ve");
// } else {
//   console.log("The Number is =>","-ve");
// }


// let year = 2016;
// if (year % 4 == 0) {
//   console.log("The Year is =>","Leap Year");
// } else {
//   console.log("The Year is =>","Not Leap Year");
// }

// let ch = 'a';
// if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//   console.log(`The vowel is => ${ch} `);
// } else {
//   console.log(`The Consonant is => ${ch}`);
// }



// if(C1){

// }else if(C2){

// }else{

// };


// let marks = 78;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Grade F");
// // }

// let N = 20;
// if(N>0){
//     console.log("+ve");
// }else if(N==0){
//     console.log("Zero");
// }else{
//     console.log("-ve");
// };


// let hour = 14;
// if (hour < 12) {
//   console.log("Good Morning");
// } else if (hour < 17) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }


// let age = 60;
// if (age <= 12) {
// 	console.log("Ticket price: ₹100");
// } else if (age <= 59) {
// 	console.log("Ticket price: ₹200");
// } else {
// 	console.log("Ticket price: ₹150");
// }


// let Tem = 10;
// if(Tem < 15){
//     console.log("Cold");
// } else if(Tem <= 25){
//     console.log("Pleasant");
// } else{
//     console.log("Hot");
// }

// let N1 = 10;
// let N2 = 25;
// let N3 = 18;
// if(N1 >= N2 && N1 >= N3){
// 	console.log("Largest number =>", N1);
// } else if (N2 >= N1 && N2 >= N3) {
// 	console.log("Largest number =>", N2);
// } else {
// 	console.log("Largest number =>", N3);
// }


// if (condition1) {
//   if (condition2) {
//     // code
//   }
// }


// let num = 10;
// if (num > 0) {
//   if (num % 2 == 0) {
//     console.log("Positive Even Number");
//   }
// }


// let username = "Prakash";
// let password = "dddppp";
// if (username === "Prakash") {
//   if (password === "dddppp") {
//     console.log("Login Successful");
//   } else {
//     console.log("Wrong Password");
//   }
// }


// let N = 20;
// if(N>0){
//     if(N%5 == 0){
//         console.log(" number is positive and divisible by 5")
//     }
// }


// let Marks = 30;
// if(Marks>=35){
//     console.log("Pass");
//     if(Marks>=90){
//         console.log("excellent")
//     }else{
//         console.log("Fail")
//     }
// }




// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }



// let operator = "+";
// let a = 20;
// let b = 5;
// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Invalid operator");
// }



// let month = 7;
// switch (month) {
// 	case 1:
// 		console.log("January");
// 		break;
// 	case 2:
// 		console.log("February");
// 		break;
// 	case 3:
// 		console.log("March");
// 		break;
// 	case 4:
// 		console.log("April");
// 		break;
// 	case 5:
// 		console.log("May");
// 		break;
// 	case 6:
// 		console.log("June");
// 		break;
// 	case 7:
// 		console.log("July");
// 		break;
// 	case 8:
// 		console.log("August");
// 		break;
// 	case 9:
// 		console.log("September");
// 		break;
// 	case 10:
// 		console.log("October");
// 		break;
// 	case 11:
// 		console.log("November");
// 		break;
// 	case 12:
// 		console.log("December");
// 		break;
// 	default:
// 		console.log("Invalid month number");
// }


// let grade = "B";
// switch (grade) {
// 	case "A":
// 		console.log("Excellent");
// 		break;
// 	case "B":
// 		console.log("Very good");
// 		break;
// 	case "C":
// 		console.log("Good");
// 		break;
// 	case "D":
// 		console.log("Pass");
// 		break;
// 	case "F":
// 		console.log("Fail");
// 		break;
// 	default:
// 		console.log("Invalid grade");
// }


// let Simple = 2;
// switch (Simple) {
// 	case 1:
// 		console.log("Pizza");
// 		break;
// 	case 2:
// 		console.log("Burger");
// 		break;
// 	case 3:
// 		console.log("Pasta");
// 		break;
// 	default:
// 		console.log("Other");
// }


// let num = 7;
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// let number = 0;
// let sign = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// console.log(`${number} is => ${sign}`);



// let marks = 35;
// let pass = marks > 35 ? "Pass" : marks == 35 ? "Just pass" : "Fail";
// console.log(pass);

// let n1 = 10;
// let n2 = 20;
// let maximum = n1 > n2 ? n1 : n2;
// console.log("Maximum number is =>", maximum);

// for (let i = 5; i > 0; i--) {
//     console.log(i)
// }


for (let i = 1; i <= 5; i++) {
    console.log(i)
}
