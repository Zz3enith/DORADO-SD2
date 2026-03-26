// console.log("Hello!");

// [Section] Functions with parameters

/*
SYNTAX:

function functionName (params1. params1, ...) {
    // code block

}
*/


function greeting() {
    let userInput = prompt("Please enter your name:");

    console.log("Hello " + userInput);
}

// greeting(); is a sample function calling using basic function without parameters

// Function with parameters
// (name) is the parameter of the function
// Parameters acts as a storage or variable for a specific function.
function sayHello(name) {
    console.log("Hello from function with parameters, " + name);
}

// sayHello(argument) is to be passed in the function parameter 
sayHello("Alice")

// Multiple Parameters

function completeName(firstName, middleName, lastName) {
        console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);
} 

completeName("Alice", "Smith", "Johnson");
completeName("Alice", "Smith", "Johnson", "Extra Argument"); // Extra argument will be ignored
completeName("Alice", "Smith"); // Missing argument will be undefined

// Functions and return Statement 

function print() {
    console.log("Hello, World!");
    return "Hello, World!"; // Return statement is used to return and hold a value to be passed outside the function
}

print(); // This will print "Hello, World!" to the console but will not return any value)

let sum = function(num1, num2) {
    let total = num1 + num2;
    console.log("Total: " + total);
    return total;
}

sum(10, 15); // This will print "Total: 25" to the console and return the value of 25

if (sum >= 30) {
    console.log("Passed!");
} else {
    console.log("Failed!");
}

let result = sum(20, 15); // This will print "Total: 35" to the console and return the value of 35
console.log("Result: " + result);

function checkRemarks(score) {
        if (score >= 75) {
            console.log("Passed!");
        } else {
            console.log("Better luck next time!");
        }
}

checkRemarks(result); // This will print "Passed!" to the console since the result is 35 which is greater than 75

let registration = function(name, age) {
    if (age <= 70) {
        console.log("Sorry, you cannot register.");
    } else {
        console.log(`${name}, Please proceed to the next step`);
        return age;
    }
}

let value = registration("John doe", 26);
    console.log("Age: " + value);

function checkAge(age){
    if(age <= 17){
        console.log("You cannot proceed!");
    }else if (age <= 30){
        console.log("You can apply for basic account.");
    }else{
        console.log("You can apply for premium account.");
    }
}

checkAge(value);

