// Code your solutions in this file
/*for (let age=30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}
*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

//for loop 
function writeCards(name, event) {
    let messages = [];
    for (let i=0; i<name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        //debugger;
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


//while loop
let n = 4;

function countDown(n){
    let i = 0;
    while (i <= n) {
        console.log(n--);
    } 
}
countDown(10);