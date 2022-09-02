var question="Where the hell have you been ";
var defaultAnswer= "In the House";
var answer =prompt(question,defaultAnswer);
alert("I was at "+answer);

//Obtaining a simple string from user 

let confiirmationRequired= confirm("Do you really want to delete this post?");
alert("Not cool",confiirmationRequired);

// Confirmation Box

var yourAge= prompt("What is your age","18+");
alert(yourAge);

//Asking age from user

var yourNewAge = parseInt(prompt("Tell your valid age","69"));
let working=yourNewAge+69;
alert(working);

// Converting a string into number and applying arithmetic operations on it

var ageInFloat= parseFloat(prompt("Age in Points","16.7"));
let workingFloat=ageInFloat+9.7;
alert(workingFloat);

// Converting a string into floating number and applying arithmetic operations on it


let forNewNumber=4+Number(yourAge);
alert(forNewNumber);

//Converting a string into number through Number Keyword

var forOperators = 100;
if(forOperators>90 && forOperators<110);
{
    alert("A number b/w 90 and 110 is",forOperators );
}

//Using Logical and operator


if(forOperators>90 || forOperators<110);
{
    alert("A number b/w 90 and 110 is",forOperators );
}

//Using logical or operator


if(forOperators!=99)
{
    alert(forOperators,"The number is not equal to 99");
}

//Using logical Not

var ending=69;
if(ending)
console.log("Nothing New");
else
console.log("There is something new");

//using if else condition statement