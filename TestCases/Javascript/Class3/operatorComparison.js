/** 3. Comparison operators (===, =<, =>, <, >, !==)
 * 
 * All comparison will result in a boolean value (true or false)
 * 
 * /** */

 let num1 = 10
 let num2 = 20

 let num1GrEqNum2 = num1 >= num2; // GrEq = greater than or equal to ">="
console.log(`${num1} >= ${num2} = ${num1GrEqNum2}`); // 

let num1LeEqNum2 = num1 <= num2; // LeEq = less than or equal to "<="
console.log(`${num1} <= ${num2} = ${num1LeEqNum2}`); // 


let num1GrNum2 = num1 > num2; // Gr = greater than ">"
console.log(`${num1} > ${num2} = ${num1GrNum2}`); // 


let num1LeNum2 = num1 < num2; // Le = less than "<"
console.log(`${num1} < ${num2} = ${num1LeNum2}`); // 

/**
 * === : to compare if two values are equal (in value and same datatype)
 * 
 * for example if you use a datatype of a number verse a string
 * 
 * == : to compare if two values are equal (in value ONLY)
 */

let num1EqNum2 = num1 === num2;
console.log(`\n${num1} === ${num2} = ${num1EqNum2}`);


/**
 * "!" not operator 
 * so if the above "==" and "===" are equal to than:
 * * !== : to compare if two values are NOT equal (in value and same datatype)
 * 
 * for example if you use a datatype of a number verse a string
 * != : to compare if two values are NOT equal (in value ONLY)
 * 
 */

let num3 = 30;
let num4 = 40;

let num3NtEqNum4 = num3 !== num4;
console.log(`\n${num3} !== ${num4} = ${num3NtEqNum4}`);

num3 = '40';
num3NtEqNum4 = num3 !== num4;
console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`);

num3NtEqNum4 = num3 != num4;
console.log(`${num3} != ${num4} = ${num3NtEqNum4}`);
