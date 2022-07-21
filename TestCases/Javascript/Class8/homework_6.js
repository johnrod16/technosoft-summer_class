// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */


 const sentence = 'have a great day bEcause iT is nICE out';

 function titleCase(sentence) {
    sentenceTitle = sentence.toLowerCase().split(' ');
    let abbr = ' ';
 for (let i=0 ; i <= sentenceTitle.length-1 ; i++) {
    abbr = abbr + sentenceTitle[i].substring(0,1).toUpperCase() + sentenceTitle[i].slice(1) + ' ';
   } return (abbr);
 }
 console.log('\nQuestion 1 answer:');
 console.log(titleCase(sentence));




/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

 const newSentence = 'hello dear how are you doing';
 
 function sentenceReverse(sentence) {
    let sentenceReverse = sentence.split(' ').reverse();
 for (let i=0 ; i <= sentence.length-1 ; i++){
} return(sentenceReverse.toString().replaceAll(',', ' '));
}
 console.log('\nQuestion 2 answer:');
 console.log(sentenceReverse(newSentence));


/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

 const numbers = [1, 2, 3, 4, 5];
 function totalNumbers(numbers) {
    let totalNumbers = 0;
 for (let i=0 ; i<=numbers.length-1 ; i++) {
    totalNumbers = numbers[i] + totalNumbers; 
} return (totalNumbers);
}
console.log('\nQuestion 3 answer:');
console.log(totalNumbers(numbers));





/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */


const numbers2 = [1, 1, 1, 2, 3, 1, 2] 

 function averageCalc(numbers) {
    let totalNumbers = 0;
 for (let i=0 ; i<=numbers.length-1 ; i++) {
    totalNumbers = numbers[i] + totalNumbers; 
 }  return(totalNumbers / numbers.length); 
 }
 console.log('\nQuestion 4 answer:');
 console.log(averageCalc(numbers2));