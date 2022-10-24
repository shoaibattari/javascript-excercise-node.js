// Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d 
// like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let guestList = ["saleem", "shoiab", "sattar"];
guestList.map((guest) => {
    console.log(`Hi ${guest} I am inviting for dinner tonight`);
});

// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

console.log(`${guestList[0]} has apologised to attend the dinner.`);
guestList[0] = "Ismail";
guestList.map((guest) => {
    console.log(`Hi ${guest} I am inviting for dinner tonight`);
});

// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// add at beginning
guestList.unshift("qasim");
// add at middle
guestList.splice(2, 0, "rasheed")
// add at end
guestList.push("uncle");
guestList.map((user)=>{
   console.log(`Hi ${user} I am inviting for dinner tonight`) });

// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.



console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
// only two guest

guestList.map((guest) => {
    console.log(`Hi ${guest} I am inviting for dinner tonight`);
});

