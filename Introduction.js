// 1. Arithmetic Operators
// Add: +, Subtract: -, Multiply: *, Divide: /, Remainder: % (나머지)

console.log(3 + 4); //  7
console.log(5 - 1); //  4
console.log(4 * 2); //  8
console.log(9 / 3); //  3
console.log(11 % 3); //  2
console.log(12 % 3); //  0

// 2. String Concatenation
console.log('Hello' + 'World'); // HelloWorld
console.log('Hello' + ' ' + 'World'); // Hello World

// 3. Properties
console.log('Hello'.length); // 5

// 4. Methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'); // Codecademy 
console.log('Codecademy'.toUpperCase()); // CODECADEMY
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '); //     Remove whitespace
console.log('    Remove whitespace   '.trim()); // Remove whitespace

// 5. Built-in Objects
console.log(Math.random()*100); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 100)); // 내림
console.log(Math.ceil(43.8)); // 44 올림
console.log(Number.isInteger(2017)); // true

const floor = Math.random() * 100;
console.log(floor); // 랜덤
console.log(Math.floor(floor)); // 내림

// 6. Mathematical Assignment Operators
let w = 4;
w += 1;
console.log(w); // 5

let x = 20;
x -= 5; // x = x - 5
console.log(x); // 15
 
let y = 50;
y *= 2; // y = y * 2
console.log(y); // 100
 
let z = 8;
z /= 2; // z = z / 2
console.log(z); // 4

// 7. The Increment and Decrement Operator : 1씩 증가/감소
let a = 10;
a++;
console.log(a); // 11

let b = 20;
b--;
console.log(b); // 19

// 8. typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // string
 
const unknown2 = 10;
console.log(typeof unknown2); // number
 
const unknown3 = true; 
console.log(typeof unknown3); // boolean