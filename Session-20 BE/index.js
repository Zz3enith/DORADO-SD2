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