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


// Q=2 --------------------------------------------------------------------------?
let number = 4729
let sum = 0
for(let remaining = number; remaining > 0; remaining = Math.floor(remaining / 10)){
	sum = sum + (remaining % 10)
}
console.log("Sum of digits =>", sum)


















