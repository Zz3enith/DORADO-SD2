let friends = []; // This is an empty array literal, which creates an empty array

function showFriends() {
if(friends.length <= 0) {
    console.log("You do not have friends yet.");
} else {
    console.log("Your friends are: " + friends);
}
}

// function addFriend(name) {
//     friends.push(name.toLocaleUpperCase()); // Adding a new friend to the array using push() method and converting the name to uppercase
//     console.log(name + " has been added to your friends list.");
// }

function addFriends(name) {
    let checkFriend = friends.includes(name.toLocaleUpperCase()); // Checking if the friend already exists in the array using includes() method and converting the name to uppercase

    if(checkFriend == true) {
        console.log(`${name.toLocaleUpperCase()} is already in your friends list.`);
    } else {
        friends.push(name.toLocaleUpperCase());
        console.log(`You Added ${name.toLocaleUpperCase()} to your friends list.`);
    }
}

// FUNCTION UNFRIEND() is used to remove a specific friend from the array
function unfriend(name) {
    let checkFriend = friends.includes(name.toLocaleUpperCase()); 

    if(checkFriend == true) {
        friends.splice(friends.indexOf(name.toLocaleUpperCase()), 1); 
        console.log(`${name.toLocaleUpperCase()} has been removed from your friends list.`);
    } else {
        console.log(`${name.toLocaleUpperCase()} is not in your friends list.`);
    }
}

