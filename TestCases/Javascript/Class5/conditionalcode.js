/**
 * Conditional Code Blocks (conditional loop)
 *  1. if-else block
 *  2.switch block
 * 
 * When we have different codes to excute depending on other conditions 1st
 * 
 * 
 * Syntax for if-block:
 * if (condition(s)) are true then moves to the next block {of conditions}
 */

if (2 === 2){
    console.log("Hello World!"); 
} // result is true so it prints "Hello World!"

if (2 === 12){
    console.log("Hello World!"); 
} // result is false so it DOES NOT print "Hello World!"



/** 
 * test during class
 * 
 * if name is happy, print "good name"
    if name is joy, print the name and it's length.
                  print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"
 * 
 */ 


    // if-else block

let myName = 'John';
const myNameLowerCase = myName.toLocaleLowerCase();
if (myNameLowerCase.localeCompare('happy') === 0) {
    console.log(('good name'));
} else if (myNameLowerCase.localeCompare('joy') === 0){
    console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`);
} else if (myNameLowerCase.localeCompare('john') === 0){
    console.log(myName.toUpperCase());
} else {
    console.log('you have a different name than we expected');
}

// switch block

switch (myName.toLowerCase()) {
    case 'happy':
        console.log(('good name'));
        break;
    case 'joy' :
        console.log(`name: ${myName}\nlength: ${myName.length}\nYour name is too short`);
        break;
    case 'john' :
        console.log(myName.toUpperCase());
        break;
    default:
        break;
}


// next class test case

/**
 * if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY

 */

//make everything lower case and use || (or function)

let day = 'Tomorrow';
switch (day.toLowerCase()) {
    case 'mon':
    case 'monday':
    case 'wed':
    case 'wednesday':
    case 'fri':
    case 'friday':
        console.log('\nToday is the Technosoft class\n');
        break;
    case 'tue':
    case 'tuesday':
    case 'thur':
    case 'thursday':
        console.log('\nToday is self lerning day\n');
        break;
    case 'sat':
    case 'saturday':
        console.log('\nToday is lab session day\n');
        break;
    case 'sun':
    case 'sunday':
        console.log('\nNo study today\n');
        break;
    default: console.log('\nEntered day-value is not valid\n');
        break;
}





















