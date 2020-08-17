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

________

UPDATE VALUES OF PROPERTIES

var data = {
  1: "gold",
  2: "silver",
  3: "bronze",
  "no place": "loser"
}
console.log(data["no place"])
//-> "loser"

data[1] = "winner";
data["no place"] = "didn't make it"

console.log(data[["no place"]])
//-> didn't make it

_______

ADDING PROPERTIES TO OBJECT

var data = {
  1: "gold",
  2: "silver",
  3: "bronze",
  "no place": "loser"
}

data.NA = "DID NOT PARTICIPATE";
data["extra"] = "SPECIAL MENTIONS TO..."

console.log(data.extra);
//->"SPECIAL MENTIONS TO..."

console.log(data.NA);
//-> "DID NOT PARTICIPATE"

/* What I've noticed is that using dot notation are one word and brackets are two. So I thought why not always use brackets then? 
In bracket notation you need to add quotes or else it, the computer, will think you're talking about a variable or something

