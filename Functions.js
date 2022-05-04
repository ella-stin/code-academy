// 1. Function Declarations
getReminder(); // Output : Water the plants.

function getReminder() {
  console.log('Water the plants.');
}

greetInSpanish(); // Output : Buenas Tardes.

function greetInSpanish() {
  console.log('Buenas Tardes.');
}

// 2. Calling a Function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  sayThanks(); // Output : Thank you for your purchase! We appreciate your business.
  sayThanks(); // Output : Thank you for your purchase! We appreciate your business.
  sayThanks(); // Output : Thank you for your purchase! We appreciate your business.

  // 3. Parameters and Arguments
  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole'); // Output : Thank you for your purchase Cole! We appreciate your business.

// 4. Default Parameters
function greeting (name = 'stranger') { // default value = stranger
    console.log(`Hello, ${name}!`);
  }
   
  greeting('Nick'); // Output: Hello, Nick!
  greeting(); // Output: Hello, stranger!

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}.`);
    console.log(`Remember to buy ${item2}.`);
    console.log(`Remember to buy ${item3}.`);
  }
  
  makeShoppingList();

  /* Output :
     Remember to buy milk.
     Remember to buy bread.
     Remember to buy eggs. */

// 5. Return
function monitorCount(rows, columns) {
  return rows * columns; 
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors); // Output : 20

// 6. Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost); // Output : 4000

// 7. Function Expressions
const plantNeedsWater = function (day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}

console.log(plantNeedsWater('Tuesday')); // Output : false

// 8. Arrow Functions
const plantNeedsWater = day => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// 9. Concise Body Arrow Functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


