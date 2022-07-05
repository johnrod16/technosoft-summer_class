/**
 *Advance Assignment (+=, -=, *=, /=, %=)
 * 
 */

 let num1 = 5;
 // how would you increment operator to add 5 in num1
 num1++;
 num1++;
 num1++;
 num1++;
 num1++;
console.log(`${num1}`); //this will add 1 five times to num1 but this is not correct way to write

num1 = num1 + 5; // num1+=5
console.log(`num1 -> ${num1}`); // result should be 15 (10+5)

num1-=2; // num1 = num1 - 2
console.log(`num2 -> ${num1}`); // result should be 13 (15-2)

num1*=2; // num1 = num1 * 2
console.log(`num2 -> ${num1}`); // result should be 26 (13*2)

num1/=2; // num1 = num1 / 2 
console.log(`num2 -> ${num1}`); // result should be 13 (26/2)

num1%=2; // num1 = num1 
console.log(`num2 -> ${num1}`); // result should be 1 (13/2=6 with a remainder of 1 left over 22 22 22 22 22 22 %2 )

/**
 * This would be used in the case of banking:
 * 
 * currentBalance = 1000
 * 
 * deposit = 200
 * 
 * currentBalance = currentBalance + Deposit // currentBalance+=deposit
 * 
 * withdrawal = 50 
 * 
 * currentBalance = currentBalance - withdrawl // currentBalance-=withdrawl
 * 
 */

let currentBalance = 1000
 
let deposit = 200
currentBalance = currentBalance+=deposit // currentBalance+=deposit
let withdrawal = 50 
let newCurrentBalance = 1200
newCurrentBalance = newCurrentBalance-=withdrawal // currentBalance-=withdrawl
console.log(`\nCurrent Balance -> ${currentBalance}`);
console.log(`New current balance -> ${newCurrentBalance}`);



