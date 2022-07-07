/**
 *Array = a way to store more that 1 value in a variable
 it is a datatype that can store 1 or more values 
It is used with the Square brackets
EX:
let myName = []
 */


/**
 * [] represents Array
 * 
 * Array : a datatype which can store one or more values
 * 
 */
 let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Pluto'];
 console.log(`\nplanets -> ${planets}`);
 console.log(`typeof planets -> ${typeof planets}`);
 
 /**
  * To find the number of values in array
  * property: length
  */
 const totalPlanets = planets.length;
 console.log(totalPlanets);
 let planets_String = ('Earth', 'Mercury', 'Venus', 'Jupiter', 'Pluto');
let result = planets_String.length
console.log(`${planets_String.length}`);
const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 console.log(`${sentence3.length}`);

/**
  * Array: values stored using the concept of index.;
  * 
  * first value goes to index-0
  * second value goes to index-1
  * third value goes to index-2 
  * and so on
  * 
  * let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter'];
  * 
  * planets[0] -> represent the value at index-0
  * 
  * 
  * planets[n] -> represent the value at index-n
  * 
  * last Index of Array = Array length -1
  * 
  */
