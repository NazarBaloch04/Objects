// * In Ts objects are used to represent data with key-value paire.
// Each key in the object is a string (a symbol in ES6) that maps to a value
//  Let's consider a real life example of representing a person's  information by using Typescript objects.
var studentInformation = {
    name: "Nazar",
    age: 19,
    isStudent: true,
    address: {
        country: "Pakistan",
        city: "Kashmore"
    }
};
//  How to access the object Data
console.log(studentInformation.address);
//  How to update object Properties
studentInformation.name = "Mazari";
console.log(studentInformation.name);
// Home Work
//  Creeate a product Object
//   Define the product with properties name,  price and quantity. Create a product with following data
//     name: "Laptop"
//     price: 45000
//     quantity: 5
var product = {
    name: "laptop",
    price: 45000,
    quantity: 5
};
console.log(product);
