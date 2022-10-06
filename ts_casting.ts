// TypeScript Casting
// Casting is the process of overriding a type.

// **Casting with ""as""

let str: unknown = 'Unique Number';
console.log((str as string).length); // as change the type of give variable , override the type

let num: unknown = 30;
console.log((num as string).length); // // prints undefined since numbers don't have a length

// ** Casting with <>

let strN: unknown = 'Unique Number';
console.log((<string>strN).length); // as change the type of give variable , override the type

// Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

//let book = "Atomic Habits";
//console.log(((book as unknown) as number).length);// error ->Property 'length' does not exist on type 'number'.ts(2339)
