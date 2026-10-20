
# JavaScript Assignment: Scope and Hoisting

---

## Section 1: What Is Scope? (5 Questions)

### Q1.
Consider the following code:

```js
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
```
Answer the following:
- Which variable is declared in the global scope?
- Which variable is declared inside the function?
- Can both variables be accessed inside `"display()"`?

Output:

```js
City
Country
Yes

```


### Q2.
Predict the output:

```js
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
```

Output:

```js
550
500

```


### Q3.
Identify the scope of each variable:

```js
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}

```

Classify `"college"`, `"name"`, `"age"`, and `"subject"` as global or function-scoped variables.

Output:

```js
"college" => global scope
"name" => local scope
"age" => local scope
"subject" => local scope

```


### Q4.
What will happen when you execute this code? Explain why.

```js
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();
```

Output:

```js
Error

ReferenceError: number is not defined

```


### Q5.
Write a JavaScript program that:
- Declares one variable in the global scope.
- Declares another variable inside a function.
- Prints both variables inside the function.
- Prints the global variable outside the function.


Output:

```js
let variable1 = "Hello";

function functionOfVariable() {
    let variable2 = "World";

    console.log(variable1);
    console.log(variable2);
}

functionOfVariable();

console.log(variable1);

=>
Hello   
World
Hello

```


---

## Section 2: Global Scope (5 Questions)

### Q6.
Predict the output:

```js
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
```

Output:

```js
I like Cricket
Cricket

```


### Q7.
What will be the output?

```js
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
```

Explain why the output changes.

Output:

```js
English
Gujarati
Gujarati

```


### Q8.
Find the error, if any:

```js
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
```

Will this code produce an error? Explain your answer.

Output:

```js
75
here will be no error
```


### Q9.
Predict the output:

```js
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);
```

Which statement causes an error, and why?

Output:

```js
ReferenceError: message is not defined

statement `console.log(message)` cause an error as `message` is a local scope and we can't call it outside of the fuction.

```


### Q10.
Write a program that declares a global variable named `"school"` with the value `"Sunrise School"`.

Create two functions:
- `"showSchool()"` should print the school name.
- `"updateSchool()"` should change the global variable to `"Green Valley School"`.

Call both functions in an appropriate order and print the final value of `"school"`.

Output:

```js
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

=>
Sunrise School
Green Valley School

```


---

## Section 3: Function Scope (5 Questions)

### Q11.
Predict the output:

```js
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first);
```

Explain the behavior of the last statement.

Output:

```js
300
ReferenceError: first is not defined

Right code =>
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
    console.log(first);
}
calculateTotal();

=>
300
100

```


### Q12.
Find and explain the error:

```js
function employee() {
    var salary = 30000;
}
employee();
console.log(salary);
```

Output:

```js
ReferenceError: salary is not defined

Right Code =>
function employee() {
    var salary = 30000;
    console.log(salary);
}
employee();

=>
30000
```


### Q13.
What will be the output?

```js
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
```

Why doesn't the value printed inside the function change the global variable?

Output:

```js
25
15

Both number variables are different variables. Therefore, changing the value of the local variable does not change the value of the global variable.

दोनों `number` अलग-अलग variables हैं। इसलिए local variable की value बदलने से global variable की value नहीं बदलती।   ka english

```


### Q14.
Consider this code:

```js
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();
```

Answer the following:
- What is the output?
- Is a new local variable created each time the function is called?
- Does the local variable remain accessible after the function finishes executing?

Output:

```js
50
50

Yes, a new local variable is created each time the function is called.
हाँ, हर बार function call होने पर result का नया local variable बनता है।

No, the local variable is not accessible outside the function.
नहीं, फ़ंक्शन का काम पूरा होने के बाद result को फ़ंक्शन के बाहर इस्तेमाल नहीं कर सकते, क्योंकि यह एक लोकल वेरिएबल है।

```


