// Part I] - For Loop  ---------------------------------------------------------------------------------------------------?
// Q=1 -------------------------------------------------------------------------?
let Count = 0
let arr = [28, 32, 25, 40, 18, 35];
for(let i=0; i<= arr.length-1; i++){
    if(arr[i] >= 30){
        Count = Count + 1
    }
}
console.log("Temperatures 30°C =>", Count)


// Q=2 ------------------------------------------------------------------------?
 let sum=0;
 let number=4729;
 let str=String(number);
 for (let i=0;i<str.length;i++){
     sum+=Number(str[i]);
 }
     console.log(sum)


// Q=3 -------------------------------------------------------------------------?
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 != 0) {
        console.log(i);
    }
}


// Q=4 -------------------------------------------------------------------------?
 let str = "JavaScript";
 let result = "";
 for(let i=0; i<str.length; i++){
     if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"){
         result += str[i];
     }
 }
 console.log(result);


// Q=5 --------------------------------------------------------------------------?
let arr = [10, 25, 8, 40, 15, 30];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } 
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}
console.log("Second Largest =>", secondLargest);


// Q=6 --------------------------------------------------------------------------?
 let number = 28;
 let sum = 0;
 for (let i = 1; i < number; i++) {
     if (number % i == 0) {
         sum += i;
     }
 }
 if (sum == number) {
     console.log("Perfect Number");
 } else {
     console.log("Not a Perfect Number");
 }

// Q=7 ---------------------------------------------------------------------------?
for (let i = 1; i <= 8; i++) {
    console.log(num);
    num = num * 2;
}


// Q=8 ---------------------------------------------------------------------------?
let a = 0;
let b = 1;
for (let i = 1; i <= 20; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


// Q=9 -----------------------------------------------------------------------------?
 let scores = [45, 78, 90, 32, 56, 88];
 let total = 0;
 for (let i = 0; i < scores.length; i++) {
     total = total + scores[i];
 }
 let average = total / scores.length;
 let count = 0;
 for (let i = 0; i < scores.length; i++) {
     if (scores[i] > average) {
         count++;
     }
 }
 console.log("Average =", average);
 console.log("Above  =", count);


// Q=10 -----------------------------------------------------------------------------?
let number = 11;
let binary = "";
for ( ;number > 0; number = Math.floor(number / 2)) {
    let remainder = number % 2;
    binary = remainder + binary;
}
console.log("Binary =>", binary);





// Part I-a] break inside a for Loop ---------------------------------------------------------------------------------------?
// Q=1 --------------------------------------------------------------------------------?
 let arr = [1,5,3,4,2,6,7,9,8];
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] == 7) {
         console.log(i);
         break;
     }
 }


// Q=2 ------------------------------------------------------------------------------?
 let password = "1234";
 let correctPassword = "1235";
 let granted = false;
 for (let i = 1; i <= 5; i++) {
     if (password == correctPassword) {
         console.log("Access granted");
         granted = true;
         break;
     }
 }
 if (granted == false) {
     console.log("Account locked");
 }


// Q=3 -------------------------------------------------------------------------?
 let sum=1
 for(let i=1;i<=100;i++){
    sum+=i;
    if (sum>100){
     console.log("The Last Number => ", i);
     break;
    }
 }


// Q=4 ------------------------------------------------------------------------?
 let arr=["sunita","prakash","dev","prajapat","Arvind","ram","shyam"]
 for (let i=0;i<arr.length;i++){
     if (arr[i][0]=="s"){
          console.log("The Name =>", arr[i])
         break;
     }
   
 }


// Q=5 ------------------------------------------------------------------------?
for (let i = 1; i <= 50; i++) {
    if (i>=20 && Number.isInteger(Math.sqrt(i))){
        console.log("Perfect square =>", i);
        break;
    }

    console.log(i);
}





// Part I-b] continue inside a for Loop ----------------------------------------------------------------------------------------?
// Q=1 -----------------------------------------------------------------------?
for(let i=1;i<=30;i++){
    if(i%4==0){
        continue;
    }
    console.log(i)
}


// Q=2 -----------------------------------------------------------------------?
let arr=[2,1,-1,5,-8];
let sum=0;
for (let i=0;i<arr.length;i++){
    if(arr[i]<0){
        continue;
    }
    sum+=arr[i];
}
console.log("The Total =>", sum);


// Q=3 ---------------------------------------------------------------------?
let str = "Hello World";
for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        continue;
    }
    console.log(str[i]);
}


// Q=4 -------------------------------------------------------------------?
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;
    if (product % 5 == 0) {
        continue;
    }
    console.log("6 x " + i + " = " + product);
}


// Q=5 -----------------------------------------------------------------?
let age = [12, 18, 25, 15, 30, 17, 22];
for (let i = 0; i < age.length; i++) {
    if (age[i] < 18) {
        continue;
    }
    console.log(age[i]);
}






// Part I-c] Reverse For Loop ---------------------------------------------------------------------------------------------?
// Q=1 ---------------------------------------------------------------------?
for (let i = 50; i >= 1; i--) {
    if (i % 3 == 0 && i % 9 != 0) {
        console.log(i);
    }
}


// Q=2 --------------------------------------------------------------------------?
let arr = [12, 45, 7, 23, 56, 89, 34];
let largest = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 50 && arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("The Largest Number =>", largest);


// Q=3 -------------------------------------------------------------------------?
let num = 4729;
let product = 1;
for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;
    if (digit % 2 != 0) {
        product *= digit;
    }
}
console.log("The Number =>", product);


// Q=4 --------------------------------------------------------------------------?
let str = "Programming";
let bag = "";
for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];
    if (
        ch != "a" && ch != "e" && ch != "i" && ch != "o" && ch != "u"
    ) {
        bag += ch;
    }
}
console.log("The String =>", bag);


Q=5 --------------------------------------------------------------------------?





Q=6 -----------------------------------------------------------------------------?












// Q=7 ---------------------------------------------------------------------------?
let tem = [32, 28, 41, 19, 35, 27, 38];
let count = 0;
for (let i = tem.length - 1; i >= 0; i--) {
    if (tem[i] < 30) {
        count++;
    }
}
console.log("The Total Cold Day =>", count);


// Q=8 ------------------------------------------------------------------------------?
let decimal = 11;
let binary = "";
for (let n = decimal; n > 0; n = Math.floor(n / 2)) {
    binary += n % 2;
}
console.log(binary);


// Q=9 -------------------------------------------------------------------------------?
let scores = [90, 85, 70, 95, 60, 88, 75];
for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i] > 80) {
        console.log("The Score =>", scores[i]);
        console.log("The Index =>", i);
        break;
    }
}


// Q=10 --------------------------------------------------------------------?
for (let i = 40; i >= 1; i--) {
    let square = Math.sqrt(i);
    if (square == Math.floor(square)) {
        continue;
    }
    console.log(i);
}





// Part I-d] Nested For Loop Questions ---------------------------------------?









