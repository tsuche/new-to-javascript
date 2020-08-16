FOR LOOPS

function multiply(arr){
  var product = 1;

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++)
    product *= arr[i][j];
  }
  return product;
}

var total = (multiply([[2,3],[8,10]]));
console.log(total);
//->480

//So personally, this was a bit challenging to wrap my head around.. 
//Basically for "for loops", the first for loop (i) will play ONCE then move on to the second for loop (j). (i) will play until j is no longer able to
