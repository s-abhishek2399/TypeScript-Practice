// array
 
let anime: string [] =[]
anime.push("Naruto");
anime.push("One Piece");
anime.push("Death Note");
//anime.push(30); // error thrown --> Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// this is why because we have assigned type string to the array
console.log(anime);


//*** Readonly --> The readonly keyword can prevent arrays from being changed.
// this comes in handy when we dont want the array to be changed

//let TopAnime : readonly string[] = ["One Piece"];
//TopAnime.push("Naruto") // error thrown on this -> Property 'push' does not exist on type 'readonly string[]'.ts(2339)