### Q15.
Write a function named `"calculateArea()"` that:
- Declares a local variable `"length"` with the value `8`.
- Declares a local variable `"width"` with the value `4`.
- Calculates and prints the area of a rectangle.
- Does not make either variable accessible outside the function.

---

Output:

```js
function calculateArea() {
    let length = 8
    let width = 4
    let area = length * width
    console.log(area)
}

Right Code =>
function calculateArea() {
    let length = 8;
    let width = 4;
    let area = length * width;
    console.log(area);
}
calculateArea();

=>
32
```


## Section 4: No Block Scope with `"var"` (5 Questions)

### Q16.
Predict the output:

```js
if (10 > 5) {
    var result = "Success";
}
console.log(result);
```

Explain why `"result"` is accessible outside the `"if"` block.

Output:

```js
Success

In JavaScript, a variable declared with `var` does not follow block scope. Therefore, `result` can also be accessed outside the `if` block.
JavaScript में `var` से घोषित वेरिएबल Block Scope का पालन नहीं करता। इसलिए `result` को `if` ब्लॉक के बाहर भी एक्सेस किया जा सकता है।

```


### Q17.
What will be printed?

```js
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
```

Why does the output differ from what you might expect if the block had its own scope?

Output:

```js
2

The output would have been different if the variable had been declared using `let`, because `let` follows block scope, whereas `var` follows function scope.
अगर वेरिएबल को `let` से घोषित किया गया होता, तो आउटपुट अलग होता, क्योंकि `let` Block Scope का पालन करता है, जबकि `var` Function Scope का पालन करता है।

```


### Q18.
Predict the output:

```js
var message = "Start";
{
    var message = "End";
}
console.log(message);
```

Does the standalone block create a separate scope for `"var"`?

Output:

```js
End

No, the standalone block does not create a separate scope for var
नहीं, अकेला ब्लॉक (`{ }`) `var` के लिए अलग स्कोप नहीं बनाता है।

```


### Q19.
Find the output and explain the variable's scope:

```js
if (false) {
    var result = 100;
}
console.log(result);
```

Does the condition being `"false"` prevent the `"var"` declaration from being hoisted?

Output:

```js
undefined

No, the false condition does not prevent var from being hoisted. var is function-scoped, not block-scoped.
नहीं, `false` होने से `var` की Hoisting नहीं रुकती। `var` function-scoped होता है, block-scoped नहीं। 

```


### Q20.
Rewrite the following code so that the variable `"secret"` cannot be accessed outside the `"if"` block. Use a variable declaration that supports block scope.

```js
if (true) {
    var secret = "Hidden";
}
console.log(secret);
```

Explain why your solution works.

Output:

```js
if (true) {
    let secret = "Hidden";
}
console.log(secret);

ReferenceError: secret is not defined

Explanation => The `let` keyword supports block scope. Therefore, the variable `secret` can only be accessed inside the `if` block and cannot be accessed outside it.
व्याख्या => `let` कीवर्ड Block Scope को सपोर्ट करता है। इसलिए, वेरिएबल `secret` को केवल `if` ब्लॉक के अंदर ही एक्सेस किया जा सकता है और ब्लॉक के बाहर एक्सेस नहीं किया जा सकता।

```


---

## Section 5: Block Scope with Loops (5 Questions)

### Q21.
Predict the complete output:

```js
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
```

Explain why `"number"` can be accessed after the loop.

Output:

```js
2
4
6
Final: 8

Because var is function-scoped, not block-scoped. Therefore, number can also be accessed outside the for loop.
क्योंकि var function-scoped होता है, block-scoped नहीं। इसलिए for लूप के बाहर भी number को एक्सेस किया जा सकता है।

```


### Q22.
What will be printed?

```js
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
```

Explain what happens to the original value of `"count"`.

Output:

```js
1
2
3
Count: 4

The original value 10 is overwritten by 1 because var does not create a separate block-scoped variable. Both declarations refer to the same variable.
count की मूल वैल्यू 10 को 1 से बदल दिया जाता है, क्योंकि var एक अलग Block Scope वाला वेरिएबल नहीं बनाता है। दोनों डिक्लेरेशन एक ही वेरिएबल को दर्शाते हैं।

```


