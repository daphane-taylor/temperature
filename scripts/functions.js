console.log("functions.js");

//creating the function
function multiplyThree(num) {
    return num * 3;
}

//trigger/run/execute
console.log(multiplyThree(4));//12
console.log(multiplyThree(2));//6
console.log(multiplyThree(5));//15


function sum(num1,num2) {
    return num1 + num1;
}
let result = sum(10,3);
console.log(result);



let sum2 = function() {
    console.log(3+3);
}
sum2();



//let total = 0;
//let productName = prompt("Enter the product name:");
//let productPrice = prompt("Enter the price:");
//function addCart(price) {
//    total = total + price;
//    return total;
//}
//total = addCart(productPrice);
//console.log(total);
//total = addCart(400);
//console.log(total);
//total = addCart(600);
//console.log(total);

//function calculateTaxes(total) {
//   return 1.11 * total;
//}

//document.write("<p>" + productName + " "  + calculateTaxes(total).toFixed(2) + '</p>');


//challenge one
function doubleNumber(num) {
    console.log(num*2);
    return num * 2;
}

doubleNumber(4);
doubleNumber(10);


//challenge two
function combineNames(firstName="unknown",lastName="unknown") {
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}

combineNames("Daphane","Taylor");
combineNames();


//challenge three
function convertToSeconds(minutes) {
    console.log(minutes * 60);
    return minutes * 60;
}

convertToSeconds(5);
convertToSeconds(10);

function addProduct() {
    let prodName = prompt("Enter the product name: ");

    document.getElementById("list").innerHTML+=`<p> ${prodName} </p>`;
}