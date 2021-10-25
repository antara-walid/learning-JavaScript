'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// ******* functions ******
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // emptying the container
  containerMovements.innerHTML = '';
  // filling the container
  movs.forEach(function (mov, i) {
    const turnary = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${turnary}">
      ${i + 1} ${turnary}
    </div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//////////////////////////////////
const displayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, value) {
    return acc + value;
  }, 0);
  labelBalance.textContent = `${balance}€`;
  account.balance = balance;
};
///////////////////////////////
const displaySumarry = function (account) {
  //incomes
  const incomes = account.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val);
  labelSumIn.textContent = `${incomes}€`;
  //out
  const outs = account.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val);
  labelSumOut.textContent = `${Math.abs(outs)}€`;
  //interest
  const interest = account.movements
    .filter(val => val > 0)
    .map(val => (val * account.interestRate) / 100)
    .reduce((acc, val) => {
      if (val >= 1) return acc + val;
      else return acc;
    });
  labelSumInterest.textContent = `${interest}€`;
};
////////////////////////////////////
// computing usernames

const creatUserName = function (accns) {
  const Usernames = [];
  accns.forEach(function (user) {
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name.slice(0, 1);
      })
      .join('');
  });
};
///////////////////
const updateUI = function (account) {
  // display movements
  displayMovements(account?.movements);
  // display balance
  displayBalance(account);
  // display summary
  displaySumarry(account);
};

creatUserName(accounts);

// event listners /////////////

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    val => val.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and welcom messg
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '1';
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // update ui
    updateUI(currentAccount);
  }
});

// transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    val => inputTransferTo.value === val.username
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAccount?.username !== currentAccount.username &&
    reciverAccount
  ) {
    currentAccount.movements.push(-amount);
    reciverAccount.movements.push(amount);
    // update ui
    updateUI(currentAccount);
  }
});

// request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(val => val >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

// close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      val => val.username === currentAccount.username
    );
    // console.log(index);
    // delete account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// sort
let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sort);
  sort = !sort;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(1, 3));
// console.log(arr.slice(1, -1));

// arr.reverse();
// console.log(arr);
// console.log(arr.concat(['1', '2']));
// console.log(arr.join('*'));

//****** forEach  */
// arr.forEach(function (element) {
//   console.log(element);
// });

// ******* forEach for maps ********
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, index, map) {
//   console.log(value);
// });

// ********* coding challenge 1 ******
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice(1, -2);
//   const dogs = [...dogsJuliaCopy, ...dogsKate];
//   dogs.forEach(function (value, i) {
//     const dogState =
//       value >= 3 ? `an adult , and is ${value} years old ` : 'still a puppy';
//     console.log(`Dog number ${i + 1} is ${dogState}`);
//   });
// };

// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];

// checkDogs(juliaData, kateData);

// **** the map methode ******
// const euroToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });
// console.log(movementsUsd);
// // arrow function
// const movementsUsdArrow = movements.map(mov => mov * euroToUsd);

// const deposits = movements.filter(function (val) {
//   return val > 0;
// });
// console.log(deposits);

// const withdrawls = movements.filter(function (val) {
//   return val < 0;
// });
// console.log(withdrawls);
//***** reduce methode ******
// const balance = movements.reduce(function (acc, element) {
//   return acc + element;
// }, 0);

// console.log(balance);
// ******Coding Challenge #2 **********

// const calcAverageHumanAge = function (ages) {
//   //dogs to human years
//   const dogAgesInHuman = ages.map(function (value) {
//     return value <= 2 ? value * 2 : 16 + value * 4;
//   });
//   console.log(dogAgesInHuman);
//   // filter less that 18
//   const dogsKept = dogAgesInHuman.filter(function (value) {
//     return value > 18;
//   });
//   console.log(dogsKept);
//   // clac the average
//   const averageDogAge =
//     dogsKept.reduce(function (acc, value, i, arr) {
//       return acc + value;
//     }, 0) / dogsKept.length;
//   console.log(averageDogAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// ***** chaining methodes *******

// const sumInDolaar = movements
//   .filter(value => value > 0)
//   .map(value => value * 1.1)
//   .reduce((acc, value) => acc + value);

// console.log(sumInDolaar);

// ******** Coding Challenge #3 ********

// const calcAverageHumanAge2 = function (ages) {
//   const averageDogAge = ages
//     .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
//     .filter(value => value > 18)
//     .reduce((acc, value, i, arr) => acc + value / arr.length, 0);
//   console.log(averageDogAge);
// };
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

// *********** the find methode *******
// const findAccount = function (name) {
//   const account = accounts.find(val => val.owner === name);
//   console.log(account);
// };
// findAccount('Jessica Davis');

// flat methode

// const nestedArray = [[1, 2, 3], [1, 2], 0, 0];
// console.log(nestedArray.flat());

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, val) => acc + val);
// console.log(overalBalance);

// sorting arrays
// console.log(movements);
// // ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   else return -1;
// });
// console.log(movements);

// const x = new Array(5);
// console.log(x);
// x.fill(2, 3, x.length);
// console.log(x);

// const y = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(y);

// const z = Array.from({ length: 100 }, a => Math.trunc(Math.random() * 100 + 1));
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     val => Number(val.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

//////////// coding challenge 4 //////////////
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1
// dogs.forEach(function (dog) {
//   dog.recomFoodPortion = dog.weight ** 0.75 * 28;
// });

// console.log(dogs);

// // 2
// dogs.forEach(dog => {
//   if (dog.owners.includes('Sarah')) {
//     const eating =
//       dog.recomFoodPortion > dog.curFood ? 'too little' : 'too much';
//     console.log(eating);
//   }
// });

// // 3
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recomFoodPortion)
//   .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recomFoodPortion)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch, ownersEatTooLittle);

// // 4

// console.log(
//   `${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`
// );

// console.log(
//   `${ownersEatTooLittle[0]} and ${ownersEatTooLittle[1]} and ${ownersEatTooLittle[2]}'s dogs eat too little!`
// );

// // 5
// console.log(dogs.some(dog => dog.curFood === dog.recomFoodPortion));
// // 6
// console.log(
//   dogs.some(
//     dog =>
//       dog.curFood > dog.recomFoodPortion * 0.9 &&
//       dog.curFood < dog.recomFoodPortion * 1.1
//   )
// );
// // 7
// const dogsOkay = dogs.filter(
//   dog =>
//     dog.curFood > dog.recomFoodPortion * 0.9 &&
//     dog.curFood < dog.recomFoodPortion * 1.1
// );
// console.log(dogsOkay);

// // 8
// const dogsC = dogs
//   .slice()
//   .sort((a, b) => a.recomFoodPortion - b.recomFoodPortion);

// console.log(dogsC);