### Q23.
Predict the output:

```js
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
```

Is `"i"` accessible after the loop? Why?

Output:

```js
5
4
3
After loop: 2

Yes, i is accessible after the loop because var is function-scoped, not block-scoped. Therefore, it can be accessed outside the while loop.
हाँ, लूप के बाद भी i को एक्सेस किया जा सकता है, क्योंकि var function-scoped होता है, block-scoped नहीं। इसलिए इसे while लूप के बाहर भी एक्सेस किया जा सकता है।

```


### Q24.
Find the error, if any:

```js
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
```

Does the final statement cause an error? What value does `"item"` contain?

Output:

```js
Item: 1
Item: 2
Item: 3
Last item: 4

No error will occur because var is function-scoped, not block-scoped. Therefore, item can also be accessed outside the for loop.
नहीं, कोई एरर नहीं आएगा, क्योंकि var function-scoped होता है, block-scoped नहीं। इसलिए item को for लूप के बाहर भी एक्सेस किया जा सकता है।

```


### Q25.
Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

```js
for (var step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);
```

Explain the difference between your solution and the original code.

Output:

```js
1
2
3
4
ReferenceError: step is not defined

The let keyword supports block scope. Therefore, the variable step is accessible only inside the for loop and cannot be accessed outside it.
let कीवर्ड Block Scope को सपोर्ट करता है। इसलिए, वेरिएबल step केवल for लूप के अंदर ही एक्सेस किया जा सकता है और लूप के बाहर एक्सेस नहीं किया जा सकता।

```


---

## Section 6: Function Scope Inside Loops (5 Questions)

### Q26.
Predict the output:

```js
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
```

Explain why `"number"` is accessible after the loop but not outside the function.

Output:

```js
10
20
30
Final: 4

The variable number is accessible after the loop because var is function-scoped, not block-scoped. However, it cannot be accessed outside the calculate() function because its scope is limited to that function.
number को लूप के बाद एक्सेस किया जा सकता है, क्योंकि var Function Scope को सपोर्ट करता है, Block Scope को नहीं। लेकिन इसे calculate() फ़ंक्शन के बाहर एक्सेस नहीं किया जा सकता, क्योंकि इसका स्कोप उसी फ़ंक्शन तक सीमित है।

```


### Q27.
Identify which statements cause errors:

```js
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);
```

Explain your answer for each occurrence of `"marks"`.

Output:

```js
60
70
80
90
ReferenceError: marks is not defined

var is scoped to the entire function, but it cannot be accessed outside the function.
var का स्कोप पूरे फ़ंक्शन तक होता है, लेकिन फ़ंक्शन के बाहर नहीं।

```


### Q28.
Predict the output:

```js
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();
```

How many times does the loop execute?

Output:

```js
5
6
7
Final value: 8

The loop executes 3 times, for the values 5, 6, and 7.
लूप 3 बार execute होता है: 5, 6, और 7 के लिए।

```


### Q29.
Find and explain the error:

```js
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();
```

Why does the order of these statements matter?

Output:

```js
ReferenceError: i is not defined

The error is because of the statement `console.log(i)` because i is a local scope and it can't be called outside the function.
यह एरर console.log(i) स्टेटमेंट के कारण आता है, क्योंकि i एक Local Scope वाला वेरिएबल है और इसे फ़ंक्शन के बाहर एक्सेस नहीं किया जा सकता।

```


### Q30.
Write a function named `"printNumbers()"` that:
- Uses a `"for"` loop to print numbers from 1 to 5.
- Declares the loop variable using `"var"`.
- Prints the loop variable again after the loop, inside the function.
- Demonstrates that the loop variable cannot be accessed outside the function.

Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

Output:

```js
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log("Final:", i);
}

printNumbers();
console.log(i);

=>
1
2
3
4
5
Final: 6
ReferenceError: number is not defined

You should call printNumbers() first so that the function's output is displayed before the error occurs.
printNumbers() को पहले कॉल करना चाहिए, ताकि फ़ंक्शन का आउटपुट एरर आने से पहले दिखाई दे।

```


