// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */

const maxScore = 50;
const studentScore = 45;
let percentage = (studentScore/maxScore)*100;

if (percentage >= 91 && percentage <= 100){
    console.log(`\n${percentage}`);
    console.log('Grade=A\n');
}else if (percentage >= 81 && percentage <= 90.99){
    console.log(`\n${percentage}`);
    console.log('Grade=B\n');
}else if (percentage >= 71 && percentage <= 80.99){
    console.log(`\n${percentage}`);
    console.log('Grade=C\n');
}else if (percentage >= 61 && percentage <= 70.99){
    console.log(`\n${percentage}`);
    console.log('Grade=D\n');
}else if (percentage >= 51 && percentage <= 60.99){
    console.log(`\n${percentage}`);
    console.log('Grade=E\n');
}else if (percentage < 51 && percentage > 0){
    console.log(`\n${percentage}`);
    console.log('Grade=F\n');
}else 
    console.log('\nInvalid student score\n');




/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */


let myNumber = 9;

if (myNumber%5 === 0 && myNumber%3 === 0) {
    console.log(`Number ${myNumber} is divisible by 5 and 3\n`);
} else if (myNumber%3 === 0) {
    console.log(`Number ${myNumber} is divisible by 3\n`);
} else if (myNumber%5 === 0) {
    console.log(`Number ${myNumber} is divisible by 5\n`);
} else {
    console.log(`Number ${myNumber} is NOT divisible by 5 and 3\n`);
}


/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */


let planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];

if (planets[0] === 'Earth'){
    console.log(`Earth is mentioned in expected index\n`);
} else {planets.unshift('Earth');
    console.log(`${planets}\n`);
}



/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present in index-2, but present at any other index then print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */
const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];

if (sports[2] === 'BASKETBALL') {
    console.log('BASKETBALL is present at index-2');
}
else if (sports.includes('BASKETBALL')) {
    console.log('BASKETBALL is mentioned in the sports array');
}
    else (sports.splice(2, 0, 'basketball'))
    console.log(sports);

// ********* BETTER WAY TO WRITE **********


    const sports2 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
    let basketballLowerCase = 'Basketball'.toLowerCase();
    for (let mySports = 0; mySports <= sports2.length-1; mySports++) {
        let sportInLowerCase = sports[mySports].toLowerCase();
        if (sportInLowerCase.localeCompare(basketballLowerCase) === 0) {
           console.log('Basketball is present in the array');
           break;
        }
    }