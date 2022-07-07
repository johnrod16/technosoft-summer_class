/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
let countryName_String = 'USA USA';
 let countryName = ['USA', 'USA'];
 console.log(`\n${countryName_String.length}`);
 console.log(`\n${countryName.length}`);




 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 // convert the string to an array by spliting each word by the space
 // count the number of string(data) in the array
 
 let sentenceToArray = sentence.split(' ');
 console.log(`\n${sentenceToArray}`);
 sentenceToArray.length
 console.log(`\n${sentenceToArray.length -1}`);

 


 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 let sentence1 = 'have a great day'
 // we need to substring(PULL) the H, A, G, D and make them uppercase
// we need to substring(PULL) all other characters and make lowercase
// we need to concat(MERGE or CONNECT) these 2 string back together 
let firstLetterUppercase = sentence1.substring(0, 1).toUpperCase(); // H
let firstLetterUppercase1 = sentence1.substring(5, 6).toUpperCase(); // A
let firstLetterUppercase2 = sentence1.substring(7, 8).toUpperCase(); // G
let firstLetterUppercase3 = sentence1.substring(13, 14).toUpperCase(); // D

let allOtherLetters = sentence1.substring(1, 4); // ave
let allOtherLetters2 = sentence1.substring(8, 12); // reat
let allOtherLetters3 = sentence1.substring(14); // ay
//merge all substrings
let refinedWord = firstLetterUppercase.concat(allOtherLetters); 
let refinedWord2 = firstLetterUppercase2.concat(allOtherLetters2);
let refinedWord3 = firstLetterUppercase3.concat(allOtherLetters3);

console.log(`\n\nOriginal sentence was "${sentence1}" and now is "${refinedWord} ${firstLetterUppercase1} ${refinedWord2} ${refinedWord3}."\n\n`);


/**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu ONlY lIVe  ONcE' ->  'YOLO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */

/**
 1. bring everything to Uppercase with .toUpperCase
 2. then remove the first letter of each word with .substring
 3. ****then put all first letters together with .concat***** Is there a simple way to concat 
 instead of running the varibales next to each other like on lines 89, 99, 109
 3.2 just run the .substrings together??? 
 */

const stmt1 = 'have a great day';            //->  'HAGD'
const stmt2 = 'YOu ONlY lIVe ONcE';          //->  'YOLO'
const stmt3 = 'yOu neVER WaLK alOne';        //->  'YNWA'

let stmt1Uppercase = stmt1.toUpperCase();
let stmt2Uppercase = stmt2.toUpperCase();
let stmt3Uppercase = stmt3.toUpperCase();

let firstLetter1 = stmt1.substring(0, 1).toUpperCase();         // H
let firstLetter2 = stmt1.substring(5, 6).toUpperCase();         // A
let firstLetter3 = stmt1.substring(7, 8).toUpperCase();         // G
let firstLetter4 = stmt1.substring(13, 14).toUpperCase();       // D

console.log(stmt1);
console.log(stmt1Uppercase);
console.log(`${firstLetter1}${firstLetter2}${firstLetter3}${firstLetter4}`);
// ***

let firstLetterYolo1 = stmt2.substring(0, 1).toUpperCase();      // Y
let firstLetterYolo2 = stmt2.substring(4, 5).toUpperCase();      // O
let firstLetterYolo3 = stmt2.substring(9, 10).toUpperCase();     // L
let firstLetterYolo4 = stmt2.substring(14, 15).toUpperCase();    // O

console.log(`\n${stmt2}`);
console.log(stmt2Uppercase);
console.log(`${firstLetterYolo1}${firstLetterYolo2}${firstLetterYolo3}${firstLetterYolo4}`);
// 

let firstLetterWalk1 = stmt3.substring(0, 1).toUpperCase();       // Y
let firstLetterWalk2 = stmt3.substring(4, 5).toUpperCase();       // N
let firstLetterWalk3 = stmt3.substring(10, 11).toUpperCase();     // W
let firstLetterWalk4 = stmt3.substring(15, 16).toUpperCase();     // A

console.log(`\n${stmt3}`);
console.log(stmt3Uppercase);
console.log(`${firstLetterWalk1}${firstLetterWalk2}${firstLetterWalk3}${firstLetterWalk4}`);







