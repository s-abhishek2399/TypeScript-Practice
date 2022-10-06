/*
An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric.
*/
// Numeric Enums - Default-->By default, enums will initialize the first value to 0 and add 1 to each additional value:
var Bestanime;
(function (Bestanime) {
    Bestanime[Bestanime["OnePiece"] = 0] = "OnePiece";
    Bestanime[Bestanime["Naruto"] = 1] = "Naruto";
    Bestanime[Bestanime["DeathNote"] = 2] = "DeathNote";
})(Bestanime || (Bestanime = {}));
var Ontop = Bestanime.Naruto;
//logs 1
console.log(Ontop);
//Ontop ="Naruto"// Type '"Naruto"' is not assignable to type 'Bestanime'.ts(2322)
//top = 'Naruto'; // Error: "Naruto" is not assignable to type 'top'.
// ** Numeric Enums - Initialized
//You can set the value of the first numeric enum and have it auto increment from that:
var Bestanimepro;
(function (Bestanimepro) {
    Bestanimepro[Bestanimepro["OnePiece"] = 1] = "OnePiece";
    Bestanimepro[Bestanimepro["Naruto"] = 2] = "Naruto";
    Bestanimepro[Bestanimepro["DeathNote"] = 3] = "DeathNote";
})(Bestanimepro || (Bestanimepro = {}));
var OnTop1 = Bestanimepro.Naruto;
var onTop2 = Bestanimepro.DeathNote;
console.log(OnTop1);
console.log(onTop2);
// Numeric Enums - Fully Initialized
var BestanimeproUltra;
(function (BestanimeproUltra) {
    BestanimeproUltra[BestanimeproUltra["OnePiece"] = 1] = "OnePiece";
    BestanimeproUltra[BestanimeproUltra["Naruto"] = 2] = "Naruto";
    BestanimeproUltra[BestanimeproUltra["DeathNote"] = 3] = "DeathNote";
})(BestanimeproUltra || (BestanimeproUltra = {}));
var OnTop1ultra = BestanimeproUltra.Naruto;
var onTop2ultra = BestanimeproUltra.DeathNote;
console.log(OnTop1ultra);
console.log(onTop2ultra);
// string enums 
var BestanimeproUltraOp;
(function (BestanimeproUltraOp) {
    BestanimeproUltraOp["OnePiece"] = "One piece ";
    BestanimeproUltraOp["Naruto"] = "Naruto";
    BestanimeproUltraOp["DeathNote"] = "Death Note";
})(BestanimeproUltraOp || (BestanimeproUltraOp = {}));
console.log(BestanimeproUltraOp.OnePiece);
console.log(BestanimeproUltraOp.Naruto);
console.log(BestanimeproUltraOp.DeathNote);
