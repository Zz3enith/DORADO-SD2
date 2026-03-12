
// Discussion Topic List:

// Arithmetic Operators

// [Section 1: Arithmetic Operators]

let num1 = 10;
let num2 = 5;
let num3 = 3;

// Addition Operator (+
let sum = num1 + num2;
console.log("The sum is: " + sum);
// Subtraction Operator (-)
let diff = num1 - num2;
console.log("The difference is " + diff);
// Multiplication Operator (*)
let prod = num1 * num2;
console.log("The product is " + prod);
// Division Operator (/)
let quot = num1 / num2;
console.log("The quotient is " + quot);

// let modulo = num1 % num2;
// console.log("The modulo is " + modulo);

let modulo = num1 % num3;
console.log("The modulo is " + modulo);





// [SECTION 2]: Assignment Operators

let num4 = 20; 
let num5 = 8; 

// let sum = num4 + num4; = 20 old method

num4+= num4; // new method, it is the same as num4 = num4 + num4
console.log("ASS OPERATOR: " + num4);

num4+= num5; // new method, it is the same as num4 = num4 + num4
console.log("ASS OPERATOR: " + num4);

// Basic Assignment Operator (=)
// Addition Assignment Operator (+=)
// Subtraction Assignment Operator (-=)
// Multiple Operators and Parentheses


// [SECTION 3]: Increment and Decrement

// Increment Operator (++)
// INC [++] 
// PRE INCREMENTATION
let days = 5;
console.log("Original Value: " + days );

++days;
console.log("pre increment1: " + days);

++days;
console.log("pre increment2: " + days);

// POST INCREMENTATION
let months = 4;
console.log("Original Value: " + months);

months++;
console.log("Post increment 1: " + months);

months++;
console.log("Post increment 2: " + months);

// PRE DECREMENT
let days2 = 5;
console.log("Original Value: " + days2 );

--days2;
console.log("pre decrement1: " + days2);

--days2;
console.log("pre decrement2: " + days2);

// POST DECREMENTATION
let months2 = 4;
console.log("Original Value: " + months2);

months2--;
console.log("Post decrement 1: " + months2);

months2--;
console.log("Post decrement 2: " + months2);

// Comparison Operators

let num6 = 10;
let num7 = 12;
let num8 = "10";

// Equality Operator (==)

let equality = num6 == num7; // it will return true because it only checks the value, not the data type
console.log("Equality: " + equality);


let equality2 = num6 == num8; // it will return true because it only checks the value, not the data type
console.log("Equality: " + equality2);

// Strict Equality Operator (===)

let strictEquality = num6 === num7; // it will return false because it checks both the value and the data type
console.log("Strict Equality: " + strictEquality);


let strictEquality2 = num6 === num8; // it will return false because it checks both the value and the data type
console.log("Strict Equality: " + strictEquality2);

// NOT EQUAL

let notEqual1 = num6 != num7; // it will return true because it only checks the value, not the data type
console.log("Not Equal: " + notEqual1);

let notEqual2 = num6 != num8; // it will return true because it only checks the value, not the data type
console.log("Not Equal: " + notEqual1);

let strictNotEqual1 = num6 !== num7; // it will return true because it only checks the value, not the data type
console.log("S-Not Equal: " + strictNotEqual1);

let strictNotEqual2 = num6 !== num8; // it will return true because it only checks the value, not the data type
console.log("S-Not Equal: " + strictNotEqual2);



// [SECTION 4]: Relational Operators

let num9 = 25; 
let num10 = 15;

console.log("GT " + (num9 > num10)); // Greater Than Operator (>)
console.log("GTE " + (num9 >= num10)); // Greater Than or Equal To Operator (>=)
console.log("LT " + (num9 < num10)); // Less Than Operator (<)
console.log("LTE " + (num9 <= num10)); // Less Than or Equal To Operator (<=)


// [SECTION 5]: Logical Operators
let isAdult = true;
let isMarried = false;
let isVoter = true;

// Logical AND Operator (&&)
console.log("Logical AND ", isAdult && isMarried && isVoter);

// Logical OR Operator (||)
console.log("Logical OR ", isAdult || isMarried || isVoter);

// Logical NOT Operator (!)
console.log("Logical NOT ", !isAdult);
console.log("Logical NOT ", !isMarried);
console.log("Logical NOT ", !isVoter);


// [SECTION 6]: Large scale Data Types

// Arrays
// Can Store multiple vallues/elements

let array = [ 10, 20, 30, 40, 50];
let names = ["Anna", "Bob", "Charlie", "David", "Eve"];

console.log(array);
console.log(names);

let mixedArray = [ 10, "Hello", true, 3.14, null, undefined];
console.log(mixedArray); //bad practice

// objects 
// Can store multiple key-value pairs
let user = {
    name: "John Doe",
    grade: 3,
    isEnrolled: true
}

console.log(user);


// SECTION 7: ALERT vs PROMPT 

alert("Hello, World!"); // it will display a message to the user
console.log("Hello");

let completeName = prompt("Please enter your complete name: ");
console.log("Your complete name is: " + completeName);
console.log("Hello " + completeName);

let input1 = parseInt(prompt("Enter the first number: ")) ;
let input2 = parseInt(prompt("Enter the second number: "));

let sum3 = input1  + input2; // it will concatenate the two inputs because they are strings
console.log("The sum is: " + sum3);




// Decrement Operator (--)
// Type Coercion
// Comparison Operators
// Equality Operator (==)
// Inequality Operator (!=)
// Strict Equality Operator (===)
// Strict Inequality Operator (!==)
// Relational Operators
// Greater Than Operator (>)
// Greater Than or Equal To Operator (>=)
// Less Than Operator (<)
// Less Than or Equal To Operator (<=)
// Logical Operators
// Logical AND Operator (&&)
// Logical OR Operator (||)
// Logical NOT Operator (!)

console.log("");