// a tupled is a type array -->with a pre-defined length and types for each index.

 
let animeDetail:[string , number , boolean]; // defined tuple 
animeDetail=[ "One Piece" , 1 , true];// intialized correctly
console.log(animeDetail);


// error will throw in this example because of uncorrect intialization

//let animeDetail1:[string , number , boolean]; // defined tuple 
//animeDetail1=[ 1, "One Piece" , true];// intialized uncorrectly string we have assigned number and vice versa so
//console.log(animeDetail1);


//*** readonly in tuple

// define our readonly tuple
//const Unique_Detail: readonly [number, boolean, string] = [10, true, 'atomic Habits'];
// throws error as it is readonly.
//Unique_Detail.push('By James'); // throws error Property 'push' does not exist on type 'readonly [number, boolean, string]'.ts(2339)
