/**
 * Undefined = a string or number that is undefined 
 * 
 * null = emtpy or nothing
 * to store 'Happy" in myName variable
 */

let myName = null
console.log(myName);
myName = 'Happy';
console.log(myName);

// ex: create a variable (myName) and stroed value null
// now that it is stored as null 


/** DATA TYPES
 * number - all digits are considered as number (with/w.o decimal point)
 * 
 * String - any value enclosed in single or double quotes
 * ex:
 * 'Hello World'
 * or 
 * "Hello World"
 * 
 * But using single quote ' ' is common practice in js development 
 * 
 * Boolean - true or false
 * 
 * Array - can store one or more vales at a time (ex: number or string)
 * it is a list of items ***Must use the [] brackets***
 * ex:
 * let planet1 = 'Earth'
 * let planet2 = 'Mars'
 * let planet3 = 'Mercury'
 * 
 * let planets = ['Earth', 'Mars', 'Mercury']
 * 
 * 
 * Object - holds key-value pair ***Must use {} brackets*** (int the ex below the name/age etc. is the key. the info within that key is the value)
 * let student1 = {
 *          name: 'JR'
 *          age: 32
 *          gender: 'Male'
 *          location: 'NY'
 *          courses: 'Javascript'
 * }
 * 
 * let student2 = {
 *          name: 'Test'
 *          age: 65
 *          gender: 'Female'
 *          location: 'MA'
 *          courses: 'Javascript'
 * }
 */

let planets = ['Earth', 'Mars', 'Mercury'];

console.log(planets);

/**
 * 
1. Create a variable name accountBalance and assign 1000 to that variable
2. Lets assume you spent $1 at the park when you went our for walk
3. Post Decrement a dollar from you accountBalance
4. Construct a string which should display below text

I spent a dollar to buy a water and not my new balance is N

1. Create a variable name age and assign your age to that variable
2. Lets assume today is your birthday 
3. Post Increment your age
4. Construct a string which should display below text

Since today is my birthday, I am N years of old
 * 
 */

let accountBalance = 1000;
accountBalance--;
console.log(`\n\nI spent a dollar to buy a water and now my new balance is ${accountBalance}.\n\n`);

let myAge = '32';
myAge++
console.log(`Since today is my birthday, I am ${myAge} years old.\n\n`);

