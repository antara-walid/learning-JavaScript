// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun');
// console.log(40 + 8);

// console.log('walid');

// let variable = "hello";

// console.log(variable);

// console.log(typeof true);
// console.log(5 * 2, 4 ** 2);


// *********************coding challenge #1 *********


// const markHight = 1.69, johnHight = 1.95, markMass = 78, johnMass = 92;

// let markBMI = markMass / markHight ** 2;
// let johnBMI = johnMass / johnHight ** 2;

// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);



// ************strings************

// const firstName = 'walid';
// const job = 'student';
// const birthday = 2000;
// const year = 2021;

// const walid = " I'am " + firstName + ', a ' + (year - birthday) + " years old " + job;

// console.log(walid);

// ******template litterals ******************

// const walidNew = `i'am ${firstName}, a ${year - birthday} years old ${job}`;
// console.log(walidNew);

// console.log("this is the first line\n\
// then the seconde ");


// console.log(`this line 1 
// and line 2`);


// ****** if else statments ******

// const age = 10;

// if (age >= 18) {
//     console.log("you can start driving license");
// } else {
//     console.log(`your are too young waint another ${18 - age} years`);
// }


// *********************coding challenge #2 *********

// if (markBMI > johnBMI) {
//     console.log("mark has higher BMI than john's");
// } else {
//     console.log("john BMI is higher than Mark's")
// }


// if (markBMI > johnBMI) {
//     console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
// } else {
//     console.log(`john's BMI (${johnBMI}) is higher than mark's (${markBMI})`)
// }


// *********type conversion and coercion *****


// type conversion 
// const imputYear = '2000';
// console.log(imputYear + 18);

// console.log(Number(imputYear) + 18);

//type  coercion 

// ********* truthly and falsy values *****

// let heigth = 1;
// if (heigth) {
//     console.log("height is defined");
// } else {
//     console.log("it's not defined");
// }

// ***** Logical operator ************

// let A = true;
// let B = true;

// console.log(!A);
// console.log(!A AN D B);
// console.log(!A OR B);


// *********************coding challenge #3 *********

// dolphinsAv = (97 + 112 + 101) / 3;
// koalasAv = (109 + 95 + 106) / 3;
// console.log(dolphinsAv, koalasAv);
// if (dolphinsAv > koalasAv) {
//     if (dolphinsAv > 100) console.log("the winers are dolphins");
//     else console.log("no one wins");

// } else if (dolphinsAv < koalasAv) {
//     if (koalasAv > 100) console.log("the winers are koalas");
//     else console.log("no one wins");

// } else {
//     if ((koalasAv > 100) && (dolphinsAv > 100)) console.log("it's a draw");
//     else console.log("no one wins");
// }

//  ************ the switch statement *************

// const day = "friday";

// switch (day) {
//     case 'monday':
//         console.log("it s monday");
//         break;
//     case 'tuesday':
//         console.log("it s tuesday");
//         break;
//     default:
//         console.log("it s an other day");
// }

//  ************ the conditional operator *************

// age = 18;
// age >= 18 ? console.log("you can drive") : console.log("you cant drive");

// const drive = age >= 18 ? 'yes' : 'no';
// console.log(drive);


// *********************coding challenge #4 *********

// const bill = 275;

// let tip = (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




