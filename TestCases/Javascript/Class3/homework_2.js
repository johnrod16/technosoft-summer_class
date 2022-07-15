// Due Date : Tuesday Jul-05

const sentence1 = 'Hello dear, how are you doing?';
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
console.log(`\n${sentence1}`);
//check greater than 10
//if true  then -> result1 = 15
//else
//result1 = 25 (Ternary)
let result1 = sentence1.length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);




const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
// using (1) replace, (2) replace all and (3) ignore cases
let sentence_ReplaceWithAlpha = sentence2.replace(/a/gi, 'Alpha');
console.log(`\n${sentence2}`);
console.log(sentence_ReplaceWithAlpha);




const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence3LowerCase = sentence3.toLowerCase();

 // 1. the length of sentence-3
let sentence3_Length = sentence3LowerCase.length;
console.log(`\nsentence3_Length -> ${sentence3_Length}`);


 // 2. does sentence-3 starts with 'health' (ignore cases)
let sentence3_Beginning = sentence3LowerCase.toLowerCase().startsWith('health');
console.log(`\nsentence3_Beginning -> ${sentence3_Beginning}`);


 // 3. does sentence-3 contains with 'Body' (ignore cases)
let sentence3_BodyIncluded = sentence3LowerCase.toLowerCase().includes('body');
console.log(`\nsentence3_Body -> ${sentence3_BodyIncluded}`);


 // 4. index of 'Body' in sentence3  (ignore cases)
let sentence3_BodyIndex = sentence3LowerCase.toLowerCase().indexOf('body');
console.log(`\nsentence3_BodyIndex -> ${sentence3_BodyIndex}`);


 // 5. the last-character in sentence-3
let sentence3_LastCharacter = sentence3LowerCase.charAt(sentence3LowerCase.length -1);
console.log(`\nsentence3_LastCharacter -> ${sentence3_LastCharacter}`);


 // 6. word 'Body' is present only once. (true or false)

 let lowerCaseSentence3 = sentence3.toLowerCase();
 let sentence3_BodyOnlyOnce = sentence3LowerCase.indexOf('Body') === sentence3LowerCase.lastIndexOf('Body') 
 console.log(`\nsentence3_BodyOnlyOnce -> ${sentence3_BodyOnlyOnce}`);

// other way to write ***BETTER WAY***

let lowerCaseSentence4 = sentence3.toLowerCase();
let indexOf_body = lowerCaseSentence4.indexOf('body');
let lastIndexOf_body = lowerCaseSentence4.lastIndexOf('body');
let result10 = indexOf_body === lastIndexOf_body && indexOf_body >= 0;
console.log(`sentence-3 body is only once -> ${result10}`);



 
