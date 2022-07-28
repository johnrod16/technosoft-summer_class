const Class1 = require("./Class1");

class Class2 extends Class1 {

    myName2 = 'Class2';

    showMyName2() {
        console.log(`\nMy name is ${this.myName2}`);
    }

    myMethod() {
        this.showMyName2();     // run showMyName2() on this line
        this.showMyName1();     // run showMyName1() on this line
        super.myMethod();       // run myMethod() from parentClass
        console.log('\nmyMethod from Class2');
    }

}
module.exports = Class2;