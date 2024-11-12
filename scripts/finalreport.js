console.log("finalreport.js");

function convertTemperatureRange() { 
    let startValue = prompt("Enter the starting temperature:"); 
    let endValue = prompt("Enter the ending temperature:");
    let scale = prompt("Enter the scale (C or F):"); 
    
    let results = " ";

    for (let i = startValue; i <= endValue; i++) { 
        let convertedTemp; 
        
        if (scale === "C") { 
            convertedTemp = (i * 9/5) + 32; 
            results += `${i}°C is equal to ${convertedTemp}°F`; 
        } else if (scale === "F") { 
            convertedTemp = (i - 32) * 5/9; 
            results += `${i}°F is equal to ${convertedTemp}°C`; 
        } 
    document.getElementById("answer").innerHTML = results; 
    }
}

convertTemperatureRange();