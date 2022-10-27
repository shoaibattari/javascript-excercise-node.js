// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
const location = ["Makkah shareef","Madina shareef","Baghdad","Austrailia","Egypt"];
// • Print your array in its original order.
console.log(location);

// • Print your array in alphabetical order without modifying the actual list.
console.log(location.sort());location.sort().map((data)=>{console.log(data);});

// • Show that your array is still in its original order by printing it.
location.map((data)=>{console.log(data);})

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(location.reverse().sort());

// • Show that your array is still in its original order by printing it again.
console.log(location);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(location.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(location);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(location.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(location.sort().reverse());
