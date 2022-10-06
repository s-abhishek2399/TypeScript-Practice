/*
Union types are used when a value can be more than a single type. Such as when a property would be string or number.
*/
//Union | (OR)
function showRating(Rating) {
    console.log("The rating of Atomic Habits is : ".concat(Rating, "."));
}
console.log(showRating("9.6"));
console.log(showRating(9.6));
// Union | (OR) error
/*
function showRatingBooks(Rating: string | number) {
    console.log(`The rating of Atomic Habits  is : ${Rating.toUpperCase()}.`);
    // this will give error ->Property 'toUpperCase' does not exist on type 'string | number'.
  //Property 'toUpperCase' does not exist on type 'number'.ts(2339)
  }

console.log(showRating("9.6"));
console.log(showRating(9.6));
*/
