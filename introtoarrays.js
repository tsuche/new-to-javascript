ARRAYS [] & Length Property

var lastName = "Bell"
var hint = "Kimberly's last name starts with a " + lastName[0]

//it starts from 0 and not 1
console.log(hint);
// -> Kimberly's last name starts with a B

----

//I combined what I learned to make intials 
var firstName="Norman"
var lastName="Charle"

var initials= firstName + " " + lastName + "'s initials are: " + firstName[0] + lastName[0]
console.log(initials);
// -> Norman Charle's initials are NC

----

var grpName = "meridiem"
var eachLetterOfGrpName = "Meridiem is spelled with " + grpName.length + 
" letters" + " and is spelled with " + grpName[0] +  " " + grpName[1]  +  
" " + grpName[2] +  " " + grpName[3] +   " " +  grpName[4] +   " " + grpName[5] +  
" " + grpName[6] +   " " + grpName[7] + "."

//I used string property: length with arrays.
console.log(eachLetterOfGrpName);
// ->  Meridiem is spelled with 8 leters and is spelled with m e r i d i e m.

----

