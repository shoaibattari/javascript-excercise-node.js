// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
// the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.


let magicians = ["david", "john", "peter", "anthony"];

function show_magician1(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(magicians[i]);
    }
}

// show_magician1(magicians)

function great_magician(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`great ${magicians[i]}`);
    }
    return magicians
}

function show_magicians(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// show_magicians(great_magician(magicians))
show_magicians(great_magician(magicians))

