function multiTable() {
    let num = prompt("Enter the table number");
    let result = 0;
    document.write(`<h1>Table of ${num}`);

    for(let i=1;i<11;i++) {
        result = num * i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`);
    }
}
multiTable();

//for(let i=0;1<4;i++){
//    document.write("My for is working?");
//}

//for(let i=2;i<21;i+=2){
//    document.write(`<p> ${i} </p>`);
//}

//ARRAYS
let students = ["Jose","Michael","Samson","Kit","Angel","Jonathan","Andrew"];
let ages = [22,35,20,43,37,33,27];
for(let i = 0; i < 6; i++) {
    document.getElementById("studentList").innerHTML += `
    <tr>
        <td> ${i+1} </td>
        <td> ${students[i]} </td>
        <td> ${ages[i]} </td>
    </tr>`;
}
