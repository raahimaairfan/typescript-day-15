/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time. */

function makeSandwich(...items: string[]) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("-----------------");
}

// Call the function three times with a different number of arguments each time
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese", "Tomato", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
