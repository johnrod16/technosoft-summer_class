/**
 * Loops:
 * 
 * for
 * while
 * do-while
 * 
 * for-of
 * for-in
 * forEach
 * 
 * for loop syntax:
 *  for(let counter = 1    ;  condition    ; incremental) 
 *         ^initialization 
 * 
 */

for (let counter = 1 ; counter <= 5 ; counter++){
    console.log('Hello World!');
}


//let theDay = 'today'
for (let theDay = 1 ; theDay <= 5 ; theDay++){
    console.log('today');
}

const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * Print values present on even-index
 * 
 * eg: 
 * Football
 * BASKETBALL
 * Rugby
 */
 console.log(sports[0]);
 console.log(sports[2]);
 console.log(sports[4]);

 for (let counter = 0 ; counter <= sports.length-1 ; counter+=2){
    console.log(`\n${sports[counter]}`);
 }

/**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */

/**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */

const sports1 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
let reverseSports = sports.reverse()

console.log('\n\n***BREAK HERE***\none way to write it\n');
for (let i = 0 ; i <= reverseSports.length-1 ; i++) {
    console.log(`${reverseSports[i]}`);
}

console.log('\n\n***BREAK HERE***\nthis works here too\n');

for (let i = sports1.length-1 ; i >= 0 ; i--) {
    console.log(sports1[i]);
}












