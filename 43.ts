/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with 
the Great added to each magician’s name. */

// Define an array of magicians
let magicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];

// Function to modify magicians array by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push(magician + " the Great");
    }
    return modifiedMagicians;
}

// Function to display magicians
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create a copy of the array of magicians' names
let originalMagicians: string[] = [...magicians];

// Call make_great with a copy of the array of magicians' names
let modifiedMagicians: string[] = make_great([...magicians]);

// Call show_magicians() with each array to show the original names and modified names
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
