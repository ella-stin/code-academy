// Naming to be able to quickly guess what the function does

// 1. Higher-order functions
// 1-1. Functions as Data : Since functions are a type of object, they can have properties and methods.
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  console.log(isTwoPlusTwo.name); // checkThatTwoPlusTwoEqualsFourAMillionTimes

  // 1-2. Functions as Parameters
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
      return checkB;
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 3)); // 5
 
// 2. ITERATORS (The built-in JavaScript array methods) 
// 2-1. The .forEach() Method : execute the same code for each element of an array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// use arrow function
fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`));

// use callback function
function printFruits(name){
  console.log(`I want to eat a ${name}`);
}

fruits.forEach(printFruits);

/*
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple */

// 2-2. The .map() Method : return a new array + callback function을 매개변수로
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join('')); // HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => num / 100);

console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]

// 2-3. The .filter() Method : return a new array of elements after filtering out certain elements from the original array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => num < 250);

console.log(smallNumbers); // [ 200, 3.14, 7, 13 ]

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log(longFavoriteWords); // [ 'nostalgia', 'hyperbole', 'esoteric' ]

// 2-4. The .findIndex() Method : return the index of the first element
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');

console.log(foundAnimal); // 7

const startsWithS = animals.findIndex(animal => animal[0] === 's');

console.log(startsWithS); // 3

// 2-5. The .reduce() Method : return a single value, two arguments, the first argument is the callback function
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});

console.log(newSum);

/*
The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16 */

// second argument
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue)=>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
/*
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26 */

// 2-6. The .some() method : 배열의 한 요소라도 주어진 펑션의 조건을 만족하는지에 따라 true or false return
// 2-7. The .every() method : 배열의 모든 요소가 주어진 펑션의 조건을 만족하는지에 따라 true or false return
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
})); // true

const interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} )); // true

// 2-8. Quiz
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

console.log(longCities); // [ 'Edinburgh', 'Eskisehir', 'Medellin', 'Yokohama' ]
// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word); // CODECADEMY

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

console.log(smallerNums); // [ -4, 45, 70, 195, 345, 520, 995 ]
// Choose a method that will return a boolean value
const smallerZero = nums.some(num => num < 0);

console.log(smallerZero); // false
