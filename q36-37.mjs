// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.



// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size, message) {
//     console.log(`my order is ${size}, ${message} `);
// }
// make_shirt(26, "red colour")

function make_shirt2(size, message) {
if(size === "large"){
    console.log(message);
}    else if(size === "medium"){
    console.log(message);
}else{
    console.log(message);
}
}

make_shirt2("large", "i love t-shirt")
make_shirt2("mediun", "i love javascript")
make_shirt2("small", "i love coding")
make_shirt2("smallest", "i love coding")