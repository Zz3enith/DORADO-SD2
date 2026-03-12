// Mini Act
//  Using Prompt covert Celcius to Kelvin
//  Present Output using alert

let celcius = parseInt(prompt("Enter Celcius: ")) ;
let kelvin = celcius + 273.15;
alert("The temperature " + celcius + "°C in Kelvin is: " + kelvin + " K.");

console.log(celcius + "°C in Kelvin is: " + kelvin + " K.");

//  Mini Act2 
// Using Prompt get circle area 
//  Present the output using alert 

let pie = 3.14159;
let radius = parseInt(prompt("Enter the radius of the circle: "));
let area = pie * radius * radius;
alert("The area of the circle is: " + area);
console.log("The area of the circle with a radius of " + radius + " is: " + area);