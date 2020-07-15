FUNCTIONS BASICS


FUNCTIONS functionName(){
  console.log("Hello Functions");
 }
 
 //you need to declare it to use by:
 
 functionName();
 //-> Hello Function
 
 ------
PARAMETERS
 
 function testing(a,b){
    console.log(a*b);
}

testing(3,6);
//->18


-------
  
 GLOBAL AND LOCAL VARIABLES
 
 //Global and Local Variables

var myShoes = "vans";

function favShoes (){
    var myShoes = "Converse";
    
    return(myShoes);
    //it's just talking in your calculation, and returning it back to you
} 

console.log(favShoes());
//-> Converse
console.log(myShoes);
//->Vans

-------
  
SWITCH CASES IN FUNCTIONS

function scaleOfFive(num){
    var wellness = "";
    switch(num){
        case 0:
        case 1: 
            wellness = "Rest up, friend. Cheer up, eat your favorite ice cream and blast your music";
        break;
        case 2:
        case 3:
            wellness = "I hope doing okay, don't push yourself too hard. VIRTUAL 4 DIMENSIONAL HUGS"
        break;
        case 4:
        case 5:
            wellness = "I hope you have a great day/ mood tomorrow too! "
            break;
    }
    return wellness;
}

/* Switch(){} is another way to write if statements. The case number are replacing what goes inside the parentheses, this case being num. So when I input
1, it will return back what I wrote for case 1 considering that there is a return value inside my function. I wonder if I can replace the numbers with strings..
*/ 

//How would you rate your day on a scale of one to five?
console.log(scaleOfFive(2));
//-> I hope doing okay, don't push yourself too hard. VIRTUAL 4 DIMENSIONAL HUGS

YOU CANNNN!!!!
  
function animegenre(genre) {
    var type =""
    switch(genre){
        case "romance":
          type="ao haru ride";
          break;
        case "magic":
          type="black clover";
          break;
        case "mafia":
          type="bungou stray dogs";
        //this was on purpose
          type="91 days";
          break;
        default:
          type="something went wrong!";
    }
    return type;
}

// Oh and the default is like another case that's not defined. 

console.log(animegenre("mafia")); 
//-> 91 days

------

BOOLEAN AND OPERATORS

/*
= setting value 

== compare/checks if a value equals 

=== strict, strings don't matter
ex. 3==="3" is wrong
ex/ 3 == "3" is true
*/

function equalorno(val){
    if (val == 8){
        return "Equal";
    }
     return "Not Equal";
}

console.log(equalorno(8));
// -> Equals
