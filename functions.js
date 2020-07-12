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
