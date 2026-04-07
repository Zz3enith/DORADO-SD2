// console.log("HELLOOOOO");

// [Section] Array 
//  An Array is also a storage for multiple elements/values 
//  The best practice is values/elements stored in an array should be of the same data type


let pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

console.log(pokemon);

console.log(pokemon[0]); // Accessing the first element of the array
console.log(pokemon[1]); // Accessing the second element of the array
console.log(pokemon[2]); // Accessing the third element of the array
console.log(pokemon[3]); // Accessing the fourth element of the array
console.log(pokemon[4]); // Accessing an index that does not exist will return undefined


console.log(`My favorite Pokemon is ${pokemon[0]}.`); // Using template literals to access array elements
console.log(`My favorite Pokemon is ${pokemon[0].toLocaleUpperCase()}.`); // Using template literals to access array elements

console.log(pokemon.length); // Length of the array, which is the total number of elements in the array

//  Array Mutation 
//  Modifying Array Elements

pokemon[4] = "Eevee"; // Adding a new element to the array at index 4
console.log(pokemon);
console.log(pokemon.length);

pokemon[2] = "Charmeleon"; // Modifying an existing element in the array at index 2
console.log(pokemon);
console.log(pokemon.length);


pokemon[10] = "Mewtwo"; // Adding a new element to the array at index 10, which creates empty slots in between
console.log(pokemon);
console.log(pokemon.length);


// Adding a new element to the end of the array using the length property
console.log(pokemon.length); 
pokemon[pokemon.length] = "Mew"; // Adding a new element to the end of the array using the length property
console.log(pokemon);
console.log(pokemon.length);

// Access the last elements of the Array
console.log(pokemon[pokemon.length - 1]); // Accessing the last element of the array using length property

// MOdern Mutation Methods  

let fruits = ["Apple", "Banana", "Cherry"]; 

// push() method is used to add new elements to the end of the array and it mutates the original array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("After push: " + fruits);


// pop() method is used to remove the last element of the array and it mutates the original array
console.log("Original Array: " + fruits);
fruits.pop();
// fruits.pop();
console.log("After pop: " + fruits);

// unshift() method is used to add new elements to the beginning of the array and it mutates the original array
console.log("Original Array: " + fruits);
fruits.unshift("Orange");
console.log("After unshift: " + fruits);

// fruits.unshift("Grapes, Melon, Kiwi");
// console.log("After Unshift: " + fruits);

// Shift() method is used to remove the first element of the array and it mutates the original array
    // fruits.shift();
    // fruits.shift();
    console.log("Shift Method: " + fruits);

// sort() method is used to sort the elements of the array in alphabetical order and it mutates the original array
fruits.sort();
console.log(fruits);

// reverse() method is used to reverse the order of the elements in the array and it mutates the original array
fruits.reverse();
console.log(fruits);

// splice() method is used to add or remove elements from the array and it mutates the original array
fruits.splice(1, 2, "Blueberry"); // Remove one element at index 2 and add "Blueberry"
console.log(fruits);

fruits.splice(1, 1); // Remove one element at index 1
console.log(fruits);

// forEach() method is used to execute a provided function once for each array element and it mutates the original array
// it reads each elements inside an array

fruits.forEach((x) => {
    console.log(x);
})