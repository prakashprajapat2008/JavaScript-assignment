//Assignment 1: Variable Declaration Practice
var Name = "Prakash";
let Age = 20;
const pi = 3.14159;
console.log("Name:", Name);
console.log("Age:", age);
console.log("pi:", pi);


//Assignment 2: Changing and Not Changing Values
let score = 0;
score += 10;
console.log("After add 10:", score);
score += 5;
console.log("After add 5:", score);
score -= 3;
console.log("After subtract 3:", score);
const maxScore = 100;
console.log("Max Score:", maxScore);


//Assignment 3: Primitive Data Types
let myNumber = 20;
let myDecimal = 1.14;
let myText = "Dev";
let isReady = true;
let notReady = false;
let nothing;
let emptyValue = null;
let myBigInt = 123456789012345678901234567890n;
console.log("myNumber:", myNumber, "Type:", typeof myNumber);
console.log("myDecimal:", myDecimal, "Type:", typeof myDecimal);
console.log("myText:", myText, "Type:", typeof myText);
console.log("isReady:", isReady, "Type:", typeof isReady);
console.log("notReady:", notReady, "Type:", typeof notReady);
console.log("nothing:", nothing, "Type:", typeof nothing);
console.log("emptyValue:", emptyValue, "Type:", typeof emptyValue);
console.log("myBigInt:", myBigInt, "Type:", typeof myBigInt);


//Assignment 4: Understanding undefined vs null
let x;
let y = null;
console.log("x =", x);
console.log("y =", y);
console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);
console.log("x == y:", x == y);
console.log("x === y:", x === y);


//Assignment 5: Objects, Arrays, and Functions
// Part A - Object
let student = {
    name: "Prakash",
    age: 17,
    isEnrolled: true
};
console.log("Whole Student:", student);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
// Part B - Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);
console.log("Mixed Array:", mixed);
// Part C - Function
function greet(name) {
    return "Hello, " + name + "!";
}
let message1 = greet("Prakash");
let message2 = greet("Rahul");
console.log(message1);
console.log(message2);


//Assignment 6: Using typeof Operator
let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() { return 5; };
console.log("a =", a, "Type:", typeof a);
console.log("b =", b, "Type:", typeof b);
console.log("c =", c, "Type:", typeof c);
console.log("d =", d, "Type:", typeof d);
console.log("e =", e, "Type:", typeof e);
console.log("f =", f, "Type:", typeof f);
console.log("g =", g, "Type:", typeof g);
console.log("h =", h, "Type:", typeof h);


//Assignment 7: Variable Naming Rules
let firstName = "Prakash";
let _private = "Secret";
let $element = "Button";
let user123 = "Student";
console.log(firstName);
console.log(_private);
console.log($element);
console.log(user123);


//Assignment 8: Declaration and Assignment Practice
let message;
console.log("Before assignment:", message);
message = "Hello, World!";
console.log("After assignment:", message);
let name = "Alice";
let age = 25;
let isStudent = true;
const MAX_USERS = 100;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Max Users:", MAX_USERS);


//Assignment 9: Best Practices Refactoring
let count = 0;
let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;
const PI = 3.14159;
let userName = "John";
let itemCount = 0;
console.log("Count:", count);
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Third Number:", thirdNumber);
console.log("PI:", PI);
console.log("User Name:", userName);
console.log("Item Count:", itemCount);


