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




// Q=11 Function Scope------------------------------------------------------------------------?
function displayAge() {
    let age = 20;
    console.log("displayAge => ", age);
}
displayAge();

try {
    console.log(age);
} catch (error) {
    console.log("function => ", error.message);
}

const course = "JavaScript";
function displayCourse() {
    console.log("Course => ", course);
}
displayCourse();


// Q=12 Combining Multiple Concepts---------------------------------------------------------?
function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    return `${name} scored total ${total} with average ${average}`;
}
console.log(analyzeStudent("Prakash", 85, 90, 88));
console.log(analyzeStudent("Dev", 72, 80, 76));


// Q=13 Nested Functions------------------------------------------------------------------?
function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }
    return `${name} total marks =>  ${total()}`;
}
console.log(studentReport("Prakash", 85, 90, 88));


// // Q=14 Practical - Report Card Generator------------------------------------------------?
function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result = average >= 40 ? "Pass" : "Fail";
    return `Student: ${name}\nTotal marks: ${total}\nAverage: ${average.toFixed(2)}\nResult: ${result}`;
}
console.log(generateReport("Prakash", 80, 75, 90));
console.log(generateReport("Dev", 30, 35, 25));


// Q=15 Practical - Multiple Utility Functions------------------------------------------?
function sumOfThree(a, b, c) {
    return a + b + c;
}
function averageOfTwo(x, y) {
    return (x + y) / 2;
}
function maxOfTwo(a, b) {
    return a > b ? a : b;
}
function fullName(first, last) {
    return `${first} ${last}`;
}
console.log("Sum => ", sumOfThree(10, 20, 30));
console.log("Average => ", averageOfTwo(12, 18));
console.log("Maximum =>", maxOfTwo(25, 19));
console.log("Full name => ", fullName("Prakash", "Prajapat"));


// Q=16 Practical - Grade Calculator--------------------------------------------------------?
let calculateGrade = function calculateGrade(percentage) {
     let result = percentage>=90?"A+":percentage>=80?"A":percentage>=70?"B":percentage>=60?"C":percentage>=40?"D":"F";
    return result
};
console.log(calculateGrade(95))
console.log(calculateGrade(82))
console.log(calculateGrade(67))
console.log(calculateGrade(45))
console.log(calculateGrade(32))


// Q=17 Practical - Shopping Discount-----------------------------------------------------?
function calculateFinalPrice(price, discountPercent) {
    return price - (price * discountPercent / 100);
}
console.log("price => ", calculateFinalPrice(2500, 15));
console.log("price => ", calculateFinalPrice(1200, 10));


// Q=18 Practical - Temperature Converter------------------------------------------------?
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
};
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
};
console.log(celsiusToFahrenheit(30));
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(100));
console.log(fahrenheitToCelsius(212));


// // Q=19 Mixed Advanced Question------------------------------------------------------?
let greet = function() {
    console.log("Hello Prakash");
};
greet() 

function calculateTotal(price, quantity) {
    function getTotal() {
        return price * quantity;
    }
    return getTotal();
}
let result = calculateTotal(50, 3);
console.log("Total Price => ", result);


// Q=20 Challenge Question - Combining Everything-------------------------------------?
function processStudent(name, m1, m2, m3) {
    function calculateMarks() {
        const total = m1 + m2 + m3;
        return { total, average: total / 3 };
    }
    const { total, average } = calculateMarks();
    const result = average >= 40 ? "Pass" : "Fail";
    return `Student => ${name}\nTotal marks => ${total}\nAverage => ${average.toFixed(2)}\nResult => ${result}`;
}
function compareAverages(avg1, avg2) {
    if (avg1 > avg2) return `${avg1} is higher than ${avg2}`;
    if (avg2 > avg1) return `${avg2} is higher than ${avg1}`;
    return `The averages are equal: ${avg1}`;
}
console.log(processStudent("Prakash",95,94,93))
console.log(processStudent("Dev",55,74,63))
console.log(processStudent("Ashok",15,24,33))





