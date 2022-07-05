/**
 * Logicial (&&, ||, !)
 * 
 * && -> and operator
 *      All combined conditions must be true, to get final result as true
 *      if any one of the combined conditions are false, than the result is false
 * || -> or operator
 *      Any one of the combined conditions has to be true to get a final result as true
 *      if all combined conditions are false, than final result is false 
 * ! -> not operator
 *      this will convert a false answer into true and vise versa
 * 
 *  */


// lVar1 is greater than lVar3 and lVar2 not equal to lVar4

/**
 * lVar1 > lVar 3 && lVar2 !== lVar4
 * 
 *false && true
false (because both have to be true to equal true)
 *  */


let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;

let lRes1 = lVar1 <= lVar3 && (lVar2 === lVar3 + lVar4);  // answer should be false
/**
 * 10 <= 30 && (20 === 30+40)
 * true && (20 === 70)
 * true && false
 * therefore final result is false because you need both to be the same 
 * 
 */

console.log(`lRes1 -> ${lRes1}`);

let lRes2 = lVar1 <= lVar3 && !(lVar2 === lVar3 + lVar4);  // answer should be false
console.log(`lRes2 -> ${lRes2}`);
