/**
  * Create a function to return the points to be marked against for over speeding.
  * 
  * For every 5mph over the speed limit, 1 point should be marked
  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.
  * 
  * 
  * 
  * sl= 60 , us = 70 -> points = 2
  * 
  * sl = 60 , us = 63 -> points = 0
  * 
  * sl = 75 , us = 70 -> points = 0
  * 
  * sl = 80 , us = 88 -> points = 1
  */

/**
 * create 2 var with userspeed and speedlimit 
 * find out if a number is divisble by 5 
 * find the modulus 
 * how many times is it over 5
 * 
 * 
 * 
 * 
 */

class speedTickets {

speeding (userSpeed, speedLimit) {
    let speedOverLimit = userSpeed - speedLimit
    let howFast = speedOverLimit/5
    
if (userSpeed > speedLimit%5) {
    console.log(`1 point added\n`);
} else if (userSpeed > speedLimit%10) {
    console.log(`2 points added\n`);
} else {(userSpeed < speedLimit) 
    console.log(`No points added\n`)
} return howFast
}
}
module.exports = speedTickets








//}