---

## Section 7: Hoisting with `"var"` (5 Questions)

### Q31.
Predict the output:

```js
console.log(score);
var score = 90;
console.log(score);
```

Explain why the first statement does not produce a `"ReferenceError"`.

Output:

```js
undefined
90

Due to hoisting, the var declaration is moved to the top of its scope, but the value 90 is assigned later. Therefore, undefined is printed first, and 90 is printed second.
var की declaration hoisting के कारण ऊपर चली जाती है, लेकिन उसकी value 90 बाद में assign होती है। इसलिए पहली बार undefined और दूसरी बार 90 प्रिंट होता है।

```


### Q32.
What will be the output?

```js
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
```

Why doesn't the first `"console.log()"` print the global value of `"a"`?

Output:

```js
undefined
20

The first console.log() dosen't print the global value of a because a new local scope variable is defined in the function.
पहला console.log() ग्लोबल वेरिएबल a की वैल्यू प्रिंट नहीं करता, क्योंकि फ़ंक्शन के अंदर एक नया लोकल स्कोप वाला वेरिएबल a डिक्लेयर किया गया है।

```


### Q33.
Identify which statements produce `"undefined"` and explain why:

```js
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
```

Output:

```js
undefined
undefined
100
200

The first and statement `console.log(first)` and `console.log(second)` produce undefined as they are written above the variable declaration and the `var` make thm hoisted.
पहले और दूसरे स्टेटमेंट console.log(first) और console.log(second) undefined प्रिंट करते हैं, क्योंकि वे वेरिएबल की declaration से पहले लिखे गए हैं और var उन्हें hoisting के कारण स्कोप के ऊपर उपलब्ध करा देता है।

```


### Q34.
Predict the output:

```js
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
```

Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

Output:

```js
undefined
50

function calculate() {
    var total;
    console.log(total);
    total = 50;
    console.log(total);
}
calculate();

```


### Q35.
Find and explain the issue:

```js
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
```

Answer the following:
- What does the first `"console.log()"` inside the function print?
- What does the final `"console.log()"` print?
- How does hoisting affect the local variable `"price"`?

Output:

```js
undefined
100

The first console.log(price) inside the function prints undefined.
फ़ंक्शन के अंदर पहला console.log(price) → undefined प्रिंट करता है।

The final console.log(price) outside the function prints 100.
फ़ंक्शन के बाहर आखिरी console.log(price) → 100 प्रिंट करता है।

Due to hoisting, the declaration of the local variable price is moved to the top of the function. Therefore, the local variable is used instead of the global variable price = 100 inside the function. Later, the local variable's value becomes 500.
Hoisting के कारण लोकल var price की declaration फ़ंक्शन के ऊपर चली जाती है। इसलिए फ़ंक्शन के अंदर ग्लोबल price = 100 के बजाय लोकल वेरिएबल इस्तेमाल होता है। बाद में लोकल वेरिएबल की वैल्यू 500 हो जाती है।

```


---


## Section 8: Function Declaration Hoisting (5 Questions)

### Q36.
Predict the output:
```js
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
```
Explain why this works even though the function is called before it is written.


Output:

```js
Hello from CodingGita

Because of hoisting, JavaScript allows a function declaration to be called before it is written in the code.
Hoisting के कारण JavaScript में किसी फ़ंक्शन को कोड में लिखने से पहले भी कॉल किया जा सकता है।

```


### Q37.
What will be the output? Explain the difference from a normal `var` variable.
```js
display();
function display() {
    console.log("Function is hoisted completely");
}
```

Output:

```js
Function is hoisted completely

console.log(number);
var number = 10;

undefined

If we had declared normal var variable instead of the function, then the output would have been `undefined`

अगर हमने फ़ंक्शन की जगह सामान्य var वेरिएबल डिक्लेयर किया होता, तो आउटपुट undefined होता।

```


