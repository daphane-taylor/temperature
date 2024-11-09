console.log("if-statements");

//------- if statement -------
//if(condition){
//code to be executed if condition is true
//}
//--------------------------------------
if(3>1){
    console.log("I am inside the if statement");
}

let student1 = 45;
let student2 = 45;

if(student1 == student2){
    console.log("Both are the same");
}

//------- if statement -------
//if(condition){
//code to be executed if condition is true
//}else{
//  code to be executed if condition is false
//}
//-------------------------------------
let isTrue = true;

if(isTrue) {
    console.log("Yes");
}else{
    console.log("No");
}

//------- challenge one -------
let age = 21;

if(age>=21){
    console.log("You are an adult");
} else {
    console.log("You are underage");
}
//-------------------------------------
//--- if-else if-else statements ---
//if(condition){
//  code to be executed if condition is true;
//} else if(condition2){
//  code to be executed if condition is true;
//}else {
//  code to be executed if condition is false;
//}
//------------------------------------
age = 75;

if(age<13){
    console.log("Child");
} else if(age<20){
    console.log("Teenager");
}else if(age<64){
    console.log("Adult");
} else {
    console.log("Senior");
}

//-----------------------------------
let week = new Date().getDay();

if(week == 1){
    console.log("Monday");
}else if(week == 2){
    console.log("Tuesday");
}else if(week == 3){
    console.log("Wednnesday");
}else if(week == 4){
    console.log("Thursday")
}else if(week == 5){
    console.log("Friday")    
}else if(week == 6){
    console.log("Saturday")
}else if(week == 7){
    console.log("Sunday")
}else{
    console.log("Invalid");
}

//-----------------------------------
//challenge 4
function ticketCalculator() {
    let age = prompt("What is your age");
    let price;
    if(age<12) {
        price = 5;
    } else if(age<18){
        price = 8;
    } else {
        price = 10;    
    }

    console.log("Your ticket price is $: " + price);
}

//------------------------------------
//challenge 5
function  weatherCalculator() {
    let temp = prompt("Whats the current temperature outside?");
    let outfit;
    if(temp<15) {
        outfit = "jacket";
        document.getElementById("weather").classList.add("cold");
    } else if(temp<25){
        outfit = "sweater";
    } else {
        outfit = "t-shirt";
        document.getElementById("weather").classList.add("hot");
    }
document.getElementById("weather").innerHTML="You should wear : " + outfit;
}