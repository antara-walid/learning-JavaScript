'use strict';

// const fct1 = () => console.log('hello world');
// const fct2 = fct1;
// fct1();
// fct2();

// primitives vs objects

const person = {
  firstName: 'walid',
  age: 21,
};
console.log(person);

const person2 = Object.assign({}, person);

console.log(person2);
person2.age = 22;
console.log(person2);
