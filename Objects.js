// 1. Creating Object Literals
let fasterShip = {
    color : 'silver',
    'Fuel Type': 'Turbo Fuel'
  };

// 2. Accessing Properties
// 2-1. Dot notation
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  const crewCount = spaceship.numCrew;
  const planetArray = spaceship.flightPath;

// 2-2. Bracket Notation []
// When accessing keys that have numbers, spaces, or special characters in them.
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  const isActive = spaceship['Active Mission'];
  console.log(spaceship[propName]); // true

// 3. Property Assignment
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship.color = 'glorious gold'; // reassign the property
  spaceship.numEngines = 7; // add new property
  
  delete spaceship['Secret Mission'];

// 4. Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();

// 5. Nested Objects
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  const capFave = spaceship.crew.captain['favorite foods'][0];
  
  spaceship.passengers = [{
    name : 'Tom',
    age : 20
  }]
  
  let firstPassenger = spaceship.passengers[0];
  firstPassenger = {name: 'Chris', age : 32};
  spaceship.passengers.push(firstPassenger);
  console.log(spaceship.passengers); // [ { name: 'Tom', age: 20 }, { name: 'Chris', age: 32 } ]

// 6. Pass By Reference
let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceship) // The attempt at reassignment does not work.
  console.log(spaceship); // {homePlanet : 'Earth', color : 'red'};

let fasterShip = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
  
  let remotelyDisable = obj => obj.disabled = true;
  
  greenEnergy(fasterShip);
  remotelyDisable(fasterShip);
  
  console.log(fasterShip);
/*
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }
*/  

// 7. Looping Through Objects : for...in
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for(let crew in spaceship.crew) {
  console.log(`${crew}: ${spaceship.crew[crew].name}`)
}
/*
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna
*/
for(let crew in spaceship.crew) {
  console.log(`${spaceship.crew[crew].name}: ${spaceship.crew[crew].degree}`)
}
/*
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science
*/

// 8. The this Keyword
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  }
};

console.log(robot.provideInfo()); // I am 1E78V2 and my current energy level is 100

// 9. Arrow Functions and this
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy(); //Energy is currently at undefined%.

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy(); // Energy is currently at 100%.

// 10. Privacy : one of the naming conventions to mean that the property should not be altered
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
console.log(robot.recharge()); 
// Recharged! Energy is currently at high30%.
// undefined

// 11. Getters : methods that get and return the internal properties of an object
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if(typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel); // My current energy level is 100

// 12. Setters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors); // 100

// 13. Factory Functions : return an object and can be reused to make multiple object instances
const robotFactory = (model, mobile) => {
  return {
    model : model,
    mobile : mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);

tinCan.beep(); // Beep Boop

// 14. Property Value Shorthand
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model); // P-501
console.log(newRobot.mobile); // false

// 15. Destructured Assignment
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
functionality.beep(); // Beep Boop

// 16. Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys); // [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries); // [ [ 'model', 'SAL-1000' ], [ 'mobile', true ], [ 'sentient', false ], [ 'armor', 'Steel-plated' ], [ 'energyLevel', 75 ] ]

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/*
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 } */