### Q38.
Find and explain the issue (if any):
```js
greet();
var greet = function() {
    console.log("Hi");
};
```
Why does this behave differently from a function declaration?

Output:

```js
TypeError: greet is not a function

var में greet को एक वेरिएबल माना जाता है, और greet() को फ़ंक्शन की तरह कॉल करने पर एरर आता है, क्योंकि Function Expression पूरी तरह Hoist नहीं होता।
var dosen't consider greet() as a function and treat it as a variable. greet expression are not fully hoisted.

Function Declaration पूरी तरह Hoist होती है, इसलिए उसे declaration से पहले भी कॉल किया जा सकता है।
function declaration are fully hoisted.
```


### Q39.
Predict the output:
```js
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
```

Output:

```js
function
I am 

```


### Q40.
Write a small program that:
- Calls a function **before** its declaration.
- The function prints a message using a global variable.
- Demonstrates that the entire function (name + body) is available due to hoisting.

Output:

```js
var message = "Hello, JavaScript!";

greet();

function greet() {
    console.log(message);
}

=>
Hello, JavaScript!

```


---

## Section 9: Scope Chain (5 Questions)

### Q41.
Predict the output and explain the lookup process:
```js
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
```

Output:

```js

Answer
```


### Q42.
What will happen when this code runs? Explain using the scope chain.
```js
var globalVar = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();
```


Output:

```js
Answer

```


### Q43.
Identify which variables are accessible inside `deep()` and which are not:
```js
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
```


Output:

```js


```


### Q44.
Predict the output:
```js
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);
```
Explain why the value of `x` changes depending on the location of `console.log`.


Output:

```js


```


### Q45.
Write a nested function structure (at least 3 levels) that prints:
- A variable from the innermost function
- A variable from the middle function
- A variable from the outermost function / global scope  
Demonstrate the scope chain clearly.


Output:

```js


```


---

## Section 10: Variable Shadowing (5 Questions)

### Q46.
Predict the output:
```js
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);
```
Explain what “shadowing” means in this example.


Output:

```js


```


### Q47.
What will be printed?
```js
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);
```
Does the local variable permanently change the global one? Why or why not?


Output:

```js


```


### Q48.
Find the output and explain:
```js
var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);
```
Compare this with the previous questions (where `var` was used inside the function).


Output:

```js


```


### Q49.
Predict the complete output:
```js
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
```


Output:

```js


```


### Q50.
Write a program that demonstrates variable shadowing:
- Declare a global variable `marks = 70`.
- Inside a function, declare another variable `marks = 95`.
- Print both values (inside and outside the function) so the difference is clear.

---

## Section 11: Nested Functions (5 Questions)

### Q51.
Predict the output:
```js
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
```
Can you access `teacher` or `student` outside `outer()`? Explain.


Output:

```js


```


### Q52.
What will this code print? Explain the accessibility of each variable.
```js
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
```


Output:

```js


```


### Q53.
Find the error(s):
```js
function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();
```
Why does the order and placement of the function call matter?


Output:

```js


```


### Q54.
Predict the output:
```js
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
```
Explain how the inner function still has access to `greeting`.


Output:

```js


```


### Q55.
Write a function named `studentInfo()` that:
- Declares a local variable `name`
- Declares a local variable `course`
- Contains an inner function `display()` that prints both variables
- Calls the inner function from the outer function  
(This is the mini-assignment style question from the notes.)


Output:

```js


```


---

## Section 12: Common Errors with `var` (5 Questions)

### Q56.
What is the problem in this code?
```js
function test() {
    x = 100; // missing var
}
test();
console.log(x);
```
Explain the unintended side effect.


Output:

```js


```


### Q57.
Predict the output and explain the misconception:
```js
if (true) {
    var x = 20;
}
console.log(x);
```
Why do beginners often expect an error here?


Output:

```js


```


### Q58.
What happens here?
```js
console.log(a);
var a = 10;
```
Explain why there is no `ReferenceError` and what value is printed.


