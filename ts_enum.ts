/*
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric.
*/

// Numeric Enums - Default-->By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum Bestanime {
    OnePiece,
    Naruto, 
    DeathNote
}

let Ontop = Bestanime.Naruto;
//logs 1
console.log(Ontop);

//Ontop ="Naruto"// Type '"Naruto"' is not assignable to type 'Bestanime'.ts(2322)
//top = 'Naruto'; // Error: "Naruto" is not assignable to type 'top'.


// ** Numeric Enums - Initialized
//You can set the value of the first numeric enum and have it auto increment from that:

enum Bestanimepro {
    OnePiece =1,
    Naruto, 
    DeathNote
}

let OnTop1 = Bestanimepro.Naruto;
let onTop2 = Bestanimepro.DeathNote;

console.log(OnTop1);
console.log(onTop2);



// Numeric Enums - Fully Initialized

enum BestanimeproUltra {
    OnePiece =1,
    Naruto = 2, 
    DeathNote = 3
}

let OnTop1ultra = BestanimeproUltra.Naruto;
let onTop2ultra = BestanimeproUltra.DeathNote;

console.log(OnTop1ultra);
console.log(onTop2ultra);


// string enums 

enum BestanimeproUltraOp {
    OnePiece = "One piece ",
    Naruto = "Naruto", 
    DeathNote = "Death Note"
}

console.log(BestanimeproUltraOp.OnePiece);
console.log(BestanimeproUltraOp.Naruto);
console.log(BestanimeproUltraOp.DeathNote);


