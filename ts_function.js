// TypeScript has a specific syntax for typing function parameters and return values.
// **Return type
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
/*
Void Return Type
The type void can be used to indicate a function doesn't return any value.
*/
function showRatingOf() {
    console.log("Rating is 8.6");
}
showRatingOf();
/*
Parameters --> Function parameters are typed with a similar syntax as variable declarations.
*/
function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(10, 20));
// If no parameter type is defined, TypeScript will default to using any.
// ** note 
/*
Optional Parameters
By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
*/
// default parameters --> default value is passed as paramater
// named parameters
// rest parameters--> to show many denoted by "..."
