'use strict'


// **************** functions *********************


// function add(nbr1, nbr2) {
//     return nbr1 + nbr2;
// }

// console.log(`the addition is ${add(5, 6)}`);



// **************** function expression  *********************

// const add = function (nbr1, nbr2) {
//     return nbr1 + nbr2;
// }

// console.log(`the addition is ${add(5, 6)}`);

//*************  intro to arrays ***************
// const tab = [10, 20, 30, 40];
// const tab2 = new Array(100, 200, 300, 400);

// console.log(tab[tab.length - 1])



//************* arrays methodes*******************************
// const tab = [10, 20, 30, 40];
// tab.push(50);
// console.log(tab);

// tab.unshift(0);
// console.log(tab);

// tab.pop();
// tab.shift();
// console.log(tab);

// console.log(tab.indexOf(20));


// console.log(tab.includes(50));

//****************** Intro to objects ******************

// const jonas = {
//     firstname: 'jonas',
//     age: 33,
//     friends: ['michael', 'peter', 'Steven']
// };

// console.log(`${jonas.firstname} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

//****************** objects methodes ******************

// const jonas = {
//     firstname: 'jonas',
//     birthday: 1991,
//     friends: ['michael', 'peter', 'Steven'],
//     driverlisence: true,
//     calcAge: function () {
//         return 2021 - this.birthday;
//     },
//     getSummary: function () {
//         return `${this.firstname} is a ${this.calcAge()}-year old teacher,and he has ${(this.driverlisence) ? 'a' : 'no'} dirver's licence`;
//     }

// };
// console.log(jonas.calcAge());
// console.log(jonas['calcAge']());
// //chalenge 

// console.log(jonas.getSummary());


//********************loops breaking and continuing********************
// for (let i = 0; i < 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 2);