Output:

```js


```


### Q59.
Find the issue:
```js
var x = 10;
var x = 20;
console.log(x);
```
Is this allowed with `var`? Why can it become confusing?


Output:

```js


```


### Q60.
Rewrite the following code to avoid the common error of accidentally creating a global variable, and also make the variable properly scoped:
```js
function calculate() {
    total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();
console.log(total); // currently works, but should not
```

---

## Submission Instructions

1. Write your answers in a notebook or a JavaScript file.
2. For output-based questions, write the **complete output**.
3. For error-based questions, clearly identify the error and explain its cause.
4. For coding questions, write the **complete working program**.
5. For explanation questions, write a short answer in your own words.
6. Try predicting the output **before** running the code.

---

**Important:** This assignment covers `"var"` and function declaration hoisting. Questions involving `"let"` and `"const"` are included only where needed to compare block scope with `"var"`.

**Tip1:** Try predicting the output before running your code. This will help you understand JavaScript scope and hoisting more effectively.

**Tip2:** Focus on understanding *why* the scope chain works the way it does and how shadowing + hoisting interact. These concepts are the foundation for closures later.

---

# Answer Key

## Section 1: What Is Scope?

### Q1.
- `city` is global; `country` is local to `display()`.
- Both can be accessed inside `display()`: the function can access its local variable and the outer global variable.

### Q2.
```text
550
500
```
`tax` is local to `calculate()`, while `price` is global.

### Q3.
- `college`: global.
- `name` and `age`: function-scoped to `student()`.
- `subject`: function-scoped to `teacher()`.

### Q4.
`second()` throws `ReferenceError: number is not defined` at `console.log(number)`. `number` is local to `first()` and is not visible in `second()`, so execution stops at that error.

### Q5.
```js
var greeting = "Hello";

function displayGreeting() {
    var name = "Prakash";
    console.log(greeting);
    console.log(name);
}

displayGreeting();
console.log(greeting);
```

## Section 2: Global Scope

### Q6.
```text
I like Cricket
Cricket
```

### Q7.
```text
English
Gujarati
Gujarati
```
`changeLanguage()` assigns to the existing global variable because it does not declare a local `language`.

### Q8.
There is no error. When `displayMarks()` runs, the global `marks` has already been initialized to `75`, so the function prints `75`. The function declaration can appear earlier because it is hoisted.

### Q9.
```text
Favorite color: Red
Red
ReferenceError: message is not defined
```
The last statement causes the error because `message` is local to `showColor()`.

### Q10.
```js
var school = "Sunrise School";

function showSchool() {
    console.log(school);
}

function updateSchool() {
    school = "Green Valley School";
}

showSchool();
updateSchool();
showSchool();
console.log(school);
```
Output:
```text
Sunrise School
Green Valley School
Green Valley School
```

## Section 3: Function Scope

### Q11.
```text
300
ReferenceError: first is not defined
```
`first` exists only inside `calculateTotal()`. The final statement throws an error.

### Q12.
`console.log(salary)` throws `ReferenceError: salary is not defined`. `salary` is local to `employee()` and cannot be accessed outside it.

### Q13.
```text
25
15
```
The local `number` shadows the global `number`; assigning or reading the local variable does not change the global one.

### Q14.
Output:
```text
50
50
```
Each call creates a new local `result`, initialized to `40` and then changed to `50`. It is not accessible after that call finishes.

### Q15.
```js
function calculateArea() {
    var length = 8;
    var width = 4;
    console.log(length * width);
}

calculateArea(); // 32
```

## Section 4: No Block Scope with `var`

### Q16.
```text
Success
```
`var` is function-scoped (or global-scoped at top level), not block-scoped, so the `if` block does not contain `result` in a separate scope.

### Q17.
```text
2
```
The `var number` inside the block refers to the same function/global-scoped binding and overwrites its value.

### Q18.
```text
End
```
A standalone block does not create a separate scope for `var`.

