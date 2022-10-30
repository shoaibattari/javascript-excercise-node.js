import promptSync from 'prompt-sync';
const prompt = promptSync();


// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • If the alien’s color is green, print a statement 
// that the player just earned 5 points for shooting the alien.


let alien_color = "green";
    if(alien_color === "green"){
console.log("you earner 5 points");}


// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_color2 = "red";

if(alien_color2 === "green"){
console.log("you earner 5 points")}
else{
console.log("you earner 10 points");}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// green 5, yellow 10, red 15

const user = prompt("enter colour green, yellow, red    ");
if (user === "green") { console.log("you earned 5 point"); }
else if(user === "yellow")
{ console.log("you earned 10 point"); }
else if(user === "red")
{ console.log("you earned 15 point"); }
    else{(console.log("write true colour"))};