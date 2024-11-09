console.log("assignment3.js");

function convertTemperature() { 
    let temperature = prompt("Enter the temperature:"); 
    const scale = document.getElementById('scale').value; 
    let convertedTemp; 
        
    if (scale === "C") { 
        convertedTemp = (temperature * 9/5) + 32; 
        document.getElementById('result').innerText = `${temperature}°C is equal to ${convertedTemp.toFixed(2)}°F`; 
    } else if (scale === "F") { convertedTemp = (temperature - 32) * 5/9; 
        document.getElementById('result').innerText = `${temperature}°F is equal to ${convertedTemp.toFixed(2)}°C`; 
    } else { 
        document.getElementById('result').innerText = "Please select a valid scale."; 
    } 
    setThermometer(temperature); 
} 