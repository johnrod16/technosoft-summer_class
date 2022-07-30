const removeNum = require("./question1");
const missingNum = require("./question2");
const speedTickets = require("./question3");

const toRemoveNum = new removeNum;

const array = [21, 32, 12, 43, 45, 65, 12, 12, 33, 12];
console.log(toRemoveNum.deleteNum(array, 12));

const lowestNum = new missingNum;

const array2 = [20, 1, 3, 4, 2];
console.log(lowestNum.findNumber(array2));

const tickets = new speedTickets

const userSpeed = 80
const speedLimit = 60
console.log(tickets.speeding(userSpeed, speedLimit));


