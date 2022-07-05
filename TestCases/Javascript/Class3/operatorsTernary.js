/**
 *  * 5. Termary (?:)
 * This is used in situation where 1 of 2 values is assigned to a varibale depending on results of conditions 
 * 
 * Syntax:
 * varName = condition(s) ? value-whichWillAssignedIfConditionsResultsAreTrue : whichWillAssignedIfConditionsResultsAreFalse 
 * 
 * conditions can be 2 or more but 
 * values can only be 2
 * 
 *  
 * 
 * 
 * */ 

// if credit score is > 700, rate will be 4.5 else 5.5
let userCreditScore = 770;
let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5;

console.log(`\nCredit score -> ${userCreditScore}`);
console.log(`Mortgage rate -> ${mortgageRate}`);

let userCreditScore2 = 700;
let mortgageRate2 = userCreditScore2 > 700 ? 4.5 : 5.5;
console.log(`\nCredit score -> ${userCreditScore2}`);
console.log(`Mortgage rate -> ${mortgageRate2}`);

// if credit score > 700 and first time home buyer, rate will be 4.5 else 5.5
let isFirstTimeBuyer = true;
let mortgageRate3 = userCreditScore > 700 && isFirstTimeBuyer === true ? 4.5 : 5.5;

console.log(`\nCredit Score -> ${userCreditScore}`);
console.log(`First Time Home Buyer -> ${isFirstTimeBuyer}`);
console.log(`Mortgage Rate -> ${mortgageRate3}`);





