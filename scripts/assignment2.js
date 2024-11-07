function temperature() {
    let celsius = prompt("Enter the temperature in Celsius"); 
    let fahrenheit = (celsius * 9/5) + 32; 
    document.getElementById("result").innerHTML=("The temperature in Fahrenheit is "+fahrenheit+"°F.");    
}