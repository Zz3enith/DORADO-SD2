// console.log("Hello Object");

// Section 21: JavaScript Objects

// They immitate real world descriptions amd real world objects

let arr = [1, 2, 3]; // This is an array literal, which creates an array with the specified elements

let obj = {
    name: "Carlo", 
    age: 22
}


console.log(typeof arr); // This will output "object" because arrays are a type of object in JavaScript
console.log(typeof obj); // This will also output "object" because obj is an object literal

let person = {
    completeName: "John J. Doe", 
    age: 25,
    height: 160,
    weight: 85,
    contactNumber: [0123, 456],
    address: {
        hounseNumber: 0111,
        street: "Main Street",
        city: "Manila",
        country: "Philippines"
    }

}


// DOT NOTATION
console.log(person);


console.log(person.completeName);
console.log(person[`completeName`]); // This is also a valid way to access the property of an object using bracket notation, but it is less common than dot notation

console.log(`Hi my name is ${person.completeName} and I am ${person.age} years old.`);

console.log(person[`completeName`]); // This is also a valid way to access the property of an object using bracket notation, but it is less common than dot notation

// Updating a value by a DOT NOTATION

person.completeName = "JDoe"

console.log(person);
console.log(person.completeName);

// Adding properties to an object
person.gender = "Male"
console.log(person);


// Class ad=nd Objects
// To add properties in a class, use "this" keyword

function Animal(name, breed, kind, color) {
    // constructor
    this.name = name;
    this.kind = kind;
    this.breed = breed;
    this.makeSound = function() {
        if (this.kind == "Dog") {
            console.log("Woof! Arf!");
        } else if (this.kind == "Cat") {
            console.log("Meow Meow!");
        } else {
            console.log("Cannot provide sound for this kind of animal");
        }
    };
    this.color = color;
}

// Instance means the copy or duplicate of a function class

let dog = new Animal ("Bruno", "Aspin", "Dog", "Brown");

console.log(dog);
console.log(dog.name);
dog.makeSound();


let cat = new Animal ("Luna", "Persian", "Cat", "White");

console.log(cat);
console.log(cat.name);
cat.makeSound();

console.log(person.contactNumber[1]);
console.log(person.address.city);

//  SECTION POKEMON OBJECT

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.health = health * level;
    this.mana = mana;


    this.tacle = function(target) { 
        let damage = 20;
        console.log(`${this.name} uses Tackle on ${target.name}!`);
        target.health -= damage;
    }

    this.skill = function(target) {
        if(this.name == "Pikachu") {
            if(this.mana < 50) {
                console.log(`${this.name}'s mana is not enough! MANA ${this.mana}`);
            } else {
            let damage = 150;
            console.log(`${this.name} used THUNDERBOLT`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name} mana: ${this.mana}, ${target.name} health: ${target.health}`);
            }
        } else if (this.name == "Charmander") {
            let damage = 150;
            console.log(`${this.name} used FLAMETHROWER`);
            target.health -= damage;
            this.mana -= 50;
            console.log(`${this.name} mana: ${this.mana}, ${target.name} health: ${target.health}`);
        }
    }

        this.heal = function() {
        let healAmount = 100;
        if (this.health + healAmount > 100 * this.level) {
            this.health = 100 * this.level;
            console.log(`${this.name} is fully healed! Health: ${this.health}`);
        } else {
            this.health += healAmount;
            console.log(`${this.name} healed for ${healAmount} points! Health: ${this.health}`);
        }
    }

// MANA RESTORE FUNCTION
    this.manaRestore = function() {
        let manaAmount = 50;
        if (this.mana + manaAmount > 100) {
            this.mana = 100;
            console.log(`${this.name} is fully restored! Mana: ${this.mana}`);
        } else {
            this.mana += manaAmount;
            console.log(`${this.name} restored ${manaAmount} mana points! Mana: ${this.mana}`);
        }
    }
}




let pikachu = new Pokemon("Pikachu", 5, 100, 100)
console.log(pikachu);

let charmander = new Pokemon("Charmander", 5, 100, 100)
console.log(charmander);



console.log("\n=== BATTLE BEGINS ===");
// pikachu.tacle(charmander);
// pikachu.tacle(charmander);

// charmander.tacle(pikachu);


charmander.skill(pikachu);
charmander.skill(pikachu);
charmander.skill(pikachu);

pikachu.skill(charmander);
pikachu.skill(charmander);
pikachu.skill(charmander);


pikachu.heal();

pikachu.heal();

pikachu.heal();



pikachu.manaRestore();
