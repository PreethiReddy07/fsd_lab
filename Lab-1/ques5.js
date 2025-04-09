
const temperatureConverter = {
    // Method to convert Fahrenheit to Celsius
    toCelsius: function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    // Method to convert Celsius to Fahrenheit
    toFahrenheit: function (celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

let tempValue = parseFloat(prompt("Enter the temperature value:"));
let unit = prompt("Enter the unit of the temperature (C for Celsius, F for Fahrenheit):").toUpperCase();


let result;

if (unit === "C") {

    result = temperatureConverter.toFahrenheit(tempValue);
    console.log(`${tempValue}°C is equal to ${result.toFixed(2)}°F`);
}

else if (unit === "F") {
    result = temperatureConverter.toCelsius(tempValue);
    console.log(`${tempValue}°F is equal to ${result.toFixed(2)}°C`);
}

else {
    console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
}
