// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

/**let sentenceToLowercase = sentence.toLowerCase();
let firstLetterUppercase = sentenceToLowercase.substring(0, 1).toUpperCase();
let allLetters = sentenceToLowercase.substring(1);
let refineWord = firstLetterUppercase.concat(allLetters)
//console.log(refineWord);


/**
 * 1. split string to Array
 * 2. substring first letter (index-0) .touppercase
 * 3. concat rest of the values 
 */

 const sentence = 'have a great day bEcause iT is nICE out';
let sentenceSplit = sentence.toLowerCase().split(' ') // 'have', 'a', 'great' .... Have A Great 
//console.log(sentenceSplit);
let abbr = ''

for (let i=0 ; i <= sentenceSplit.length-1 ; i++ ) {
    abbr = abbr + sentenceSplit[i].substring(0,1).toUpperCase() + sentenceSplit[i].slice(1) + ' ';
}
console.log('\nQuestion 1 answer:');
console.log(`Titlecase -> ${abbr}\n\n`);


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
/**
 * split string using .split
 * reverse order using .reverse
 * print
 */

const newSentence = 'have a great day';
console.log('Question 2 answer:');
console.log(newSentence);
let reverseSentence = newSentence.split(' ').reverse();
for (let i=0 ; i <= reverseSentence.length-1 ; i++){
}
console.log(reverseSentence.toString().replaceAll(',', ' '));



/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

const numbers = [1, 2, 3, 4, 5];

let totalNumbers = 0;
for (let i=0 ; i<=numbers.length-1 ; i++) {
    totalNumbers = numbers[i] + totalNumbers; 
}
console.log('\nQuestion 3 answer:');
console.log(`${totalNumbers}`);





/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 const numbers1 = [1, 2, 3, 4, 5];

 let totalNumbers1 = 0;
 for (let i=0 ; i<=numbers1.length-1 ; i++) {
     totalNumbers1 = numbers1[i] + totalNumbers1; 
 }
 console.log('\nQuestion 4 answer:');
 console.log(totalNumbers1 / numbers1.length);

