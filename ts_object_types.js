//TypeScript has a specific syntax for typing objects.
var Books = {
    Name: "Atomic Habits",
    By: "James clear",
    year: 2018
};
console.log(Books);
//Type Inference--->TypeScript can infer the types of properties based on their values.
var FavBooks = {
    type1: "life changing"
};
FavBooks.type1 = "Atomic Habits"; // no error
//FavBooks.type1 = 2; // Error: Type 'number' is not assignable to type 'string'.ts(2322).
console.log(FavBooks);
//** Optional Properties are properties that don't have to be defined in the object definition. **
var booksFamous = {
    name: "Atomic Habits"
};
booksFamous.author = "James Clear"; // no  error 
// ***can throw error because in such case if we don't assign operational properties***
//const booksFamous1 : {name:string , author: string} ={
//  name : "Atomic Habits"
//}
//booksFamous1.author = "James Clear" // error will throw here -->
/* error will throw
const booksFamous1: {
    name: string;
    author: string;
}
Property 'author' is missing in type '{ name: string; }' but required in type '{ name: string; author: string; }'.ts(2741)
ts_object_types.ts(35, 37): 'author' is declared here.
*/ 
