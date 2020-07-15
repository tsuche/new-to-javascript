// Attempting to create RPS along with Learn Javascript tutorial Videos.. hehe

------
07/15/2020
var Y = ["Y","y"];

function starting(){
    var decision = prompt("Care for a game of Rock Paper Scissors? Y/N");
    if ( decision == Y[0]||Y[1]){
        console.log("yay");
    }else{
        console.log("That's unfortunate, goodbye! ");
    }
    return decision;
}
console.log(starting());

