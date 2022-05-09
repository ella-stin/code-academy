// 1. If Statement
let sale = false;
if (sale){
  console.log('Time to buy!');
}

// 2. If...Else Statements
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
} // Time to wait for a sale.

// 3. Comparison Operators
/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
 */

// 4. Logical Operators
// and : && , or : || , not : !
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} // not bed time yet

// 5. Truthy and Falsy
/** False **
0, Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
 */
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
} // Great! You've started your work!


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
} // This string is definitely empty.

// 6. a short-hand
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
// The marker is mightier than the sword.

// 7. Ternary Operator : to simplify an if...else statement
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');
// true

// 8. Else If Statements
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
} // Slow down.

// 9. The switch keyword
let stopLight = 'yellow';

switch(stopLight) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Slow down.');
        break;
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Caution, unknown!');
        break;
}
