'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orederDelivery: function ({
    time = 'no time',
    adress = 'no adress',
    mainIndex = 0,
  }) {
    console.log(
      `you ordered ${this.starterMenu[mainIndex]} , at ${time} the ordere will be delivered to ${adress}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`you ordered past with ${ing1},${ing2},${ing3}`);
  },
};

// ****************** 1.destructuring arrays ******************
// const arr = [4, 2, 1];
// const [a, b, c] = arr;
// console.log(a, b, c);

// const [first, second] = restaurant.categories;
// console.log(first, second);
// const [first, , third] = restaurant.categories;
// console.log(first, third);

// switching variables
// let a = 5;
// let b = 1;
// [a, b] = [b, a];
// console.log(a, b); // a=1 b=5

// recieve 2 return values from a function
// const [main, starter] = restaurant.order(1, 2);
// console.log('your order is:');
// console.log(main, starter);

// nested array

// const nested = [1, 2, [3, 4]];
// // const [x, , y] = nested;
// // console.log(x, y);

// const [x, , [y, z]] = nested;
// console.log(x, y, z);

// default values
// const array = [1, 2];
// const [i = 1, j = 1, k = 1] = array;
// console.log(i, j, k);

// ****************** 1.destructuring arrays ******************
// const { name, categories } = restaurant;

// console.log(name, categories);
// const { name: restoName, categories: restoCategories } = restaurant;
// console.log(restoName, restoCategories);

// const {
//   menu: myMenu = [],
//   name: restoName = [],
//   categories: restoCategories,
// } = restaurant;

// console.log(myMenu, restoName);

// mutating variables
// let a = 1;
// let b = 2;

// const obj = { a: 44, b: 55, c: 99 };
// ({ a, b } = obj);
// console.log(a, b);

// ***nested objects

// const {
//   fri: { open: openH, close: closeH },
// } = restaurant.openingHours;
// console.log(openH, closeH);

// restaurant.orederDelivery({
//   time: '8:00',
//   adress: 'bouki',
//   mainIndex: 3,
// });
// restaurant.orederDelivery({
//   time: '8:00',

//   mainIndex: 1,
// });

// ****** the spread operator *********

// const arr = [1, 2, 3];
// const newArr = [-1, 0, ...arr];
// console.log(newArr);
// console.log(...newArr);

// //**** copy an array

// const arrCopy = [...arr];
// //**** merge arrays
// const arrMerge = [...arr, ...newArr];

// console.log(arrCopy, arrMerge);

// const ingredients = [
// prompt('lets make pasta ingredient 1 ?'),
// prompt('ingredient 2'),
// prompt('ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

// rest pattern

// const [a, b, ...tab] = [1, 2, 3, 4, 5];
// console.log(a, b, tab);

// // for objects

// const { sat: weekend, ...restOfTheWeek } = restaurant.openingHours;
// console.log(restOfTheWeek);

// for functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(1, 2, 3);
// add(0, 2);
// add(0, 0, 0, 0, 0, 0, 2, 1);

// const arr2 = [1, 2, 3];
// add(...arr2);

// const nbrOfGuests = restaurant.test || 5;
// console.log(nbrOfGuests);

// const a = null ?? 0;
// console.log(a);

//*********coding challenge****************

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// question 1

// const [...players1] = [...game.players[0]];
// const [...players2] = [...game.players[1]];
// const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

//question 2

// const [gk, ...fieldPlayers] = [...game.players[0]];
// console.log(gk, fieldPlayers);

//question 3

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

//question 4

// const players1Final = [
//   ...game.players[0],
//   'thiago',
//   'couthinho',
//   'perisic',
// ];
// console.log(players1Final);

// question 5

// const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { teama, x: draw, team2 },
// } = game;
// console.log(draw);

// console.log(team1, draw, team2);

// question 6

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(players.length);
// };

// printGoals('Davies', 'Muller', 'lewandowski', 'kimmich');
// printGoals(...game.scored);

// question 7

// console.log(Math.trunc(team2 / team1) || 'team2');
// console.log(Math.trunc(team1 / team2) || 'team1');

// **** the for of loop
// const tab = [...game.scored];
// // for (const item of tab) console.log(item);
// for (const item of tab.entries()) console.log(item);
// for (const [i, el] of tab.entries()) {
//   console.log(`${i}: ${el}`);
// }

// console.log(restaurant.openingHours.mon?.open);

//

// console.log(restaurant.order?.(0, 1) ?? 'methode does not existe');

//*******loping objects***** */
// keys
// const keys = Object.keys(game.odds);
// // console.log(keys); // create a table
// for (const item of keys) {
//   console.log(item);
// }

// // values
// const values = Object.values(game.odds);
// for (const item of values) {
//   console.log(item);
// }

// // entries

// const entries = Object.entries(game.odds);
// // console.log(entries);
// for (const [key, value] of entries) {
//   console.log(key + ': ' + value);
// }

// // an other example
// const entries2 = Object.entries(restaurant.openingHours);
// for (const [day, { open, close }] of entries2) {
//   console.log(`we open every ${day} at ${open} and we close at ${close} `);
// }

// ******************coding challenge number#2  *****************

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Question 1
// for (const [index, value] of game.scored.entries()) {
//   console.log(`goal ${index + 1} : ${value}`);
// }

// Question 2
// let sum = 0;
// let oddsNbr = 0;
// for (const value of Object.values(game.odds)) {
//   sum += value;
//   oddsNbr++;
// }
// console.log(oddsNbr);
// console.log(`the average is ${sum / oddsNbr}`);

//Question 3
// const entries = Object.entries(game.odds);
// for (const [team, odd] of entries) {
//   console.log(`odd of victory ${game[team] ?? 'draw'} : ${odd}`);
// }

//Question 4

// const scorers = {};

// for (const value of game.scored) {
//   if (!scorers?.[value]) scorers[value] = 1;
//   else scorers[value]++;
// }
// console.log(scorers);

//************sets ****************** *

//defining a set

// const foodSet = new Set(['tajin', 'couscous', 'tajin']);
// console.log(foodSet);
// console.log(foodSet.size);
// console.log(foodSet.has('tajin'));

// foodSet.add('pizza');
// // foodSet.delete('pizza');
// // foodSet.clear();
// console.log(foodSet);

//************ Maps ****************** *

// const rest = new Map();
// filling the map
// rest.set(1, 'helloWorld').set(true, 'we are open').set(false, 'we are closed');
// console.log(rest);

// getting the data from the map

// console.log(rest.get(true));

// console.log(rest.has(true));

// an other methode for creating maps
// const questions = new Map([
//   ['question', 'what is the best programmig language'],
//   [1, 'c#'],
//   [2, 'java'],
//   ['correct', 1],
//   [true, 'it is correct'],
//   [false, 'it is false'],
// ]);

// console.log(questions);

//convert objects to maps
// const gameMap = new Map(Object.entries(game));
// console.log(gameMap);

// lopping a map

// for (const [key, value] of questions) {
//   if (typeof key === 'number') console.log(`${key} :${value}`);
// }
// const answer = prompt('chose a number');

// const answerCorr = Number(answer) === questions.get('correct');
// console.log(questions.get(answerCorr));

//**************coding challenge#3*********************
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // question 1
// const gameEventsSet = new Set([]);
// for (const [key, value] of gameEvents) {
//   gameEventsSet.add(value);
// }
// // console.log(gameEventsSet);
// const gameEventsArr = [...gameEventsSet];
// console.log(gameEventsArr);

// // question 2

// gameEvents.delete(64);
// console.log(gameEvents);

// // quetion 3

// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// //question 4

// for (const [key, value] of gameEvents) {
//   console.log(
//     `${key <= 45 ? '[first half]' : '[seconde half]'} ${key} : ${value}`
//   );
// }

//************ strings *****************
// const airline = 'Tap air portugal';
// const plane = 'A320';

// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('air'));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// // console.log(airline.slice(airline.lastIndexOf('p'), airline.length));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   if (seat.indexOf('A') != -1 || seat.indexOf('E') != -1)
//     console.log('middle seat');
//   else console.log('none');
// };

// checkMiddleSeat('21A');
// checkMiddleSeat('21B');
// checkMiddleSeat('21C');
// checkMiddleSeat('21E');

// console.log('walid'.toUpperCase());

//fix capitalization in a name
// const nameOfP = 'wAlId';
// const fixName = function (nameOfP) {
//   nameOfP = nameOfP.toLowerCase();
//   const C = nameOfP.slice(0, 1).toUpperCase();
//   nameOfP = C + nameOfP.slice(1);
//   console.log(nameOfP);
// };

// fixName(nameOfP);

// normalize email

// let email = '    walId@heLlo.io.io \n';
// email = email.toLowerCase().trim();

// console.log(email.replaceAll('.io', '.com'));
// console.log(email.replaceAll(/.io/g, '.com'));

//split and join
// const myName = 'walid waliddd';

// const [firstName, LastName] = myName.split(' ');
// // console.log(firstName, LastName);
// console.log([firstName, LastName].join('---'));

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   // console.log(names);
//   const newNames = [];
//   for (const n of names) {
//     // console.log(n[0]);
//     // newNames.push(n[0].toUpperCase() + n.slice(1));
//     newNames.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(newNames.join(' '));
// };
// capitalizeName('jhon snow');

//******** padding  */

// const maskNumber = function (num) {
//   // const num = String(num);
//   const numS = num + '';
//   console.log(numS);
//   console.log(numS.slice(-4).padStart(numS.length, '*'));
// };

// maskNumber(198297432234567890);

//*******coding challenge 4 *************
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
//functions
const makeCamel = function (text) {
  text = text.toLowerCase();
  const phrase = text.split('\n');
  let phrase2 = [];
  let words = [];
  // console.log(phrase);
  //split the phrase
  for (const n of phrase) {
    words.push(n.trim().split('_'));
  }
  // console.log(words);
  // join and capitalize the phrase
  for (const [i, n] of words.entries()) {
    // console.log(n);
    let [a, b] = n;
    b = b.replace(b[0], b[0].toUpperCase());
    let merge = n[0] + b;
    merge = merge.padEnd(25, ' ') + '✅'.repeat(i + 1);
    phrase2.push(merge);
  }

  // console.log(phrase2);
  const result = phrase2.join('\n');
  console.log(result);
};
// event hunder
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  makeCamel(text);
});

// makeCamel(`hello_walid
// heellllloo_wjdkj`);
