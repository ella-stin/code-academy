// 1. Create an Array : array literal
const hobbies = ['soccer', 'volleyball', 'swimming'];

console.log(hobbies); // [ 'soccer', 'volleyball', 'swimming' ]

// 2. Accessing Elements : using index
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem); // Fortune favors the brave.
console.log(famousSayings[2]); // Where there is love there is life.
console.log(famousSayings[3]); // undefined

// 3. Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList); // [ 'bread', 'avocados', 'milk' ]

// 4. Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments); // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo'];

console.log(condiments); // ['Mayo']

utensils[3] = 'Spoon';

console.log(utensils); // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

utensils = ['Spoon'];

console.log(utensils); // TypeError

// 5. The .length property : the number of items in the array
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); // 3

// 6. The .push() Method : to add items to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mopping', 'vacuuming');

console.log(chores); // ['wash dishes', 'do laundry', 'take out trash', 'mopping', 'vacuuming']

// 7. The .pop() Method : to remove the last item of an array
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores); // [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// 8. More Array Methods
// 8-1. .shift() : to remove the first item
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList); // ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

// 8-2. .unshift() : to add elements to the beginning of the array
groceryList.unshift('popcorn');
console.log(groceryList); // ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'] 

// 8-3. .slice() :  a new array object selected from start to end (end not included) + The original array will not be modified.
console.log(groceryList.slice(1,4)); // [ 'bananas', 'coffee beans', 'brown rice' ]

// 8-4. .indexOf() : to find the index of a particular element
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex); // 4

// 9. Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); // [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept); // [ 'arrays', 'can', 'be']

// 10. Nested Arrays : an array contains another array 
const numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1];

console.log(target); // 6