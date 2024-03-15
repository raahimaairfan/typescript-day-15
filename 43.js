/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with
the Great added to each magician’s name. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of magicians
var magicians = ["Merlin", "Gandalf", "Harry Potter"];
// Function to modify magicians array by adding "the Great" to each magician's name
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        modifiedMagicians.push(magician + " the Great");
    }
    return modifiedMagicians;
}
// Function to display magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Create a copy of the array of magicians' names
var originalMagicians = __spreadArray([], magicians, true);
// Call make_great with a copy of the array of magicians' names
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Call show_magicians() with each array to show the original names and modified names
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
