// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let name = "Shoaib"
let age = 30;
console.log(name === "Shoaib"); // true
console.log(name === "shoaib"); // false
console.log(name === "saleem"); // false
console.log(name.toLocaleUpperCase() === "shoaib"); // false
console.log(name.toLocaleUpperCase() === "SHOAIB"); // true

// • Tests using the lower case function

console.log(name.toLocaleLowerCase() === "shoaib"); // true
console.log(name.toLocaleLowerCase() === "Shoaib"); // false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(age === 30);// true
console.log(age === 20);// false
console.log(age > 30);// false
console.log(age < 30);// false
console.log(age >= 30);// true
console.log(age <= 30);// true


// • Tests using "and" and "or" operators

console.log(name === "Shoaib" && age === 30 ); // true
console.log(name === "Shoaib" && age === 36 ); // false

console.log(name === "Shoaib" || age === 36 ); // true
console.log(name === "Sattar" || age === 30 ); // true


var food = ["Burger","Roll"];

console.log(food.includes("Rolls")); // false
console.log(food.includes("Burger")); // true 
