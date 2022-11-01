// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ 
// names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians = ["david", "john", "peter", "anthony"];
let great_magicians = [];
function show_magicians(arr) {
    arr.map((magicians) => {
        console.log(magicians);})}


function make_great2(arr){
    arr.map((magicians) => {
        console.log(`the great ${magicians}`);})}
  

show_magicians(magicians)
great_magicians = magicians;
make_great2(great_magicians)
