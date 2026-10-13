// Assignment: JS Functions ----------------------------------------------------------------------------------------------------------?
// Q=1 -----------------------------------------------------------------------------------?
// Four Advantages of Functions:
// 1. Code Reusability =>  A function can be used multiple times without rewriting the same code.
// 2. Code Readability => Functions make code easier to read and understand.
// 3. Code Organization => Functions divide a large program into smaller, manageable parts.
// 4. Easy Debugging => Functions make it easier to find and fix errors in a program.


// Q=2 -----------------------------------------------------------------------------------?
function Student(name) {
    return "Hello " + name + ", welcome to CodingGita";
}
console.log(Student("Prakash"));
console.log(Student("Dev"));


// Q=3 -----------------------------------------------------------------------------------?
greet();
function greet() {
    console.log("Hello, Prakash");
}


// Q=4 -----------------------------------------------------------------------------------?
const calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
};
console.log(calculateAverage(80, 90, 70));


// Q=5 -----------------------------------------------------------------------------------?
function multiply(x, y) {
    return x * y;
}
console.log(multiply(12, 5));


// Q=6 -----------------------------------------------------------------------------------?
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(24));
console.log(isEven(17));


// Q=7 -----------------------------------------------------------------------------------?
function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}
console.log(findPercentage(456, 500));


// Q=8 -----------------------------------------------------------------------------------?
function showMessage() {
    console.log("Hello, Prakash");
}
let result = showMessage();
console.log(result);


// Q=9 -----------------------------------------------------------------------------------?
const calculateSimpleInterest = function(principal, rate, time) {
    return (principal * rate * time) / 100;
};
console.log(calculateSimpleInterest(10000, 5, 2));


// Q=10 -----------------------------------------------------------------------------------?
function studentResult(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}
console.log(studentResult("Prakash", 92));
console.log(studentResult("Dev", 85));