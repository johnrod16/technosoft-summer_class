const Class1 = require("./Class1");
const Class2 = require("./Class2");
const Class3 = require("./Class3");

const c1 = new Class1();    // c1 has access to myName1, showMyName1()

const c2 = new Class2();    // c2 has access to myName2, showMyName2(), myName1, showMyName1()

c2.showMyName1();


c2.myMethod();

const c3 = new Class3();

c3.myMethod();