// let myVar={}
// let myVarTwo={}
//  ^ these are refering to two different objects in the memory

let myVar=''
let myVarTwo=''

console.log(myVar===myVarTwo);

//Example 1

// == and === are equality checking operators; 
// a == b returns true if a is equal to b. 
// The difference is that === is type-safe. 
// For instance, 1 == "1" is true, 
// since the number 1 is implicitly converted to a string in order to check equality.
//  === will not perform this conversion, so 1 === "1" is false.


//Example 2

// Lets say you created an integer variable x with value 5.
// = is assignment. var x = 5. You have assigned x the value 5.
// == is equality. x == 5 will return true.
// === is exact equality (i.e. value and type). 
// x === "5" will return false, because x is an integer and "5" is a character.
// X === 5 will return true because x is equal to the integer 5.