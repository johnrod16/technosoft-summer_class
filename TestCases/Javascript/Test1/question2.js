/**
  * Create a function to return the missing smallest positive number in given array
  * 
  * 
  * [1, 2, 3, 4, 5]   ->   6
  * 
  * [2, 3, 1, 56, 23, 11]  ->   4
  * 
  * [-1, 0, 2, 1]    ->  3
  * 
  * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
  * 
  * 
  */
class missingNum {
 findNumber(array) {
    let result = [];
    for (let i = 0; i < array.length; ++i) {
      if (0 <= array[i]) {
        result[array[i]] = true;
      }}
    for (let i = 1; i <= result.length; ++i) {
      if (undefined === result[i]) {
        return i;
      }}
    return 1
  }
}
module.exports = missingNum

















