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
// 2-1. The .forEach() Method