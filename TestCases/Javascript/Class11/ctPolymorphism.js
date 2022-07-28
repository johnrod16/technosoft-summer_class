class CTPolymorphism {


    addNums(num1, num2) {
        return num1+num2;
    }


    // create function to add 3 numbers
    addNums(num3, num4, num5) {
        return num3+num4+num5;
    }

    // create function to add 3 numbers
    addNums(str1, str2, num3) {     // "hello", 'world', 100
        return str1+str2+num3;
    }

    // create function to add 3 numbers
    addNums(str1, num3, str2) {     // "hello", 100, 'world'
        return str1+str2+num3;
    }

}