const Class1 = require("./Class1");

class Class3 extends Class1 {

    myName3 = 'Class3';

    showMyName3() {
        console.log(`My name is ${myName3}`);
    }

}
module.exports = Class3;