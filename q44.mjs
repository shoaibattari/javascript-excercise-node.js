// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
//that collects as many items as the function call provides, and it should print a summary
//  of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let pd1 = ["club sandwich" ,"submarine sandwich", "pizza sandwich"]
let pd2 = ["sandwich21" ,"sandwich22", "sandwich23"]
let pd3 = ["sandwich24" ,"sandwich25", "sandwich26"]
function sandwiches(arr){
    arr.map((items)=>{
console.log(`this menu in ${items}`);}
)}
sandwiches(pd1);
sandwiches(pd2);
sandwiches(pd3);