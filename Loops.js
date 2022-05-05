// 1. Repeating Tasks Manually
const vacationSpots = ['Korea', 'China', 'Europe'];

console.log(vacationSpots[0]); // Korea
console.log(vacationSpots[1]); // China
console.log(vacationSpots[2]); // Europe

// 2. The For Loop : 초기값, 조건, 증감식
for(let i = 5; i < 11; i++){
    console.log(i);
  }

// 3. Looping in Reverse
for (let i = 3; i >= 0; i--){
    console.log(i);
  }

// 4. Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}
/* 
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
*/

//5. Nested Loops
const bobsFollowers = ['John', 'Josh', 'Tom', 'Chris'];

const tinasFollowers = ['Elina', 'Tom', 'Chris'];

const mutualFollowers = new Array();

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
    mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers); // [ 'Tom', 'Chris' ]

// 6. The While Loop : 조건, 무한루프 가능
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
} // 랜덤으로 카드를 뽑다가 currentCard가 spade가 될 때까지 루프를 돈다

// 7. Do...While Statements : 최소 한번은 코드를 실행시키고 while의 조건에 따라 반복여부 결정
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  console.log(cupsAdded);
  cupsAdded += 1;
} while (cupsAdded < cupsOfSugarNeeded);

/* 
0
1
2 */

// 8. The break Keyword : exit the loop
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
} 
/*
Lil' Kim
Jay-Z
Notorious B.I.G.
*/
