// ***Type: any***
//let see example without any
//let UniqueNumber = 30 ;
//UniqueNumber = "This is Unique!!"; // Error: Type 'string' is not assignable to type 'boolean'.
//Math.round(UniqueNumber); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
//this can be solve by ((any))
var UniqueNumber1 = 30;
UniqueNumber1 = "This is Unique!!"; // no error.
Math.round(UniqueNumber1); // no error.
console.log(UniqueNumber1);
// this is because ((any)) disables the type checking
//***Type: unknown***
//unknown is a similar, but safer alternative to any.
