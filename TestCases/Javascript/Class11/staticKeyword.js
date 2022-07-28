/**
 * static
 * 
 * static variables/functions belong to the Class instead object
 * 
 * non-static variables/functions belong to the object
 * 
 * 
 * If a static variable is changed by any object; the value got changed for all Objects
 * 
 * To use static variable/function
 *      we have to use ClassName instead objectName or this-operator.
 *
 * If the purpose of function should be performed by individual object/entity
 *      then function should be NON-static
 * 
 * 
 * If the purpose of function should be performed by Class or if function is a helping-function
 *      then function should be static
 * 
 * 
 * 
 */
/**
 * Accounts
 * 
 * 
 * accNumber
 * accBalance
 * accHolderName
 * bankName
 * 
 * 
 * const a1 = new Accounts(); 
 * a1.deposit(10000);           // a1 accBalance = 10000
 * 
 * 
 * 
 * const a2 = new Account();
 * a2.showMyBalance()           // 10000
 * a2.withdraw()                // 10000        accBalance=0
 * 
 * 
 * a1.showMyBalance()           // 10000 / 0
 * 
 * 
 */