### Q19.
The output is `undefined`. The `var result` declaration is hoisted, but the assignment is not; because the condition is false, the assignment never executes.

### Q20.
```js
if (true) {
    let secret = "Hidden";
}
console.log(secret); // ReferenceError: secret is not defined
```
`let` is block-scoped, so `secret` is only available inside the `if` block.

## Section 5: Block Scope with Loops

### Q21.
```text
2
4
6
Final: 8
```
`number` is declared with `var`, so it remains accessible after the loop. It is `8` when the loop condition finally fails.

### Q22.
```text
1
2
3
Count: 4
```
The loop redeclares the same `var count` binding and changes its initial value from `10` to `1`.

### Q23.
```text
5
4
3
After loop: 2
```
Yes. `i` was declared outside the loop and is not block-scoped.

### Q24.
```text
Item: 1
Item: 2
Item: 3
Last item: 4
```
There is no error. The `var item` binding is accessible after the loop, where it contains `4`.

### Q25.
```js
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step); // ReferenceError: step is not defined
```
Unlike `var`, `let` confines `step` to the loop's block.

## Section 6: Function Scope Inside Loops

### Q26.
```text
10
20
30
Final: 4
```
`number` is function-scoped, so it can be used after the loop inside `calculate()`. It is not available outside the function.

### Q27.
The two `console.log(marks)` statements inside `student()` do not cause errors. The loop prints `60`, `70`, and `80`; after it finishes, `marks` is `90`. The final `console.log(marks)` outside the function throws `ReferenceError: marks is not defined`, because `marks` is local to `student()`.

### Q28.
Output:
```text
5
6
7
Final value: 8
```
The loop executes three times.

### Q29.
The first `console.log(i)` throws `ReferenceError: i is not defined`. `i` is local to `calculate()`; the error occurs before `calculate()` is called, so the call is not reached.

### Q30.
```js
function printNumbers() {
    for (var number = 1; number <= 5; number++) {
        console.log(number);
    }
    console.log("Final:", number);
}

printNumbers();
console.log(number); // ReferenceError: number is not defined
```
Inside the function, `number` is `6` after the loop. Although `var` is not block-scoped, it is function-scoped, so it cannot be accessed outside `printNumbers()`.

## Section 7: Hoisting with `var`

### Q31.
```text
undefined
90
```
The declaration `var score` is hoisted to the top of its scope, but its assignment remains at the original line. Before the assignment, its value is `undefined`.

### Q32.
```text
undefined
20
```
The local `var a` declaration is hoisted within `test()`, so it shadows the global `a` throughout the function. Its value is initially `undefined`.

### Q33.
The first two statements print `undefined`; the last two print `100` and `200`:
```text
undefined
undefined
100
200
```
The `var` declarations are hoisted, but their initializations are not.

### Q34.
Output:
```text
undefined
50
```
Hoisted-equivalent form:
```js
function calculate() {
    var total;
    console.log(total);
    total = 50;
    console.log(total);
}

calculate();
```

### Q35.
- First log inside `showPrice()`: `undefined`.
- Final log: `100`.
- The local declaration `var price` is hoisted to the top of `showPrice()` and shadows the global `price`; its assignment to `500` happens only after the first log.

## Section 8: Function Declaration Hoisting

### Q36.
Output:
```text
Hello from CodingGita
```
Function declarations are hoisted with their function body, so the call can occur before the declaration.

### Q37.
Output:
```text
Function is hoisted completely
```
Like Q36, `display` is a function declaration and is available before its position in the source.

### Q38.
This throws `TypeError: greet is not a function`. The `var greet` declaration is hoisted, but its function-expression assignment is not. At the call, `greet` is still `undefined`.

### Q39.
```text
function
I am hoisted
```
The function declaration is available when `typeof myFunc` is evaluated and when it is called.

### Q40.
```js
var name = "Prakash";

sayHello();

function sayHello() {
    console.log("Hello, " + name);
}
```
Output:
```text
Hello, Prakash
```
The function declaration is available before its written position, and it can read the global `name`.

