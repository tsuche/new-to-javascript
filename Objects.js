OBJECTS 

//starts with curly braces
//has a property (behind colon) and value ( infront of colon)

var names = ["norman","lucien","lucy"];
var i = Math.floor(Math.random() * 2)


var data = {
  "names": names[1],
  "color": "green",
  number: [["17", "18"], ["10", "8", "21"]]
  "long word": ["orthodontist", "infinity"]
}

var me = data.number[1];
console.log(me);
//-> ["10", "8", "21"]

var me = data.color;
console.log(me);
//-> "green

var me = data["long word"][0];
console.log(me);
//-> need to use brackets when string is two letters cause can't write (data.long word) ya know?

----------

LOOKUP

var data = {
  1: "gold",
  2: "silver",
  3: "bronze"
}

var metal = 1
var myMetal = data[metal];

console.log(myMetal);
//-> "gold"

//if you put data.metal, it would result as undefined 
