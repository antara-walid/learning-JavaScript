'use strict';

// **** default parameter ******
// const flights = [];
// const booking = function (
//   nbrOfFlight = 1,
//   numPassegenrs = 20,
//   price = 100 * numPassegenrs
// ) {
//   const flight = {
//     nbrOfFlight,
//     numPassegenrs,
//     price,
//   };
//   console.log(flight);
//   flights.push(flight);
// };

// booking('uf12', undefined, 5000);

// ***** higher order functions

// const oneWord = function (str) {
//   str = str.replace(/ /g, '').toLowerCase();
//   return str;
// };

// const upperFirstWorld = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // *********higher order function********

// // const transformer = function (str, fct) {
// //   console.log(fct(str));
// // };
// // // test
// // transformer('hello world', oneWord);
// // transformer('hello world', upperFirstWorld);

// // my example
// // addition
// // const add = function (nbr1, nbr2) {
// //   return nbr1 + nbr2;
// // };
// // const multiply = function (nbr1, nbr2) {
// //   return nbr1 * nbr2;
// // };

// // const calculate = function (nbr1, nbr2, fct) {
// //   return fct(nbr1, nbr2);
// // };
// // // test
// // console.log(calculate(10, 2, add));
// // console.log(calculate(10, 2, multiply));

// // ******** fucntions returning other functions********

// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// // greet('hello')('walid');

// //*********** the call and apply methode **********

// const RAM = {
//   airline: 'RoyalAirMaroc',
//   iatacode: 'RAM',
//   bookings: [],
//   book: function (flightNbr, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNbr} `
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightNbr}`, name: name });
//   },
// };
// // test
// // RAM.book(12, 'walid');
// // console.log(RAM);

// const arabia = {
//   airline: 'Arabia',
//   iatacode: 'Ar',
//   bookings: [],
// };

// const book = RAM.book;
// // book.call(arabia, 17, 'walid');
// // book.call(arabia, 19, 'zakaria');
// // console.log(arabia);

// // ******* bind methode ******
// // const bookAr = book.bind(arabia);
// // bookAr(20, 'walid');

// // bind function with event listners

// arabia.planes = 200;
// arabia.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', arabia.buyPlane.bind(arabia));

// challenge

// const taxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVat = taxRate(0.23);
// console.log(addVat(100));

//**********Coding Challenge #1 *********** *
// const poll = {
//   options: ['JavaScript', 'Python', 'Rust', 'c++'],
//   replies: [0, 0, 0, 0],
//   //methodes
//   diplayResults: function (type = 'array') {
//     if (type === 'string') {
//       let text = 'Poll results are: ';
//       for (let i = 0; i < this.replies.length; i++)
//         text += this.replies[i] + ' ';
//       console.log(text);
//     } else console.log(this.replies);
//   },
//   registerNewAnswer: function () {
//     let a = prompt(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++`);
//     a = Number(a);
//     if (a > 4 || a < 0) {
//       console.log('inter a valid number');
//     } else {
//       this.replies[a]++;
//       //   console.log(poll);
//     }
//     this.diplayResults('string');
//   },
// };

// // calling the methode

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus

// poll.diplayResults.call({ replies: [5, 2, 3] }, 'string');

// **********immediatly invoked function expressions ******

// (function () {
//   console.log('hello world');
// })();
// // arrow function
// (() => console.log('hello world 2'))();

// *************coding challenge 2 *****************
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
