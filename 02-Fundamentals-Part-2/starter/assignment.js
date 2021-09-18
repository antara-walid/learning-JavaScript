'use strict'

//**************** functions *********************

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// console.log(describeCountry("Finland", 6, "Helsinki"));


//********** Function Declarations vs. Expressions ***********

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// console.log(percentageOfWorld1(1441));

// let percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// }

// console.log(percentageOfWorld1(1441));


//****************** Arrow Functions ******************

// let percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(percentageOfWorld3(1441));

//*************Functions Calling Other Functions***************

// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world`;
// }

// console.log(describePopulation('China', 1441));

//****************** coding challenge #1 ******************

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const dolphinsAvrg = calcAverage(44, 23, 71);
// const koalasAvrg = calcAverage(65, 54, 49);

// function checkWinner(dolphinsAvrg, koalasAvrg) {
//     if (dolphinsAvrg >= 2 * koalasAvrg)
//         console.log(`dolphins win (${dolphinsAvrg} vs ${koalasAvrg})`);
//     else if (koalasAvrg >= 2 * dolphinsAvrg)
//         console.log(`koalas win (${koalasAvrg} vs ${dolphinsAvrg})`);
//     else
//         console.log(`no one wins (${koalasAvrg} vs ${dolphinsAvrg}) `);
// }

// checkWinner(dolphinsAvrg, koalasAvrg);

// **************** arrow expression  *********************

// const add = (nbr1, nbr2) => nbr1 + nbr2;
// console.log(`the addition is ${add(5, 5)}`);




// ************* intro to arrays *************

// let percentageOfWorld3 = (population) => (population / 7900) * 100;

// const populations = [10, 40, 50, 15];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];

// console.log(percentages);


// ************* Basic Array Operations (Methods) *************

// const neighbours = ['Algeria', 'Moritania'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (neighbours.includes('Germany'))
//     console.log('Probably not a central European country :D');

// neighbours[neighbours.indexOf('Moritania')] = 'the Moritania';

// console.log(neighbours);


//****************** coding challenge #2 ******************

// function calctip(bill) {
//     if ((bill >= 50) && (bill <= 300))
//         return bill * 0.15;
//     else
//         return bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips);
// console.log(total);


//****************** Intro to objects ******************

// const myCountry = {
//     country: "Morocco",
//     capital: "Rabat",
//     language: "Arabic",
//     population: 40,
//     neighbours: ['Algeria', 'Moritania']
// };
// console.log(myCountry.population);
// console.log(myCountry['population']);

//****************** Dot vs. Bracket Notation ******************

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

//****************** object methods ******************

// const myCountry = {
//     country: "Morocco",
//     capital: "Rabat",
//     language: "Arabic",
//     population: 40,
//     neighbours: ['Algeria', 'Moritania'],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
//     },
//     checkIsland: function () {
//         this.isInland = (this.neighbours.length === 0) ? true : false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isInland);


//****************** coding challenge #3 ******************

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// };
// john.calcBMI();
// mark.calcBMI();
// // console.log(mark, john);

// if (john.BMI > mark.BMI)
//     console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})!`);
// else
//     console.log(`${mark.fullName} BMI (${mark.BMI})is higher than ${john.fullName} BMI (${john.BMI})!`);

//****************** coding challenge #4 ******************

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];


// function calctip(bill) {
//     if ((bill >= 50) && (bill <= 300))
//         return bill * 0.15;
//     else
//         return bill * 0.2;
// }


// for (let i = 0; i < bills.length; i++) {
//     tips.push(calctip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }

// console.log(bills, tips, totals);


// // bonus challenge

// function calcAverage(arr) {
//     let somme = 0;
//     for (let i = 0; i < arr.length; i++) {
//         somme += arr[i];
//     }
//     return somme / arr.length;

// }
// const tab = [10, 0, 20];
// console.log(calcAverage(tips));
