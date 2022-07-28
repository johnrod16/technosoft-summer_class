/**
 * OOP Concept (OOP -> Object oriented Programming)
 * 
 * 1. Encapsulation
 *      Wrapping up code in a single unit (i.e. Class)
 *      To implement Encapsulation concept, we create Class and write code in it.
 * 
 * 2. Abstraction
 *      Hiding unnecessary information from user.
 *      To implement Abstraction concept, we create methods.
 * 
 * 3. Inheritance
 *      -> To implement Inheritance, we need to have parent-child relationship between two classes
 *      -> we use "extends" keyword with childClass, into order to create parent-child relation between two classes
 *      -> childClass get access to parentClass/grandParentClass variables and functions (except their private variables/functions)
 *      -> a class can extend ONLY one class (why? - Diamond Problem)
 * 
 * 4. Polymorphism
 *      same name and more than 1 form
 *      When we have two or more functions with SAME name
 *      Types:
 *      1. Compile Time Polymorphism (Static Binding, Method Overloading)
 *          In a class, when we have two or more method with SAME name 
 *              but different input-parameters
 *          Ways to set different input-parameters:
 *          a) different number of input-parameters
 *          b) different datatype of input-parameters
 *          c) different sequence of input-parameters
 * 
 *      2. Run Time Polymorphism (Dynamic Binding, Method Overriding)
 *          -> This can exist only in Inheritance set-up
 *          -> when we have a method in ChildClass with 
 *              SAME name and SAME input-parameters as of in ParentClass
 *          -> when we want to overwrite/override a parentClass-function with childClass-function.
 * 
 * ***********************
 * 
 * super = keyword
 * 
 * we use 'super' keyword, 
 *      when we want to call/execute parentClass-function inside childClass-function
 * 
 */