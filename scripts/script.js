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
//weekDays = 10; the constants can't change
console.log(weekDays);

//USE LET INSTEAD OF VAR TO AVOID LOGIC ERRORS WHEN DECLARING 

//FUNNY STORY ASSIGNMENT 1 - PROGRAMMING FUNDAMENTALS

//Declare Variables
let character = "Whiskers";
let action =  "chased";
let object = "laser pointers";
let place = "living room";
let time = "One sunny afternoon";

//Declare Constant
const toy = "red dot";

//Create The Story
console.log("--------FUNNY STORY--------");
console.log(character + " was a cat with a short attention span and an obsession with " + object +".");
console.log(time + ", his owner, Sarah, decided to entertain him with the trusty " + toy + ".");
console.log(character + " " + action + " the " + toy + " around the " + place + ", jumping onto furniture and crashing into pillows with no grace whatsoever .");

console.log("Suddenly, the " + object + " battery died, and the " + toy + " vanished.");
console.log(character + ", in a tizzy, searched every nook and cranny, convinced the " + toy + " was hiding");
console.log("He even checked inside his own food bowl, much to his own confusion.");

console.log("Sarah couldn't stop laughing as " + character + "' furtile hunt continued.");
console.log("Finally, " + character + " gave up, plopped onto the couch, and fell asleep, dreaming of " + toy + " endless chases.");

//Change the story using different variables and constants
console.log("-------DIFFERENT VERSION OF THE STORY-------");

character = "Roman";
action = "followed";
object = "mouse";
place = "bedroom";
time = "One evening";

console.log(character + " was a cat with a short attention span and an obsession with his " + object + ".");
console.log(time + ", his owner, Sarah, decided to entertain him with the trusty " + object + ".");
console.log(character + " " + action + " the " + object + " around the " + place + ", jumping onto furniture and crashing into pillows with no grace whatsoever.");

console.log("Suddenly, the " + object + " battery died, which made " + character + " lose interest. So Sarah went and got his other favorite toy; the " + toy + ".");
console.log(character + ", now in a tizzy, he " + action + " the " + toy + " across every nook and cranny chasing it.");

console.log("Sarah couldn't stop laughing as " + character + "' furtile hunt continued.");
console.log("Finally, " + character + " gave up, plopped onto the couch, and fell asleep, dreaming of " + toy + " endless chases with his " + object + ".");

