/**
 *  * 5. Termary (?:)
 * This is used in situation where 1 of 2 values is assigned to a varibale depending on results of conditions 
 * 
 * Syntax:
 * varName = condition(s) ? value-whichWillAssignedIfConditionsResultsAreTrue : whichWillAssignedIfConditionsResultsAreFalse 
 * 
 * Values can be 2 or more but 
 * Conditions can only be 2
 * 
 *  
 * 
 * 
 * */ 
let userCreditScore = 770;
let mortgageRate = userCreditScore > 700 ? 4.5 : 5.5;

console.log(`\nCredit score -> ${userCreditScore}`);
console.log(`Mortgage rate -> ${mortgageRate}`);








