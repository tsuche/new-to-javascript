OBJECTS 

//starts with curly braces
//has a property (behind colon) and value ( infront of colon)

var names = ["norman","lucien","lucy"];
var i = Math.floor(Math.random() * 2)


var data = {
  names: names[1],
  color: "green",
  number: [["17", "18"], ["10", "8", "21"]]
}

var me = data.number[1];
console.log(me);
//-> ["10", "8", "21"]

var me = data.color;
console.log(me);
//-> "green
