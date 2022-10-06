//Three main primitives in js and ts.

//boolean number string
//****Type assignment explicit and ****

//explicit --> writing out the type
let Unique_name: string = "TypeScript";
console.log(Unique_name);

//implicit ---> it will guess the type based on assigned value

let SetName="CommonName";
console.log(SetName);

//****error in type assignment */
//let firstValue: number= 30; //type number
//="Unique"; // error thrown here -->Type 'string' is not assignable to type 'number'.ts(2322)

//let SecondValue = "Unique_one"; // first inferred to type string here 
//SecondValue=30;// error thrown --> Type 'number' is not assignable to type 'string'.ts(2322)

//in inplicit as Json.parse doesnt know the type of data so it will assigned to any.
