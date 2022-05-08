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
