// 1. Blocks and Scope
// Access both variables 
const city = 'New York City';

function logCitySkyline () {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());
// Output : The stars over the Empire State Building in New York City

// 2. Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());
// Output : Night Sky: The Moon, North Star, and The Milky Way

// 3. Block Scope
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves); // Output : Moonlight
  }
  
  logVisibleLightWaves();
  console.log(lightWaves); // ReferenceError

// 4. Scope Pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // Night Sky: The Moon, Sirius, The Milky Way
console.log(stars); // Sirius

// 5. Review
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves); // Northern Lights
    } 
    console.log(lightWaves); // Moonlight
  };
  
  logVisibleLightWaves();