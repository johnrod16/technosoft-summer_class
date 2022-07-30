/**
 * Create a function to return an array 
 *  after removing given number from the given array
 * 
 * 
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */

//class removeNum {

// const array = [...] 
// use splice to remove the value from the array
// return the array with removed value(s)

/**
 * function numRemove(num){
    let numToRemove = 0;
    let arrAfterRemove = array.slice();
    for (let counter = 0 ;  counter <= arrAfterRemove.length-1 ; counter++) {
        console.log(arrValues[counter]);
    }
}
*/

/**let array = [21, 32, 12, 43, 45, 65, 12]

function numRemove (num){
    array.indexOf()
    for (let i = 0 ;  i <= array.length-1 ; i++) {
    }  if (numRemove !== -1)
    return array.splice(numRemove, 1)
}

console.log(array);
*/
class removeNum{

    deleteNum (array, numDelete){
        let i = 0
        for ( i = numDelete; array.includes(numDelete) === true; i++){
            let indexAt = array.indexOf(numDelete);
            let array2 = array.splice(indexAt, 1);
    }
        return array
}


}
module.exports = removeNum

