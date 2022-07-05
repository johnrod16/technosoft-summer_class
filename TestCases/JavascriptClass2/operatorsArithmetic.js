/**
 *Arithmetic operators (+, -, /, *, ++, --)
 1. +
 2. -
 3. /
 4. *
 5. ++ -> increment 
 6. -- -> Decrement
 7. % -> Modulus

 for ex you should be able to assign diffenent values to a variable
 you should see the results
 ex: num1 = 10 + num2 = 20 therefore the answer should show 30
 
  7. % -> Modulus --> provides the remainder of any divsion result
  (works as a whole number) finds the remainder of any divsion result
  therefore without going to the decimal point 
  what is the result of 10/2 = 5 (remainder = 0)
  9/2 = 4 (remiander =1) 2 goes into 9 4 times (to get you to 8) and there is 1 more digit left over i.e. remainder


 
 
 */

let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`);
console.log(`${num1} + ${num2} = ${num1+num2}`);




let lVar1=10;
let lVar2=20;
let lVar3=30;
let lVar4=40;

let res1 = lVar1 + lVar2++
console.log(`\nlVar1 = ${lVar1}`);  // using \n acts like enter so 2\n is like 2 enter spaces
console.log(`lVar2 = ${lVar2}`);
console.log(`res1 = ${res1}`);

let res2 = lVar1++ - ++lVar2;
console.log(`\nlVar1 = ${lVar1}`);
console.log(`lVar2 = ${lVar2}`);
console.log(`res2 = ${res2}`);



let teamSize = 7;
teamSize++;
let teamName = 'Warriors';
console.log(`\nOur team name is ${teamName} and our team size is ${teamSize}\n`);






