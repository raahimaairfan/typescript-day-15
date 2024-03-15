/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]) {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2023]);

// Print the object returned to ensure all information was stored correctly
console.log(myCar);