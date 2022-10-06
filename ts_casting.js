// TypeScript Casting
// Casting is the process of overriding a type.
// **Casting with ""as""
var str = 'Unique Number';
console.log(str.length); // as change the type of give variable , override the type
var num = 30;
console.log(num.length); // // prints undefined since numbers don't have a length
// ** Casting with <>
var strN = 'Unique Number';
console.log(strN.length); // as change the type of give variable , override the type
// Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
//let book = "Atomic Habits";
//console.log(((book as unknown) as number).length);// error ->Property 'length' does not exist on type 'number'.ts(2339)
