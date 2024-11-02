console.log("Script");
//strings
let myName = "Daphane";  //declaration and assigning value
let lastName = "Taylor";
//numerical values
var myAge = 30;
let mySize = "5'9";
///boolean values
let isStudent = true;


//display the values on the console
console.log(myName);
console.log(myAge);
console.log(myName, lastName, myAge, mySize);

//concatenation
console.log("My name is " + myName + lastName);
console.log("My name is " + myName + ", I am " + myAge + " years old and my height is " + mySize)

//operations
let num1 = 10;
let num2 =  2;

addition = num1 + num2;
subtraction = num1 - num2;
division = num1 / num2;
multiplcation = num1 * num2;

///add, sub, div, mult
console.log("Addition is: " + addition);
console.log("Subtraction is: " + subtraction);
console.log("Division is: " + division);
console.log("Multiplcation is: " + multiplcation);

//Challenge 1
const pi = 3.1416;
let r = 3;

a = pi * (r*r);

console.log("The area of a circle with a radius of " + r + " is the " + a);

//variables vs constants
let aVar = 20;
let otherVar = 30;
console.log(aVar,otherVar); //20 30

aVar = 50;
otherVar = 60;
console.log(aVar,otherVar); //50 60

const weekDays = 5;
weekDays = 10; //the constants can't change
console.log(weekDays);

//USE LET INSTEAD OF VAR TO AVOID LOGIC ERRORS WHEN DECLARING VARIABLES
