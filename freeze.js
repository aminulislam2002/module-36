const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle); // Object.keys() return all properties name from an object
// console.log(keys);
const values = Object.values(bottle); // Object.values() return all properties values from an object
// console.log(values);
const pair = Object.entries(bottle); // Object.entries() return an array of key/values of the enumerable properties of an object
// console.log(pair);

// const twoDimension = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]]

console.log(bottle);
// Object.seal(bottle); // if use Object.seal() , then cannot delete and add properties but can change properties value
Object.freeze(bottle); // if use Object.freeze() , then cannot delete, add properties and can not change properties value
delete bottle.isCleaned; // delete isCleanded property from bottle object
bottle.price = 1000; // change price value from bottol object
bottle.height = 12; // add properties and value from bottle object
console.log(bottle);