## Section 9: Scope Chain

### Q41.
```text
2025
CSE
CodingGita
```
`batch()` finds `year` locally, `dept` in its enclosing `department()` scope, and `institute` in the global scope.

### Q42.
The first two logs print:
```text
I am global
I am outer
```
Then `console.log(innerVar)` throws `ReferenceError: innerVar is not defined`, because there is no `innerVar` in the current, enclosing, or global scope.

### Q43.
All three variables are accessible in `deep()` through the scope chain. Output:
```text
1 2 3
```
`a` is global; `b` is in `level1()`; `c` is in `level2()`.

### Q44.
Output:
```text
first
global
```
`second()` finds the nearest `x` in the enclosing `first()` function. The final log is outside `first()`, so it reads the global `x`.

### Q45.
```js
var globalMessage = "Global value";

function outer() {
    var outerMessage = "Outer value";

    function middle() {
        var middleMessage = "Middle value";

        function inner() {
            var innerMessage = "Inner value";
            console.log(innerMessage);
            console.log(middleMessage);
            console.log(outerMessage);
            console.log(globalMessage);
        }

        inner();
    }

    middle();
}

outer();
```
Output:
```text
Inner value
Middle value
Outer value
Global value
```

## Section 10: Variable Shadowing

### Q46.
```text
90
50
```
The local `score` shadows the global `score` inside `test()`; the global value remains unchanged.

### Q47.
```text
Local Name
Global Name
```
The local `name` shadows the global variable only inside `show()`; it does not change the global value.

### Q48.
```text
20
20
```
Because there is no local declaration, the function assigns to the existing global `value`. With a local `var value`, the function would instead change a local variable.

### Q49.
```text
Inside: Red
Outside: Blue
```

### Q50.
```js
var marks = 70;

function showMarks() {
    var marks = 95;
    console.log("Inside:", marks);
}

showMarks();
console.log("Outside:", marks);
```
Output:
```text
Inside: 95
Outside: 70
```

## Section 11: Nested Functions

### Q51.
Output:
```text
Jenil
Kartik Sir
```
Neither variable is accessible outside `outer()`. `teacher` is local to `outer()` and `student` is local to `inner()`.

### Q52.
Output:
```text
Parent
Child
Grandchild
```
`grandchild()` can access `a` and `b` from its enclosing functions and its own local `c`.

### Q53.
The first statement, `inner()`, throws `ReferenceError: inner is not defined`: `inner` is local to `outer()`. Since the error is uncaught, execution stops there, so `outer()` is not called. If `outer()` were called first, `inner()` would still need to be called from inside `outer()` to be accessible.

### Q54.
Output:
```text
Hello students
```
`show` closes over the lexical environment where it was created, retaining access to `greeting` after `createMessage()` returns.

### Q55.
```js
function studentInfo() {
    var name = "Prakash";
    var course = "JavaScript";

    function display() {
        console.log("Name:", name);
        console.log("Course:", course);
    }

    display();
}

studentInfo();
```

## Section 12: Common Errors with `var`

### Q56.
In a non-strict script, assigning to undeclared `x` creates/sets a global property, so the final log prints `100`. This is an unintended global side effect that can cause name collisions. In strict mode, the assignment instead throws a `ReferenceError`.

### Q57.
Output:
```text
20
```
`var` is not block-scoped, so `x` remains available after the `if` block. Beginners may incorrectly expect the braces to limit its scope.

### Q58.
It prints `undefined`. `var a` is hoisted, but the assignment to `10` has not run yet.

### Q59.
This is allowed. The second declaration reuses the same `var` binding and assigns `20`, so the output is `20`. Repeated declarations can be confusing because they may unintentionally overwrite an existing variable.

### Q60.
```js
function calculate() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}

calculate();
console.log(total); // ReferenceError: total is not defined
```
Declaring `total` with `var` makes it local to `calculate()`, avoiding accidental creation of a global variable. The final line intentionally demonstrates that it cannot be accessed outside the function.
